import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
  
  
},error=>{
  return Promise.reject(error);
});

 const genericRequests = {
   get:(url) => axios.get(url),
   post:(url,data) => axios.post(url,data),
   put:(url,data) => axios.put(url,data),
   delete:(url) => axios.delete(url)
 }
 export default genericRequests;
