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
  const url = ctx.params.url
  const feed = await parser.parseURL(url)

  var doc = {
    url: url,
    title: feed.title
  }

  const docs = new Promise(resolve => {
    ctx.db.insert(doc, function(err, newDoc) {
      resolve(newDoc)
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