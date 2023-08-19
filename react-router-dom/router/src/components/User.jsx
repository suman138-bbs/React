import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
      <>
        <div>User1</div>
        <div>User1</div>
          <div>User1</div>
          <Outlet/>
      </>
  )
}

export default User