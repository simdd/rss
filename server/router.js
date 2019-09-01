const Router = require('koa-router')
const router = new Router()

const demo = require('./api/demo')
const subjects = require('./api/subjects')

router.get('/demo', demo.get)
router.get('/subjects', subjects.get)

module.exports = router
