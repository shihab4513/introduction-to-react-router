import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from '../Post/Post';
import '../Users/Users.css'

const Posts = () => {
    const posts=useLoaderData();
  return (
    <div>
        <h2>Posts: {posts.length}</h2>
        <div className='users-style'>
            {
                posts.map(post=><Post post={post} key={post.id}></Post>)
            }
        </div>
    </div>
  )
}

export default Posts