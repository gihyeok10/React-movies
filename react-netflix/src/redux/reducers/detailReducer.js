let initialState = {
   detailData:{}
  };
  
  function detailReducer(state = initialState, action) {
    let { type, payload } = action;
  
    switch (type) {
      
  
       case "GET_DETAIL_SUCCESS":
        return { ...state, detailData:payload.detailData};

      default:
        return { ...state };
    }
  }
  
  export default detailReducer;
  