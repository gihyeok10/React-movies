import api from "./api";
const API_KEY = process.env.REACT_APP_API_KEY;
function getAll(page) {
  return async (dispatch) => {
    try {
      const allmoviesApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );

      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      // let data = await Promise.all([topRatedApi,popualrMovieApi,upcomingApi])  //api한번에 보여주기 느낌.

      let [allmoviesData, genreList] = await Promise.all([
        allmoviesApi,
        genreApi,
      ]);

      // console.log(topRatedMovies)
      // console.log(popualrMovies)
      // console.log(upcomingMovies)
      dispatch({
        type: "GET_All_SUCCESS",
        payload: {
          allmoviesData: allmoviesData.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      //에러 핸들린
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const allAction = {
  getAll,
};
