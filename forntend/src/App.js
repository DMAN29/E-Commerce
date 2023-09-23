import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from './component/home/Homepage'
import ProductPage from './component/product/ProductPage'
import Navbar from './component/common/Navbar'
import Footer from './component/common/Footer'
const App = () => {
  return <>
  <Navbar/>
    <Routes>
      {/* <Route path='/' Component={Homepage}/> */}
      <Route path='/' Component={ProductPage}/>
      
    </Routes>
      <Footer/>
  </>
}

export default App