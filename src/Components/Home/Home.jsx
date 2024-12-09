import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header></Header>
        {/* <h2>This is home component</h2> */}
        {/* Here outlet means until outlet everything will remain same even if we go to another path like /contact etc.This means that above content will remain same. Only change will happen
        based on child path in outlet */}
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    
  )
}

export default Home