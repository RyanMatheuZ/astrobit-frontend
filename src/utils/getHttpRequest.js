import axios from 'axios'

const getHttpRequest = (url, params) => axios.get(url, { params })

export default getHttpRequest
