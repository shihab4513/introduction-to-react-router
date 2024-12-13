import React from 'react'
import '../User/User.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
  const {id,title}=post;
  const navigate=useNavigate();
  const handlePost=()=>{
    navigate(`/post/${id}`);

  }
    return (
    <div className='user-style'>
        <h2>Post of ID : {id}</h2>
        <p>{title}</p>
        <Link to={`/post/${id}`}>Post Details</Link>
        <Link to={`/post/${id}`}><button>Show Details</button></Link>
        {/* below code will show alternate of link to do the same thing */}
        <button onClick={handlePost}>Click to see Details</button>
    </div>
  )
}

export default Post