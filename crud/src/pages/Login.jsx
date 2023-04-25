
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLogin } from '../Redux/authReducer/action'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
 
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const isAuth=useSelector((store)=>store.authReducer.isAuth)
  const err=useSelector((store)=>store.authReducer.isError)
  

  const dispatch=useDispatch()
  const navigate = useNavigate();
  const location=useLocation()
  console.log("do",location)

  const handleSubmit=()=>{
    const obj={
      email,
      password
    }


    
    console.log(obj)
    // setEmail("")
    // setPassword("")
    dispatch(addLogin(obj)).then(()=>{
      navigate(location.state)
    })
  }
  return (
    <DIV auth={isAuth} err={err}>
      <h1>{isAuth?"Login Successful":"Login to Continue"}</h1>
      <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button  onClick={handleSubmit}>LOGIN</button>
    </DIV>
  )
}

export default Login;

const DIV=styled.div`
  width:400px;
  height:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:40px auto;
  gap:10px;
  border:1px solid black;
  padding:20px 0px;

  h1 {
    color:${({auth})=>auth?"green":"red"}
  }

 button {
  background-color:orange;
 }
 input{
  padding:10px;
  border:${({err})=>err?"1px solid red":"1px solid gray"}
 }

`