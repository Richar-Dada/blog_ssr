import { Router } from 'express'
import  blogService from '../../service/blogService'

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  console.log('get----')
  console.log(users)
  res.json(JSON.stringify(users))
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.get('/blogs', function(req, res, next) {
  console.log('server')
  console.log(blogService.list)
  try {
    blogService.list((result) => { res.json(result) })
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
})

export default router
