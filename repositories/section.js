const connection = require("./../connection");
const Section = require("./../models/section")

exports.create = (section) => {
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO section SET ?'
        connection.query(sql, section, (err, result) => {
            if(err) return reject(err);
            section.id = result.insertId
            resolve(section)
        })
    })
}
exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM section WHERE id = ? "
        connection.query(sql, id, (err, result) => {
            if(err) return reject(err)
            if(result.length){
                const section = new Section(result[0].id, result[0].code, result[0].department, result[0].name)
                return resolve(section)
            }
            reject({message: 'not found'})

        })
    })
}
exports.getAll = () => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM section"
        connection.query(sql, (err, result) => {
            if(err) return reject(err)
            if(result.length) {
                return resolve(result.map(section => new Section(section.id, section.code, section.department, section.name)))
            }
            reject(err)
        })
    })
}
exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM section WHERE id = ?"
        connection.query(sql, [id], (err, result) => {
            if(err) return reject(err)
            if(result.length) {
                return resolve(new Section(result[0].id, result[0].code, result[0].department, result[0].name))
            }
            reject('not found')    
        })
    })
}