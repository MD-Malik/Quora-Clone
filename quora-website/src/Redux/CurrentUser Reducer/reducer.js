import { USER_ID } from "./action";

export const initState= {
    userid:""
}
export const currentUserReducer = (store=initState, {type, payload}) => {
    switch(type){
        case USER_ID:
            return {
                ...store,
                userid:payload
            }
            default:
                return store;
    }
}