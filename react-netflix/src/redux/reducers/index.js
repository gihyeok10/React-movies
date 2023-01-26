import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import movieReducer from "./movieReducer";
import allReducer from "./allReducer"
export default combineReducers({

        movie:movieReducer,
        detail:detailReducer,
        all:allReducer
})