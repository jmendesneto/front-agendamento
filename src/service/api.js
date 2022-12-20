import axios from 'axios';
import {toast} from 'react-toastify';

export const api = axios.create({
    baseURL:'http://localhost:8080',
})

export default api;