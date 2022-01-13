const connection = require("./../connection")
exports.create = (state) => {
    return new Promise((resolve, reject) => {
        console.log(state)
       let sql = "INSERT INTO state SET ?"
        connection.query(sql, state, (err, result) => {
            if(err) {
                // return reject(err)
                console.log(err)
            }
            state.id = result.insertId
            resolve(state)
        })
    })
}