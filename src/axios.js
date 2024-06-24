import axios from 'axios'
const instance = axios.create({
    baseURL: "https://messagingappbackend-u6avjq3t.b4a.run/"
  })
export default instance;
