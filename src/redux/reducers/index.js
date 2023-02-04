import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import movieReducer from "./movieReducer";
import allReducer from "./allReducer"
import searchReducer from "./searchReducer";
export default combineReducers({

        movie:movieReducer,
        detail:detailReducer,
        all:allReducer,
        search:searchReducer
})