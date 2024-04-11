import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import donutReducer from "./donut/donutReducer";
import pancakeReducer from "./pancake/pancakeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    donut: donutReducer,
    pancake: pancakeReducer,
    user: userReducer
})

export default rootReducer