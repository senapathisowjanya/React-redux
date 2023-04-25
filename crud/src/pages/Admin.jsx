import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { addProduct } from '../Redux/productReducer/action';

const initalState = {
    name: "",
    image: "",
    brand: "",
    price: "",
    gender: "",
    category: "",
}

function Admin() {
    const [product, setProduct] = useState(initalState)
   const dispatch=useDispatch()
    const handleChange = (e) => {
       
        const {name,value} = e.target;
        setProduct((prev)=>{
            return {...prev,[name]:name==="price" ?+value:value}
        })

        console.log(name)

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(product)
        dispatch(addProduct(product))
        setProduct(initalState)

    }

    return (
        <DIV>

            <form onSubmit={handleSubmit}>
                <h1>Add Product</h1>
                <input type="text" name="name" placeholder='Product Name' value={product.name}  onChange={(e) => handleChange(e)} />
                <input type="text" name="image" placeholder='Product Image' value={product.image}  onChange={(e) => handleChange(e)} />
                <input type="text" name="brand" placeholder='Product Brand'  value={product.brand} onChange={(e) => handleChange(e)} />
                <input type="text" name="price" placeholder='Product Price'  value={product.price} onChange={(e) => handleChange(e)} />
                <select name="category" className='category-select'  value={product.category} onChange={(e) => handleChange(e)} >
                    <option value="">Select Category</option>
                    <option value="top-wear">Top Wear</option>
                    <option value="bottom-wear">Bottom Wear</option>
                    <option value="shoes">Shoes</option>
                    <option value="t-shirt">Tshirts</option>
                </select>
                <select name="gender" className='gender-select'  value={product.gender} onChange={(e) => handleChange(e)} >
                    <option value="">Select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <button type='submit'>Add Product</button>
            </form>
        </DIV>
    )
}

export default Admin;

const DIV = styled.div`
 width:400px;
 margin:auto;
 border:1px solid gray;
 padding:25px;

    form {
       
        display:flex;
        flex-direction:column;
       align-items:center;
        gap:10px;
    }
    input {
        height:35px;
        font-size:larger;
        width:100%;
    }
    select {
        height:35px;
        font-size:large;
        width:100%;
    }
    button {
        width:50%;
        height:40px;
        border:none;
        cursor: pointer;
    }
`