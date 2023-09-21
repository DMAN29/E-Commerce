  import React from 'react'
  import Navbar from '../common/Navbar'
import  MainCarousel  from './MainCarousel'
import SectionCarousel from './SectionCarousel'
import { mensKurtaData } from '../../Data/Mens/mensKurtaData'
  const Homepage = () => {
    return <>
      <Navbar/>
      <MainCarousel/>
      <SectionCarousel data={mensKurtaData} section="Mens Kurta"/>
      <SectionCarousel data={mensKurtaData} section="Mens Kurta"/>
    </>
  }

  export default Homepage