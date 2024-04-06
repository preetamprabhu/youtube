// import axios from 'axios'

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         // 'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Key': '311fc3f797mshbe404c6c89a47d7p117129jsnf90679ffb0c1',
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//         'Content-Type': 'application/json', // You can add other headers as needed
//     },
//     params: {
//         maxResults: 50
//     }
// });

// export const FetchFromAPI = async (url) => {
//     try {

//         const result = await axiosInstance.get(`${url}`);
//         return result.data;

//     } catch (error) {
//         console.log(error.message);
//     }
// }

import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_KEY ='311fc3f797mshbe404c6c89a47d7p117129jsnf90679ffb0c1'
//  "81568f89ddmsh2d090323c33d7c7p1c99adjsn3d21c5700074";
// '311fc3f797mshbe404c6c89a47d7p117129jsnf90679ffb0c1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    "Content-Type": "application/json",
  },
  params: {
    maxResults: 50,
  },
});

const FetchFromAPI = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    // throw error;
  }
};
export default FetchFromAPI;
