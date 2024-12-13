import React from 'react'
import '../User/User.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  const {id,title}=post;
    return (
    <div className='user-style'>
        <h2>Post of ID : {id}</h2>
        <p>{title}</p>
        <Link to={`/post/${id}`}>Post Details</Link>
        <Link to={`/post/${id}`}><button>Show Details</button></Link>
    </div>
  )
}

export default Post