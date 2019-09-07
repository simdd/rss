import request from 'request'
import { reject } from 'any-promise'

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

function post(option) {
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
