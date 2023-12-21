import { combineReducers, createStore } from "redux"
import { authReducer } from "./Auth Reducer/reducer"
import { userReducer } from "./User Reducer/reducer"
import { currentUserReducer } from "./CurrentUser Reducer/reducer"
import { postReducer } from "./PostReducer/reducer"
import { isBoxVisibleReducer } from "./ShowAddQuestion Reducer/reducer"


const rootReducer = combineReducers({
    authReducer,
    userReducer,
    currentUserReducer,
    postReducer,
    isBoxVisibleReducer

})

export const store = createStore(rootReducer)