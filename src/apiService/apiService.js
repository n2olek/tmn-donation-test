
import axios from 'axios'
import { BASE_API, BASE_PATH_API } from './apiConfig'

const getConfig = (token) => {
  const config = {
    baseURL: BASE_API + BASE_PATH_API,
    headers: {}
  }
  return config
}

const axiosSuccess = (result) => {
  return result.data
}

const axiosError = (error) => {
  alert.error(error.message)
}

const axiosService =  (type, url, params) => {
  let config = getConfig()

  switch(type){
    case 'get': return axios.get(url, config).then(axiosSuccess).catch(axiosError)
    case 'post': return axios.post(url, params, config).then(axiosSuccess).catch(axiosError)
    default: return false
  }
}

export default {
  get: (url, params) => axiosService('get', url, params),
  post: (url, params) => axiosService('post', url, params),
}