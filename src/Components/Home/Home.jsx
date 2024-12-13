import React from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () => {
  const navigation=useNavigation();
  // Below useLocation hook will show which path/location i am currently in
  const location=useLocation();
  console.log(location)
  return (
    <div>
        <Header></Header>
        {/* <h2>This is home component</h2> */}
        {/* Here outlet means until outlet everything will remain same even if we go to another path like /contact etc.This means that above content will remain same. Only change will happen
        based on child path in outlet */}
        {/* below code will show Loading... text when navigation state is loading else it will show outlet */}
        {
          navigation.state==="loading"?
          <p>Loading...</p>:<Outlet></Outlet>
        }
        
        <Footer></Footer>
    </div>
    
  )
}

export default Home