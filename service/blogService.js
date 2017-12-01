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

export default {
    list: list,
    add: add
}