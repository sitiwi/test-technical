import axios from "axios";

export const getGenres = () => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49`)
    .then((res) => {
      if (res.status === 200) {
      	console.log(res.data.genres)
        dispatch({
          type: "GET_GENRES",
          payload: res.data.genres,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getMovie = (page=1) => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&${page}`)
    .then((res) => {
      if (res.status === 200) {
      	console.log(res.data.results)
        dispatch({
          type: "GET_MOVIE",
          payload: res.data.results,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getDetail = (id) => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`)
    .then((res) => {
      if (res.status === 200) {
      	console.log(res.array)
        dispatch({
          type: "GET_DETAIL",
          payload: res.data
        });
      }
    })
    .catch((err) => console.log(err));
};