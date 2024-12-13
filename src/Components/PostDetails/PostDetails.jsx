import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const PostDetails = () => {
  const posts=useLoaderData();
  const {id,body,title}=posts;
  const navigate=useNavigate();
  // To get which id just i clicked we use 'useParams' hook
  const {postID}=useParams();
  
  
  // console.log(postID)
  const goBack=()=>{
      // below code i.e '-1' will bring you one step back 
    navigate(-1);
  }
  return (
    <div>
        <h2>Post Details About: {id}</h2>
        <h3>Title : {title}</h3>
        <p><small>{body}</small></p>
        <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default PostDetails