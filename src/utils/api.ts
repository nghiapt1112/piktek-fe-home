import axios from 'axios';
import { proxy_path } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: proxy_path.basePath
});

axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    // @ts-ignore
    request.headers.Authorization = token;
  }
  // @ts-ignore
  request.headers['Content-Type'] = 'application/json';
  // return config;
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  // console.log('Response:', JSON.stringify(response, null, 2));
  return response;
});

export default axiosInstance;
