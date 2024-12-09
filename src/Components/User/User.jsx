import React from 'react'
import './User.css'

const User = ({user}) => {
    const {id,name,phone,email}=user;
  return (
    <div className='user-style'>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <p>Phone: {phone}</p>
    </div>
  )
}

export default User