import React from 'react'

import DestinationList from '../Components/DestinationList'
import Explore from '../Components/Explore'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Services from '../Components/Services'
import Travel from '../Components/Travel'
import VehicleSection from '../Components/VehicleSection'


const HomePage = () => {
  return (
    <div className='xsm:w-fit'>
      <Header/>
   <Explore/>
   <DestinationList/>
   <VehicleSection/>
   <Features/>
   <Services/>
   <Travel/>
   <Footer/>
   
    </div>
  )
}
export default HomePage