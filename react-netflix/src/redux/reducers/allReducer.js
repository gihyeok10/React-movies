let initialState = {
    allmoviesData:{},
    genreList:{}
  };
  
  function detailReducer(state = initialState, action) {
    let { type, payload } = action;
  
    switch (type) {
      case "GET_All_SUCCESS":
        return {
          ...state,
          allmoviesData:payload.allmoviesData,
          genreList:payload.genreList

        };
  
      default:
        return { ...state };
    }
  }
  
  export default detailReducer;
  