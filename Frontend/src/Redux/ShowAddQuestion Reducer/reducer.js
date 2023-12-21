import { BOX_VISIBLE } from "./action";

export const initState= {
    isBoxVisible:true
}
export const isBoxVisibleReducer = (store=initState, {type, payload}) => {
    switch(type){
        case BOX_VISIBLE:
            return {
                ...store,
                isBoxVisible:payload
            }
            default:
                return store;
    }
}