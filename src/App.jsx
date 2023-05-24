import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Pages/Home/Home'

import OurCompanies from './components/Pages/OurCompanies/OurCompanies'
import PageCompany from './components/Pages/OurCompanies/Companies/pageCompany/pageCompany'
import OurTeam from './components/Pages/OurTeam/OurTeam'
import OurFounders from './components/Pages/OurFounders/OurFounders'
import Climb from './components/Pages/Climb/Climb'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Vector from './Vector.png'

function App() {

  return (
    <div className='relativo'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ourcompanies" element={<OurCompanies />}></Route>
        <Route path="/page-company/:company" element={<PageCompany/>}></Route>
        <Route path="/ourfounders" element={<OurFounders />} > </Route>
        <Route path="/ourteam" element={<OurTeam />} > </Route>
        <Route path="/climb" element={<Climb />}></Route>
      </Routes>
      {/* <img className='lampara' src={Vector}/> */}
    </div>
  )
}

export default App
