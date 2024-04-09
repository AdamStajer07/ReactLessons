import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import donutReducer from "./donut/donutReducer";
import pancakeReducer from "./pancake/pancakeReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    donut: donutReducer,
    pancake: pancakeReducer
})

export default rootReducer