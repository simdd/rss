import http from 'http'

const HOST = `http://127.0.0.1:37373`
const apis = {
  getSubjects: wrap({ url: `${HOST}/subjects` })
}

export default apis

function wrap(option) {
  return async () => {
    return await new Promise(resolve => {
      http.get(option.url, function(res) {
        res.on('data', function(chunk) {
          const ret = JSON.parse(chunk)
          resolve(ret.data)
        })
      })
    })
  }
}
