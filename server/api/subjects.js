const Parser = require('rss-parser')
const parser = new Parser()

exports.get = async ctx => {
  const docs = await new Promise(resolve => {
    ctx.db.find({}, function(err, docs) {
      resolve(docs)
    })
  })

  ctx.body = {
    errcode: 0,
    errmsg: '',
    data: {
      subjects: docs
    }
  }
}

exports.add = async ctx => {
  const url = ctx.request.body.url
  const feed = await parser.parseURL(url)

  var doc = {
    url: url,
    title: feed.title
  }

  const docs = await new Promise(resolve => {
    ctx.db.insert(doc, function(err, newDoc) {
      resolve(newDoc)
    })
  })

  ctx.body = {
    errcode: 0,
    errmsg: '',
    data: {
      subject: docs
    }
  }
}

exports.delete = async ctx => {
  const id = ctx.request.body.id

  await new Promise(resolve => {
    ctx.db.remove({ _id: id }, {}, function(err) {
      resolve()
    })
  })

  ctx.body = {
    errcode: 0,
    errmsg: '',
    data: {}
  }
}
