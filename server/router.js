const Router = require('koa-router')
const router = new Router()

const demo = require('./api/demo.js')

router.get('/demo', demo.get)

module.exports = router
