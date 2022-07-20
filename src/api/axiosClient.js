import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com',
  paramsSerializer: (params) => queryString.stringify(params),
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
}
});



export default axiosClient;

