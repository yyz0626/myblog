const router = require('koa-router')()
let controller = require('../controllers/blogController')
const {
  verifyToken
} = require('../auth')

router.prefix('/blog')

router.get('/list', controller.welcome)
router.get('/comment', controller.getBlogComment)
router.get('/detail', controller.getBlogDetail)
router.post('/publish', controller.publishBlog)
router.post('/writeComment', verifyToken, controller.writeComment)
router.post('/delete', controller.delete)



module.exports = router