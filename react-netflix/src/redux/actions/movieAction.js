import api from "./api";
const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const topRatedApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const popularMoviesApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upcomingApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)

      // let data = await Promise.all([topRatedApi,popualrMovieApi,upcomingApi])  //api한번에 보여주기 느낌.

      let [topRatedMovies, popularMovies, upcomingMovies,genreList] = await Promise.all([
        topRatedApi,
        popularMoviesApi,
        upcomingApi,
        genreApi,
      ]);

      console.log("장르:",genreList.data.genres[0].name)

      // console.log(topRatedMovies)
      // console.log(popualrMovies)
      // console.log(upcomingMovies)

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList:genreList.data.genres
        },
      });
      // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
      // let respones = await fetch(url)
      // let data = respones = await respones.json()

      // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
      // let respones2 = await fetch(url)
      // let data2 = respones = await respones.json()

      // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
      // let respones3 = await fetch(url)
      // let data3 = respones = await respones.json()
    } catch (error) {
        //에러 핸들린
        dispatch({type:"GET_MOVIES_FAILURE"})
    }
  };
}

export const movieAction = {
  getMovies,
};
