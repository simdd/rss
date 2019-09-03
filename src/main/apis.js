import http from 'http'

const HOST = `http://127.0.0.1`
const PORT = 37373
const apis = {
  getSubjects: get({ url: `${HOST}:${PORT}/subjects` }),
  getArticles: get({ url: `${HOST}:${PORT}/articles` }),
  postSubjects: post({ host: HOST, port: PORT, url: `/subjects` })
}

export default apis

function get(option) {
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

function post(option) {
  return async config => {
    return await new Promise(resolve => {
      let body = []
      console.log({
        host: option.host,
        port: option.port,
        path: option.url,
        method: 'POST'
      })
      http.request(
        {
          host: '127.0.0.1',
          port: option.port,
          path: option.url,
          method: 'POST'
        },
        function(res) {
          res.on('data', function(chunk) {
            body.push(chunk)
          })
          res.on('end', function() {
            body = Buffer.concat(body).toString()
            resolve(JSON.parse(body).data)
          })
          res.on('error', function(e) {
            console.log(e)
          })
        }
      )
    })
  }
}
