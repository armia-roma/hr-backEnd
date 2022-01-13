const Department = require('./../models/department')
const connection = require('./../connection')

exports.create = (deparment) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO department SET ?`
        connection.query(sql, deparment, (err, result) => {
            if(err) {
                return reject(err)
            }
            deparment.id = result.insertId
            resolve(deparment)
        })
    })
}
exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM department WHERE id = ? "
        connection.query(sql, id, (err, result) => {
            if(err) return reject(err)
            if(result.length){
                const department = new Department(result[0].id, result[0].code, result[0].name, result[0].type)
                return resolve(department)
            }
            reject({message: 'not found'})

        })
    })
}
exports.getAll = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM department`
        connection.query(sql, (err, result) => {
            if(err) return reject(err)
            if(result.length){
                const departments = result.map( department => new Department(department.id, department.code, department.name, department.type))
                resolve(departments)

            }
        })
    })
}
// search by name even code
exports.search = (search_param) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM department WHERE name LIKE ? OR code LIKE ?`;    
        connection.query(sql, [ '%'+search_param+'%', '%'+search_param+'%'], function (err, result) {
            if (err) return reject(err);
            if(result.length){
                resolve(new Department(result[0].id, result[0].code, result[0].name, result[0].type))                
            }
        }) 
    });
}

//update department
exports.update = (id, record) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE department SET code = ?, name = ?, type = ? WHERE id = ?`;
        connection.query(sql,[record.code, record.name, record.type, id], (err, result) => {
            if(err) return reject(err);
            if(result.affectedRows == 0) {
                return reject({ message: " not found "})
            }
            resolve(new Department(record.id, record.code, record.name, record.type))
        })
    })
}
exports.remove = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM department WHRER id = ${id}`
        connection.query(sql, (err, result) => {
            if(err){
                return reject(err)
            }
            if(result.affectedRows == 0) {
                return resolve({message: "not_found"})
            }
            resolve({
                message: "Department Deleted"
            })
        })

    })
}