import React from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { deleteProduct, getProducts } from '../Redux/productReducer/action'
import { Link } from 'react-router-dom'

function ProductCard({id,name,image,brand,price,gender,category}) {
  const dispatch=useDispatch()
  const handleDelete=()=>{
    // console.log("delete")
   dispatch(deleteProduct(id)).then(()=>{
    dispatch(getProducts({}))
   })
  }
  console.log("do")
  return (
    <DIV>
        <img src={image} alt={name} width="200px" height="250px"/>
        <h2 className='head'>{name}</h2>
        <h4>{brand}</h4>
        <p>{price}</p>
        <h4>{gender}</h4>
        <h4>{category}</h4>
        <button>
          <Link to={`/edit/${id}`}>Edit</Link>
        </button>
        <button onClick={handleDelete}>Delete</button>
    </DIV>
  )
}

export default ProductCard;

const DIV=styled.div`
    border:1px solid lightgray;
    padding:5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    
    button {
      background-color:#FF3E6C;
      color:white;
      padding:5px 15px;
      border:none;
      border-radius:3px;
      margin:5px;
    }
     a {
      text-decoration:none;
      color:white;
    }
    .head {
      width:200px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
     padding-left:30px;
    }
`