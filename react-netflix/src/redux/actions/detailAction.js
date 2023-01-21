import api from "./api";
const API_KEY = process.env.REACT_APP_API_KEY;


function getDetailMovies(id) {
        console.log(`디테일 id는${id}`)
    return async(dispatch) => {

        const detailApi = api.get(
            `movie/${id}?api_key=${API_KEY}&language=en-US`
          );

          let detailData = await detailApi;
          console.log("데이터 받아라~",detailData.data)
          dispatch({type:"GET_DETAIL_SUCCESS", payload:{detailData:detailData.data}})
    }

   



}








export const detailAction = {
    getDetailMovies,
  };