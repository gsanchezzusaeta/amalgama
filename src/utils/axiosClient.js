import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default',
});

export default axiosInstance;