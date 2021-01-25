const router = require('koa-router')()
let controller = require('../controllers/blogController')
const {
  verifyToken
} = require('../auth')

router.prefix('/blog')

router.get('/list', verifyToken, controller.welcome)
router.get('/comment', verifyToken, controller.getBlogComment)
router.get('/detail', verifyToken, controller.getBlogDetail)
router.post('/publish', verifyToken, controller.publishBlog)
router.post('/writeComment', verifyToken, controller.writeComment)



module.exports = router