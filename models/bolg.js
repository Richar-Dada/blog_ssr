const db = require('../util/DBUtil')
const apiConfig = require('../server/api/config')

export default class Bolg {
  list (callback) {
    let sql = 'select * from blogList'   
    db.query(sql, [], (err, result) => {
      if (err) {
          return callback(true)
      }
      callback(false, result)
    })
  }

  insert (params, callback) {
    let sql = 'INSERT INTO blogList (id,tit,author,blogDesc,createDate,blogContent) VALUES(?,?,?,?,?,?) '
    let values = [
      new Date().getTime().toString(),
      params.title,
      params.author,
      params.desc,
      new Date().getTime().toString(),
      params.content.toString()
    ]
    console.log(values)
    db.query(sql, values, (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false)
    })
  }
}
