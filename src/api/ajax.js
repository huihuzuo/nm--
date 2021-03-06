
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {
    let promsie
    // 执行异步请求
    if(type==='GET') { // 发送GET请求
      // 拼请求参数串
      // data: {username: tom, password: 123}
      // paramStr: username=tom&password=123
      let paramStr = ''

      Object.keys(data).forEach(key => {
        paramStr += key + '=' + data[key] + '&'
      })
      if(paramStr) {
        paramStr = '? ' + paramStr.substring(0, paramStr.length-1)
        url=url+paramStr
      }
      // 使用axios发get请求
      promsie = axios.get(url)
      //console.log(url)

      //console.log(promise)
    } else {// 发送POST请求
      // 使用axios发post请求
      promsie = axios.post(url, data)
    }

    promsie.then(response => {
      // 成功则调用resolve(response.data)
      resolve(response.data)
    }).catch(error => {
      // 失败则调用reject
      reject(error)
    })



  })


}

/*
使用axios和promise封装的发ajax请求的函数模块
函数返回值是promise
 */
/*
ajax().then(response => {
  const result = response.data
})
*/
/*
const response = await ajax()
const result = response.data
*/
/*
const result = await ajax()
*/
