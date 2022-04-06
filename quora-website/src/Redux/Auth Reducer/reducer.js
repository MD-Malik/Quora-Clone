import { CHANGE_AUTH } from "./action";


const initState = {
    isAuth:false
}
export const authReducer = (store = initState, {type, payload}) => {
    switch(type){
        case CHANGE_AUTH:
            return {
                ...store,
                isAuth: payload
            };
            default:
                return store;
    }
}