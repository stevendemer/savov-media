import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

export const fetchFromApi = async (url) => {
  const { data } = await instance.get(`${url}`);

  return data;
};
