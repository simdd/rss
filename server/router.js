const Router = require('koa-router')
const router = new Router()

const demo = require('./api/demo')
const subjects = require('./api/subjects')
const articles = require('./api/articles')

router.get('/demo', demo.get)
router.get('/subjects', subjects.get)
router.post('/subjects', subjects.add)
router.delete('/subjects', subjects.delete)
router.get('/articles', articles.get)

module.exports = router
