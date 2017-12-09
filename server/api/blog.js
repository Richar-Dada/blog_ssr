import { Router } from 'express'
import  blogService from '../../service/blogService'

const router = Router()

router.post('/blog/add', function(req, res, next) {
  try {
    blogService.add(req.body, (result) => { res.json(result) })
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
})

router.get('/blog/list', function(req, res, next) {
  try {
    blogService.list((result) => { res.json(result) })
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
})

router.get('/blog/:id', function(req, res, next) {
  try {
    blogService.getById(req.params.id, (result) => { res.json(result) })
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
})

router.post('/blog/update', function(req, res, next) {
  console.log('post')
  console.log(req.body)
  try {
    blogService.update(req.body, (result) => { res.json(result) })
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！ ' })
  }
})

export default router
