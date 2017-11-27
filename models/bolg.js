const db = require('../util/DBUtil')
const apiConfig = require('../server/api/config')

export default class Bolg {
    list (callback) {
        let sql = 'select * from blog'   
        db.query(sql, [], (err, result) => {
            if (err) {
                return callback(true)
            }
        })
    }
}
