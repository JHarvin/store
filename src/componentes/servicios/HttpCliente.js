import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

 const genericRequests = {
   get:(url) => axios.get(url),
   post:(url,data) => axios.post(url,data),
   put:(url,data) => axios.put(url,data),
   delete:(url) => axios.delete(url)
 }
 export default genericRequests;
