import React from 'react'
import { useLoaderData } from 'react-router-dom'

const PostDetails = () => {
  const posts=useLoaderData();
  const {id,body,title}=posts;
  return (
    <div>
        <h2>Post Details About: {id}</h2>
        <h3>Title : {title}</h3>
        <p><small>{body}</small></p>
    </div>
  )
}

export default PostDetails