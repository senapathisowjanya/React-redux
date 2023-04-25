import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProducts } from '../Redux/productReducer/action'
import styled from 'styled-components'

function Edit() {
  const {id}=useParams()
  const dispatch=useDispatch()
  const product=useSelector((store)=>store.productReducer.products)
  const [price,setPrice]=useState("")
  const [image,setImage]=useState("")
  const [gender,setgender]=useState("")
  const [category,setcategory]=useState("")
 
useEffect(()=>{
  const data=product.find((el)=>el.id===+id)
  setPrice(data.price)
  setImage(data.image)
  setgender(data.gender)
  setcategory(data.category)
},[])

  const handleUpdate=()=>{
 const data={price,image,gender,category}
  dispatch(updateProducts(id,data))
  setPrice("")
  setImage("")
  setcategory("")
  setgender("")
  }
  return (
    <DIV>
      <h1>{id}</h1>
      <input type="text"   value={image} onChange={(e)=>setImage(e.target.value)}/>
      <br />
      <input type="number"  value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <br />
      <input type="text"  value={gender} onChange={(e)=>setgender(e.target.value)}/>
      <br />
      <input type="text"  value={category} onChange={(e)=>setcategory(e.target.value)}/>
      <br />
      <button onClick={handleUpdate}>Upadate</button>
    </DIV>
  )
}

export default Edit;

const DIV =styled.div`
width:400px;
margin-left:500px;
margin-top:50px;

  border:2px solid pink;
  input {
    padding:5px 50px 5px 5px;
    margin:5px 5px;
    border-radius:5px;
  }
  button {
    margin:10px;
    background-color:#FF3E6C;
    color:white;
    border-radius:5px;
    border:none;
  }
`