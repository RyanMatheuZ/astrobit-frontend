import axios from 'axios'

const getHttpRequest = async (url, params) => await axios.get(url, { params })

export default getHttpRequest
