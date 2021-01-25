const router = require('koa-router')()
let controller = require('../controllers/userController')


const {
  createToken
} = require('../auth')

router.prefix('/user')

router.post('/login', controller.login)

router.post('/regist', controller.regist)


module.exports = router