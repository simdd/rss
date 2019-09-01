const Koa = require('koa')
const Nedb = require('nedb')

const app = new Koa()
const db = new Nedb({ filename: 'server/urls', autoload: true });
const router = require('./router')

app.use(async (ctx, next) => {
  console.log('path in: ', ctx.request.path)
  ctx.db = db
  await next()
})

app.use(router.routes()).use(router.allowedMethods())

function main() {
  app.listen(37373, () => {
    console.log('>>> server start: http://127.0.0.1:37373')
  })
}

module.exports = main
