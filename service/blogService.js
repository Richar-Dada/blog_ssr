import Blog from '../models/bolg'

const blogModel = new Blog()

let list = (callback) => {
    console.log('service')
    blogModel.list((err, blogs) => {
        if (err) {
            return callback({ code: 404, message: 'no result' })
        }
        callback({ code: 200, message: 'success', blogsList: blogs })
    })
}

let xxx = () => {}

export default {
    list: list
}