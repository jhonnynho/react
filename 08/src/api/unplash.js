import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cFgdB4iMIL637eoy5QDB7mysjX0MymCrXyboKfX1amg'
    } 
});