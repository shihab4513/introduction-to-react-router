import React from 'react'
import '../Header/Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>My Website</h1>
        <nav className='flex'>
            
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a> */}
            {/* There is a problem with anchor , if we want to go another page , its always reload. To overcome this problem we will use <Link> tag. Example of it shown below */}
            {/* <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'contact'}>Contact Us</Link> */}
            {/* NavLink basically add a class name 'active' if i clicked it in , based on this class we can design the text in css file */}
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'contact'}>Contact Us</NavLink>
        </nav>
    </div>
  )
}

export default Header