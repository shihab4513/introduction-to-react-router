import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div>
        <h2>Ooops!</h2>
        <p>
            <i>{error.statusText||error.message}</i>
        </p>
        {
            error.status===404&&<div>
                <h3>Page not found</h3>
                <p>go back where you came from</p>
                <Link to={'/'}><button>Home</button></Link>
            </div>
        }
    </div>
  )
}

export default ErrorPage