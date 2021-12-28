import { combineReducers } from "redux";
import userReducer from "./redux/userReducer";

const rootReducer=combineReducers({
    userReducer:userReducer
})

export default rootReducer