import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/productReducer/action'
import ProductCard from "./ProductCard"
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom'

function ProductList() {
  const [searchParam]=useSearchParams()
const dispatch=useDispatch()
const products=useSelector((store)=>store.productReducer.products)
// console.log(searchParam.getAll("gender"))

let obj={
  params:{
    gender:searchParam.getAll("gender"),
    category:searchParam.getAll("category"),
    _sort: searchParam.get("order") && "price",
    _order:searchParam.get("order")
  },
}
    useEffect(()=>{
   dispatch(getProducts(obj))
    },[searchParam])
  return (
    <DIV>
        {products.map((el)=>(
            <ProductCard key={el.id} {...el} />
        ))}
    </DIV>
  )
}

export default ProductList;

const DIV=styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
`