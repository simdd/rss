import request from 'request'

const HOST = `http://127.0.0.1`
const PORT = 37373
const apis = {
  getSubjects: get({ url: `${HOST}:${PORT}/subjects` }),
  getArticles: get({ url: `${HOST}:${PORT}/articles` }),
  postSubjects: post({ url: `${HOST}:${PORT}/subjects` })
}

export default apis

function get(option) {
  return async config => {
    return await new Promise(resolve => {
      request.get(`${option.url}${config ? config.query : ''}`, function(error, res, body) {
        resolve(JSON.parse(body).data)
      })
    })
  }
}

function post(option) {
  return async config => {
    return await new Promise(resolve => {
      request.post(
        option.url,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(config.body)
        },
        function(error, res, body) {
          resolve(JSON.parse(body).data)
        }
      )
    })
  }
}
