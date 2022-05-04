import axios from 'axios'

const postHttpRequest = (url, data) => {
  axios.post(url, { data }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default postHttpRequest
