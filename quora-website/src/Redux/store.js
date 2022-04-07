import { combineReducers, createStore } from "redux"
import { authReducer } from "./Auth Reducer/reducer"
import { userReducer } from "./User Reducer/reducer"
import { currentUserReducer } from "./CurrentUser Reducer/reducer"
import { postReducer } from "./PostReducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    currentUserReducer,
    postReducer,
})

export const store = createStore(rootReducer)