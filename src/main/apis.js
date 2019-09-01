import http from 'http'

const HOST = `http://127.0.0.1:37373`
const apis = {
  getSubjects: wrap({ url: `${HOST}/subjects` }),
  getArticles: wrap({ url: `${HOST}/articles` })
}

export default apis

function wrap(option) {
  return async config => {
    return await new Promise(resolve => {
      let body = []

      http.get(`${option.url}${config ? config.query : ''}`, function(res) {
        res.on('data', function(chunk) {
          body.push(chunk)
        })
        res.on('end', function() {
          body = Buffer.concat(body).toString()
          resolve(JSON.parse(body).data)
        })
      })
    })
  }
}
