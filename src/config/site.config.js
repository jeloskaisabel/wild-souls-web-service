import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.18:3000/', // Direccion IP
});


export { api };
