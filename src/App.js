import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./home_page/Home";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Features from "./pages/Features/index";
import Team from "./pages/Team/index";
import Pricing from "./pages/Pricing/index";

const App = () => (
       
       <>

       <Routes>
              
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/features' element={<Features/>}/>
              <Route path='/pricing' element={<Pricing/>}/>
              <Route path='/team' element={<Team/>}/>

       </Routes>
       
       </>
       
);

export default App;