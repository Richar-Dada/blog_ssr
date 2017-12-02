import Blog from '../models/bolg'

const blogModel = new Blog()

let list = (callback) => {
  blogModel.list((err, blogs) => {
    if (err) {
        return callback({ code: 404, message: 'no result' })
    }
    callback({ code: 200, message: 'success', blogsList: blogs })
  })
}

let add = (blog, callback) => {
  blogModel.insert(blog, (err, res) => {
    if (err) {
      return callback({ code: 404, message: 'insert fail' })
    }
    callback({ code: 200, message: 'success' })
  })
}

const getById = (id, callback) => {
  blogModel.one(id, (err, res) => {
    if (err) {
      return callback({ code: 404, message: 'no result with id' })
    }
    callback({ code: 200, message: 'success', blog: res })
  })
}

export default {
    list: list,
    add: add,
    getById, getById
}