import { POST_PRODUCT_SUCCESS, PRODUCT_REQUEST,PRODUCT_FAILURE ,GET_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS,PATCH_PRODUCT_SUCCESS} from "./actionType";

const intialState={
    isLoading:false,
    isError:false,
    products:[]
}

export const reducer=(state=intialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
            case POST_PRODUCT_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                   
                }
                case GET_PRODUCT_SUCCESS:
                    return {
                        ...state,
                        isLoading:false,
                       products:payload
                    }
                case PRODUCT_FAILURE:
                    return {
                        ...state,
                        isError:true,
                    }
                    case DELETE_PRODUCT_SUCCESS:
                        return {
                            ...state,
                            isLoading:false,
                        }
                        case PATCH_PRODUCT_SUCCESS:
                        return {
                            ...state,
                            isLoading:false,
                        }
        default:
            return state;
    }

}