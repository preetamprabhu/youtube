import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {

    params: {
        maxResults: 50
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}



// const axios = require('axios');

// const options = {
//   params: {
//     maxResults: 50
//   },
//   headers: {
//     'X-RapidAPI-Key': '311fc3f797mshbe404c6c89a47d7p117129jsnf90679ffb0c1',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };
