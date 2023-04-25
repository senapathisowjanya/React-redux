import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import { getProducts } from '../Redux/productReducer/action'

function Navbar() {
  const [query,setQuery]=useState("")
  const dispatch=useDispatch()
  let ref=useRef()
  // const [searchParams,setSearchParams]=useState()

  const paramObj={
    params:{
      q:query && query
    }
  }

//   useEffect(()=>{
//     let params={
//     _q:query
//     }
    
//     setSearchParams(params)
//  },[query])


  useEffect(()=>{
    if(ref.current){
      clearTimeout(ref.current)
    }
    ref.current=setTimeout(()=>{

      dispatch(getProducts(paramObj))
    },1000)
   
  },[query])
  return (
    <DIV>
        {/* <h1>Myntra</h1> */}
       
        <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt="err" width="80px"/>
        
        
        <Link to="/">Home</Link>
        <Link to="/add-product">Admin Page</Link>
        <Link to="/login">Login</Link>
        <Link to="/edit">Edit Page</Link>
        <input type="text" placeholder='Search Here' onChange={(e)=>setQuery(e.target.value)}/>
        
       
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
display:flex;
 
align-items:center;
gap:25px;
margin:10px;
border-bottom:1px solid gray; 

a {
  color:black;
  text-decoration:none;
  font-weight:650;
}
input {
  padding:6px 50px 6px 3px;
  border-radius:7px;
  border:2px solid pink;
}



`