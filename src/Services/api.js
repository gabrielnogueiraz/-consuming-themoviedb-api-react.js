import axios from "axios";

// Base Url: https://api.themoviedb.org/3/
// Url Api: https://api.themoviedb.org/3/movie/now_playing?api_key=359a81312ee88eead710b885cc5fa4c3

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
