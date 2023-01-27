import api from "./api";
const API_KEY = process.env.REACT_APP_API_KEY;

function getDetailMovies(id,language) {
  console.log(`디테일 id는${id}`);
  return async (dispatch) => {
    const detailApi = api.get(`movie/${id}?api_key=${API_KEY}&language=${language}`);

    const creditsApi = api.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=${language}`
    );

    const reviewsApi = api.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=${language}&page=1`
    )

    const recommendApi = api.get(
      `movie/${id}/recommendations?api_key=${API_KEY}&language=${language}&page=1`
    )
   
    const trailerApi =api.get(
      `movie/${id}/videos?api_key=${API_KEY}&language=${language}`
    )

    let [detailData, creditsData,reviewsData,recommendData,trailerData] = await Promise.all([
      detailApi,
      creditsApi,
      reviewsApi,
      recommendApi,
      trailerApi
    
    ]);
    console.log("데이터 받아라~", detailData.data);
    dispatch({
      type: "GET_DETAIL_SUCCESS",
      payload: {
        detailData: detailData.data,
        creditsData: creditsData.data,
        reviewsData: reviewsData.data,
        recommendData: recommendData.data,
        trailerData:trailerData.data
        
      },
    });
  };
}

export const detailAction = {
  getDetailMovies,
};
