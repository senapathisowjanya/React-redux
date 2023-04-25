import { PRODUCT_REQUEST,POST_PRODUCT_SUCCESS, PRODUCT_FAILURE,GET_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from "./actionType"
import axios from "axios";

export const addProduct=(newProduct)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.post("http://localhost:8080/products",newProduct)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:POST_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch({type:PRODUCT_FAILURE})
    })
}

export const getProducts=(paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(' http://localhost:8080/products',paramobj).then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAILURE})
    })

}

export const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
   return axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
        console.log(res.data)
        dispatch({type:DELETE_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAILURE})
    })

}

export const updateProducts=(id,data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.patch(`http://localhost:8080/products/${id}`,data).then((res)=>{
        console.log(res.data)
        dispatch({type:POST_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAILURE})
    })
}

