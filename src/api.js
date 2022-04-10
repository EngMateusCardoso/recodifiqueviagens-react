import axios from 'axios'

const api = axios.create({
    baseURL:'https://apirecodifiqueviagens.herokuapp.com/'
})

export default api;
