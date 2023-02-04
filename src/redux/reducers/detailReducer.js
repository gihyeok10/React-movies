let initialState = {
  detailData: {},
  creditsData: {},
  loading: true,
  reviewsData: {},
  recommendData: {},
  trailerData:{},
  language:""

};

function detailReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_DETAIL_SUCCESS":
      return {
        ...state,
        detailData: payload.detailData,
        creditsData: payload.creditsData,
        castData: payload.castData,
        reviewsData: payload.reviewsData,
        recommendData:payload.recommendData,
        trailerData:payload.trailerData,
        
      };

      case "GET_LANGUAGE_SUCCESS":
        return{...state, language:payload.language}

    default:
      return { ...state };
  }
}

export default detailReducer;
