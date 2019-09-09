import request from 'request'

const HOST = `http://127.0.0.1`
const PORT = 37373
const apis = {
  getSubjects: _get({ url: `${HOST}:${PORT}/subjects` }),
  getArticles: _get({ url: `${HOST}:${PORT}/articles` }),
  postSubjects: _post({ url: `${HOST}:${PORT}/subjects` }),
  deleteSubjects: _delete({ url: `${HOST}:${PORT}/subjects` })
}

export default apis

function _get(option) {
  return async config => {
    return await new Promise((resolve, reject) => {
      request.get(`${option.url}${config ? config.query : ''}`, function(error, res, body) {
        if (error || [200, 204].indexOf(res.statusCode) === -1) {
          reject()
        } else {
          resolve(JSON.parse(body).data)
        }
      })
    })
  }
}

function _post(option) {
  return async config => {
    return await new Promise((resolve, reject) => {
      request.post(
        option.url,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(config.body)
        },
        function(error, res, body) {
          if (error || [200, 204].indexOf(res.statusCode) === -1) {
            reject()
          } else {
            resolve(JSON.parse(body).data)
          }
        }
      )
    })
  }
}

function _delete(option) {
  return async config => {
    return await new Promise((resolve, reject) => {
      request.del(
        option.url,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(config.body)
        },
        function(error, res, body) {
          if (error || [200, 204].indexOf(res.statusCode) === -1) {
            reject()
          } else {
            resolve()
          }
        }
      )
    })
  }
}
