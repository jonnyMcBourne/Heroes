import { typesLogin } from "../types/types";
const {LOGIN,LOGOUT}= typesLogin

export const authReducer = (state={}, action) => {
    
    switch (action.type) {
        case LOGIN:
           return {user:action.payload,logged:true}

            break;
        case LOGOUT:
            return {user:"",logged:false}
            break;
    
        default:
            return state;
            break;
    }
    
    
    return {}
}
