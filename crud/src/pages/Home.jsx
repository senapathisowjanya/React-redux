import React from 'react'
import ProductList from '../components/ProductList'
import SideBar from '../components/SideBar'
import styled from 'styled-components'

function Home() {
  return (
    <DIV>
      <div className="sidebar">
      <SideBar />
      </div>
       <div className="productList" >

        <ProductList />
       </div>
    </DIV>
  )
}

export default Home;

const DIV=styled.div`
  display:flex;
  .sidebar{
    width:15%
  }
  .productList{
    width:85%;
  }
`