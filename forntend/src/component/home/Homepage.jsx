  import React from 'react'
import  MainCarousel  from './MainCarousel'
import SectionCarousel from './SectionCarousel'
import {dress} from '../../Data/dress'
import { mens_kurta } from '../../Data/Men/men_kurta'
const Homepage = () => {
    return <>
      <MainCarousel/>
      <SectionCarousel data={mens_kurta} section="Mens Kurta"/>
      <SectionCarousel data={dress} section="Dress"/>
      
    </>
  }

  export default Homepage