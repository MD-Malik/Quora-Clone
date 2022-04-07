import { USER_DETAILS } from "./action";

export const initState= {
    user_details:{

    }
}
export const currentUserReducer = (store=initState, {type, payload}) => {
    switch(type){
        case USER_DETAILS:
            return {
                ...store,
                user_details:{...payload}
            }
            default:
                return store;
    }
}