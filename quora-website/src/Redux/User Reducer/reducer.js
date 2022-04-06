import { USERS } from "./action";

const initState = {
    users:[]
}

export const userReducer = (store=initState, {type,payload}) => {
    switch(type){
        case USERS:
            return {
                ...store,
                users:[...payload]
            };
            default:
                return store;
    }
}