import axios from 'axios';

const api = axios.create();

api.defaults.baseURL ='http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api';

export default api;