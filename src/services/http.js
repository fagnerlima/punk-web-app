import axios from 'axios';

const http = axios.create({ baseURL: 'https://api.punkapi.com/v2' });

export default http;
