import { combineReducers, createStore } from "redux"
import { authReducer } from "./Auth Reducer/reducer"
import { userReducer } from "./User Reducer/reducer"
import { currentUserReducer } from "./CurrentUser Reducer/reducer"
import { isBoxVisibleReducer } from "./ShowAddQuestion Reducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    currentUserReducer,
    isBoxVisibleReducer
})

export const store = createStore(rootReducer)