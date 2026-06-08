import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://api.snlab.info/api/",
    withCredentials: true,
})