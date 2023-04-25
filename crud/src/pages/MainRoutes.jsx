import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Admin from './Admin'
import Login from './Login'
import Home from './Home'
import PrivateRouter from '../components/PrivateRouter'
import Edit from './Edit'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add-product" element={
              <PrivateRouter>

                <Admin/>
              </PrivateRouter>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/edit/:id" element={
            <PrivateRouter>
              <Edit />
              </PrivateRouter>}/>
            <Route path="*" element={<h1>404 Page Not Found</h1>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes