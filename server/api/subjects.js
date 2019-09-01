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
