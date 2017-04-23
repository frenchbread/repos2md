import axios from 'axios'

const axe = axios.create({
  baseURL: 'https://api.github.com'
})

export default axe
