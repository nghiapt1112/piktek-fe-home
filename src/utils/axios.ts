import axios from 'axios';
import { proxy_path } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: proxy_path.basePath
});
//
// axiosInstance.interceptors.request.use((request) => {
//   console.log('Starting Request', JSON.stringify(request, null, 2));
//   return request;
// });
//
// axiosInstance.interceptors.response.use((response) => {
//   console.log('Response:', JSON.stringify(response, null, 2));
//   return response;
// });

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorageService.getAccessToken();
//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

//Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   function (error) {
//     try {
//       const originalRequest = error.config;
//       if (
//         error.response.status === 401 &&
//         originalRequest.url === `${config.apiUrl}/login`
//       ) {
//         window.location.href = '/login';
//         return Promise.reject(error);
//       }
//
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         const refreshToken = localStorageService.getRefreshToken();
//         return axios
//           .post(`${config.apiUrl}/refresh?refreshToken=${refreshToken}`)
//           .then((res) => {
//             if (res.status === 200) {
//               localStorageService.setToken(res.data);
//               api.defaults.headers.common['Authorization'] =
//                 'Bearer ' + localStorageService.getAccessToken();
//               return api(originalRequest);
//             }
//           })
//           .catch((error) => {
//             localStorageService.clearToken();
//             window.location.href = '/login';
//             return Promise.reject(error);
//           });
//       }
//
//       if (error.response.status === 403) {
//         return Promise.reject('Forbidden');
//       }
//       const {
//         response: { data, statusText },
//       } = error;
//       const erMessage =
//         (data && data.message) ||
//         (data.messages && data.messages[0]) ||
//         statusText;
//       return Promise.reject(erMessage);
//     } catch (error) {
//       return Promise.reject('ERROR');
//     }
//   }
// );
//
export default axiosInstance;
