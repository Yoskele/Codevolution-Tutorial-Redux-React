// Combine Reducers.
import { combineReducers } from "redux";
import cakeReducer from "./cake/Cakereducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";
import UserReducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:UserReducer
})

export default rootReducer;