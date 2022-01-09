import { combineReducers } from "redux";
import addFavReducer from "./addFavReducer";

const reducer = combineReducers({
    favourite: addFavReducer
})

export default reducer;