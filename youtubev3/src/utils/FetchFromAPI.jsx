import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        // 'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': '311fc3f797mshbe404c6c89a47d7p117129jsnf90679ffb0c1',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'Content-Type': 'application/json', // You can add other headers as needed
    },
    params: {
        maxResults: 50
    }
});

export const FetchFromAPI = async (url) => {
    try {

        const result = await axiosInstance.get(`${url}`);
        return result.data;
    
    } catch (error) {
        console.log(error.message);
    }
}