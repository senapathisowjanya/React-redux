import React from 'react'
import { useSelector } from 'react-redux'

import { Navigate, useLocation } from 'react-router-dom'

function PrivateRouter({children}) {
    const isAuth=useSelector((store)=>store.authReducer.isAuth)
    const loaction=useLocation()
    console.log(loaction)
  return (
    <div>
        {isAuth?children:<Navigate state={loaction.pathname} to={"/login"} />}
    </div>
  )
}

export default PrivateRouter;