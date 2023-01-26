let initialState = {
  detailData: {},
  creditsData: {},
  loading: true,
  reviewsData: {},
  recommendData: {},
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
      };

    default:
      return { ...state };
  }
}

export default detailReducer;
