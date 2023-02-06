import api from "./api";
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "bbf06418c6753b7dbc8d03c06aad460c"

function searchMovies(name,page) {
    
  return async (dispatch) => {
    console.log("페이지봐라",page)
    console.log("받은이름요",name)
    try {

      const searchApi = api.get(
        `search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=${page}&include_adult=false`
      );


      const genreApi = api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`)

      // let data = await Promise.all([topRatedApi,popualrMovieApi,upcomingApi])  //api한번에 보여주기 느낌.

      let [searchMovie,genreList] = await Promise.all([
        searchApi,
        genreApi,
    
      ]);


      // console.log(topRatedMovies)
      // console.log(popualrMovies)
      // console.log(upcomingMovies)
      dispatch({
        type: "GET_SEARCH_SUCCESS",
        payload: {

            genreList:genreList.data,
            searchData:searchMovie.data,
          
          
        },
      });
     
   
    } catch (error) {
        //에러 핸들린
    
    }
  };
}

export const searchAction = {
  searchMovies,
};
