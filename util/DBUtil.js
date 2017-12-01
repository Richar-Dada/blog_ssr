const mysql = require('mysql')
const mysqlConfig = require('./server.config').db

const pool = mysql.createPool(mysqlConfig)

let query = function (sql, params, callback) {
    try {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err)
                return callback(true)
            }
            connection.query(sql, params, (err, result) => {
                connection.release()
                if (err) {
                    console.log('db error17:' + err)
                    return callback(false)
                }
                callback(true, result)
            })
        })
    } catch (err) {
        console.log('db error24:' + err)
        return callback(true)
    }
}

module.exports.query = query