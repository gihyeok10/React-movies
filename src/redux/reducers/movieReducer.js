let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
  genreList:[],
  moviesId: null,
  page:1
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

     case "GET_MOVIES_DETAIL":
      return { ...state, moviesId:payload.id };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList:payload.genreList,
        loading: false,
        page:payload.page
      };

    default:
      return { ...state };
  }
}

export default movieReducer;
