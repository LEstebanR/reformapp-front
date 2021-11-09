import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
  //  || 'http://localhost:4000',

});

export default customAxios;