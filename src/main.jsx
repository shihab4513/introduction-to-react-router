import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    // Children is an example of nested routing 
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        // here we are loading data from api using loader in user component
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        // here ':userId' means userId used as variable. colon before userId signify it as a variable
        path:'/user/:userId',
        // here in loader userId passed as params in object. to get exact userId we have to write params.userId
        // loader:({params})=>console.log(params.userId),
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
          path:'/posts',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
          element:<Posts></Posts>
      },
      {
        path:'/post/:postID',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element:<PostDetails></PostDetails>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
