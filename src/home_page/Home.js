import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/index";
import Banner from "./Banner/index";
// import Video from "./home_page/Video/index";
import Download from "./Download/index";
import Customers from "./Customers/index";
import Footer from '../components/Footer/index'
import Counter from "./Counter/index";

const Home = () => (
       
       <>
       <Navbar/>
       <Banner/>
       {/* <Video/> */}
       <Counter/>
       <Customers/>
       <Download/>
       
       <Footer/>
       </>
       
);

export default Home;