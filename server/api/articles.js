const Parser = require('rss-parser')
const parser = new Parser()

exports.get = async ctx => {
  const docs = await new Promise(resolve => {
    ctx.db.find({ _id: ctx.query.sid }, function(err, docs) {
      resolve(docs)
    })
  })

  const feed = await parser.parseURL(docs[0].url)
  ctx.body = {
    errcode: 0,
    errmsg: '',
    data: {
      articles: feed.items
    }
  }
}
