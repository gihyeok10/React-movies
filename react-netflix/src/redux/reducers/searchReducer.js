let initialState = {
    searchData:{},
    genreList:[],
    loading: true,
   
  };
  
  function searchReducer(state = initialState, action) {
    let { type, payload } = action;
  
    switch (type) {
    
      case "GET_SEARCH_SUCCESS":
        return {
          ...state,
          searchData:payload.searchData,
          genreList:payload.genreList,
          loading: false,
          
        };
  
      default:
        return { ...state };
    }
  }
  
  export default searchReducer;
  