import React from 'react'


import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicePage2 from './Pages/ServicePage2'
import Contact from './Components/Contact'

import TempoTarveler from './Pages/TempoTarveler'
import BusTravel from './Pages/BusTravel'
import CarTravel from './Pages/CarTravel'
import UrbaniaPage from './Pages/UrbaniaPage'

const App = () => {
  return (
    <>
    


    <Routes>

      <Route path='/' element={<HomePage/>}/>

      
      <Route path='/about' element={<AboutPage/>}/>

      
      <Route path='/contact-us' element={<Contact/>}/>

      <Route path='/service' element={<ServicePage2/>}/>
      <Route path='/tempo' element={<TempoTarveler/>}/>
      <Route path='/bus' element={<BusTravel/>}/>
      <Route path='/car' element={<CarTravel/>}></Route>
      <Route path='/urbania' element={<UrbaniaPage/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
