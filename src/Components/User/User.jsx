import React from 'react'
import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,phone,email}=user;
  return (
    <div className='user-style'>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <p>Phone: {phone}</p>
        <Link to={`/user/${id}`}>Show Details</Link>
        <Link to={`/user/${id}`}>
        <button>Click Me</button>
        </Link>
    </div>
  )
}

export default User