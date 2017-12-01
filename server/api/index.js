import { Router } from 'express'

import users from './users'
import blog from './blog'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(blog)

export default router
