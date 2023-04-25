import { LOGIN_FAILURE, LOGIN_REQUEST,LOGIN_SUCCESS } from "./actionTypes"


const intialState={
    isLoading: false,
    isError: false,
    token:"",
    isAuth:false,
}

export const reducer=(state=intialState,{type,payload})=>{
     switch(type){
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    token:payload
                }
                case LOGIN_FAILURE:
                    return {
                        ...state,
                        isError:true,
                    }
                    default:
                        return state;
     }
}