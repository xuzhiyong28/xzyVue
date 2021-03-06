import axios from 'axios'
const  axiosBaseURL = '';
let http = axios.create({
  baseURL : axiosBaseURL,
  timeout: 20000,
  maxContentLength: 2000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'project' : 'xzyVue'
  },
  //向服务器发送请求时修改参数
  transformRequest : [function(data){
    //对请求进行格式化
    return data;
  }],
  //接受服务区返回参数时候可以修改返回值
  transformResponse : [function(data){
    console.log('response返回值 =' + data);
    return data;
  }]
});

//请求拦截器
http.interceptors.request.use(config => {
  console.log('===axios请求拦截器,可对request数据进行修改===');
  var _ts = new Date(); //对每个请求加时间戳
  if(config.method == 'post'){
    if(config.data != null){
      config.data['_ts'] = _ts.getTime();
    }
  }
  if(config.method == 'get'){
    config.url = config.url.indexOf('?') > 0 ? (config.url + "&_ts=" + _ts.getTime()) : ( config.url + "?_ts=" + _ts.getTime() );
  }
  console.log(JSON.stringify(config));
  return config;
},error => {

});

http.interceptors.response.use(config => {
  console.log('===axios响应拦截器，可对response数据进行修改===');
  return config;
},error => {

})

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    console.log('===请求发生错误===');
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}

