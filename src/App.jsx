import { useState ,useRef} from 'react'
import './App.css'
import { useEffect } from 'react'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Country from './pages/country'
import VisaApplication from './pages/visaApplication'
import Visa from './pages/Visa'
import NwcAuth from './pages/NwcAuth'


function App() {



  return (
    <Routes>
      <Route exact path="/"  element={  <Home />} />
      <Route exact path="/:name"  element={  <Country />} />
      <Route exact path="/9jawivescard"  element={  <VisaApplication />} />
      <Route exact path="/9jawives-visa"  element={  <Visa />} />
      <Route exact path="/nwc"  element={  <NwcAuth />} />
   </Routes>
     )
}

export default App