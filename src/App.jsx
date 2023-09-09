import { useState ,useRef} from 'react'
import './App.css'
import { useEffect } from 'react'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Country from './pages/country'
import VisaApplication from './pages/visaApplication'
import Visa from './pages/Visa'
import NwcAuth from './pages/NwcAuth'
import Cameroon from './pages/cameroon'
import Canada from './pages/canada'
import Kenya from './pages/kenya'
import Dashboard from './pages/dashboard'
import Overview from './modules/Dashboard/views/overview'
import Posts from './modules/Dashboard/components/feeds/posts'
import Activities from './modules/Dashboard/views/activities'
import Account from './modules/Dashboard/views/account'

function App() {



  return (
    <Routes>
      <Route exact path="/"  element={  <Home />} />
      <Route exact path="/:name"  element={  <Country />} />
      <Route exact path="/9jawivescard"  element={  <VisaApplication />} />
      <Route exact path="/9jawives-visa"  element={  <Visa />} />
      <Route exact path="/nwc"  element={  <NwcAuth />} />
      <Route exact path="/cameroon"  element={  <Cameroon />} />
      <Route exact path="/canada"  element={  <Canada/>} />
      <Route exact path="/uk"  element={  <Kenya/>} />
      <Route exact path="/dashboard"  element={  <Dashboard/>} >
           <Route exact path=""  element={  <Overview/>} >
           <Route exact path=""  element={  <Posts/>} />
       </Route>
       <Route exact path="activities"  element={  <Activities/>} />
       <Route exact path="account"  element={  <Account/>} />


        

      
      </Route>
      
   </Routes>
     )
}

export default App