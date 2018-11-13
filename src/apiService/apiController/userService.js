import apiService from '../apiService'

const apiPath = '/api/User'

export const userService = {
  Login: (params) => {
    //return apiService.post(`${apiPath}/Login`, params)
    console.log(params)
  },
}
