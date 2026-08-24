import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RolebasedRoutes = ({allowedRoles}) => {

  const {employee} =  useSelector((store)=>store.auth)

  if(!allowedRoles.includes(employee?.role)){
    return <Navigate to={'/unauthorized'}/>
  }

  return <Outlet/>
}

export default RolebasedRoutes