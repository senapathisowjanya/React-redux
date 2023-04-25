import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function SideBar() {
    const [serachParams,setSearchParams]=useSearchParams()
    const intialGender=serachParams.getAll("gender")
    const intialCategory=serachParams.getAll("category")
    // const intialOrder=serachParams.get("order") 

    // console.log(serachParams.get("order") )

   
    const [gender,setGender]=useState(intialGender || [])
    const [category,setCategory]=useState(intialCategory||[])
    const [order,setOrder]=useState("")
    // console.log(serachParams.getAll("category"))
    
    useEffect(()=>{
       let params={
        gender,
        category,
       }
       order && (params.order=order)
       setSearchParams(params)
    },[gender,category,order])

    const handleChange=(e)=>{
        // console.log(e.target.value)
        const {value} = e.target 
        // console.log(value)
       
        let newGender=[...gender]
        if(newGender.includes(value)){
            newGender=newGender.filter((el)=>el!==value)
        }else{
            newGender.push(value)
        }
      setGender(newGender)
      
    //   console.log(newGender)
    }
    // console.log("do",gender)

    const handleCategory=(e)=>{
        const {value}=e.target
        // console.log(value)
        let newCategory=[...category]
        if(newCategory.includes(value)){
            newCategory=newCategory.filter((el)=>el!==value)
        }else{
            newCategory.push(value)
        }
        setCategory(newCategory)

    }

    const handleSort=(e)=>{
     const {value}=e.target
    //  console.log(value)
    setOrder(value)
    }

  return (
    <div>
        <h3>Filter By Gender</h3>
        <div>
            <input type="checkbox" value="male" onChange={handleChange} checked={gender.includes("male")}/>
            <label>Men</label>
        </div>
        <div>
            <input type="checkbox" value="female" onChange={handleChange} checked={gender.includes("female")}/>
            <label>Women</label>
        </div>
        <div>
            <input type="checkbox" value="kids" onChange={handleChange} checked={gender.includes("kids")}/>
            <label>Kids</label>
        </div>
        <br />

        <h3>Filter By Category</h3>
        <div>
            <input type="checkbox" value="top-wear"  onChange={handleCategory} checked={category.includes("top-wear")}/>
            <label>Top Wear</label>
        </div>
        <div>
            <input type="checkbox" value="bottom-wear" onChange={handleCategory} checked={category.includes("bottom-wear")}/>
            <label>Bottom Wear</label>
        </div>
        <div>
            <input type="checkbox" value="shoes" onChange={handleCategory} checked={category.includes("shoes")}/>
            <label>Shoes</label>
        </div>
        <br />
        <h3>Sort by Price</h3>
        <div onChange={handleSort}>
            <input type="radio" name="radio" value="asc" 
            defaultChecked={order==="asc"} 
            />
            <label>Ascending</label>
       
            <input type="radio" name="radio" value="desc" 
            defaultChecked={order==="desc"}
            />
            <label>Descending</label>
        </div>

    </div>
  )
}

export default SideBar