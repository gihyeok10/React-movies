import api from "./api";
const API_KEY = process.env.REACT_APP_API_KEY;

function getDetailMovies(id) {
  console.log(`디테일 id는${id}`);
  return async (dispatch) => {
    const detailApi = api.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);

    const creditsApi = api.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    const reviewsApi = api.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )

    const recommendApi = api.get(
      `movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    )
   

    let [detailData, creditsData,reviewsData,recommendData] = await Promise.all([
      detailApi,
      creditsApi,
      reviewsApi,
      recommendApi
    
    ]);
    console.log("데이터 받아라~", detailData.data);
    dispatch({
      type: "GET_DETAIL_SUCCESS",
      payload: {
        detailData: detailData.data,
        creditsData: creditsData.data,
        reviewsData: reviewsData.data,
        recommendData: recommendData.data
        
      },
    });
  };
}

export const detailAction = {
  getDetailMovies,
};
