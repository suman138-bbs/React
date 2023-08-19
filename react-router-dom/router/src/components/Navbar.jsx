import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinkStyle = ({isActive}) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'none' : 'underline',
        backgroundColor:isActive?'gray':'transparent'
        
    }
}
const Navbar = () => {
  return (
    <nav>
          <NavLink style={navLinkStyle} to ='/'>Home</NavLink>
          <NavLink style={navLinkStyle} to ='/about'>About</NavLink>
          <NavLink style={navLinkStyle} to ='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar