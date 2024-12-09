import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <h1>My Website</h1>
        <nav className='flex'>
            
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a> */}
            {/* There is a problem with anchor , if we want to go another page , its always reload. To overcome this problem we will use <Link> tag. Example of it shown below */}
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'contact'}>Contact Us</Link>
        </nav>
    </div>
  )
}

export default Header