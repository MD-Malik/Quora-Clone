import { GET_POST  } from "./action";

const initState = {
    posts:[]
}

export const postReducer = (store=initState, {type,payload}) => {
    switch(type){
        case GET_POST :
            return {
                ...store,
                posts:[...payload]
            };
            default:
                return store;
    }
}