const db = require('../util/DBUtil')
const apiConfig = require('../server/api/config')

function postToSQLUpdate(object) {
  let updated = [], params = [];
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      if (key === 'id') {
        continue;
      }
      updated.push(key + ' = ?')
      params.push(object[key])
    }
  }
  updated.push('updated_at = ?')
  params.push(Date.now())
  return {
    updated: updated.join(','),
    params: params
  }
}

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

  one (blogId, callback) {
    const sql = 'SELECT * FROM blogList WHERE id = ?'
    db.query(sql, [blogId], (err, result) => {
      if (err) {
        callback(true)
      }
      callback(false, result)
    })
  }

  update (params, callback) {
    console.log('+++++++')
    console.log(params)
    const sql = 'UPDATE blogList SET tit = ?, blogDesc = ?, blogContent = ? WHERE id = ?'

    let data = [
      params.title,
      params.desc,
      params.content.toString(),
      params.id
    ]

    console.log(sql)
    db.query(sql, data, (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result)
    })
  }
}
