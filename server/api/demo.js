const Parser = require('rss-parser')
const parser = new Parser()

exports.get = async ctx => {
  const feed = await parser.parseURL('https://aotu.io/atom.xml')

  var doc = {
    url: 'http://fex.baidu.com/feed.xml',
    title: 'FEX baidu',
  }

  ctx.db.insert(doc, function(err, newDoc) {
    console.log('err----------------', err)
    console.log('newdoc------------------------', newDoc)
  })

  ctx.body = {
    errcode: 0,
    errmsg: '',
    data: feed
  }
}
