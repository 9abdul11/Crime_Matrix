import React, { useState } from "react";
import Nav from '../src/components/nav/Nav'
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Search from '../src/components/search/Search'
import Alerts from '../src/components/alerts/Alerts'
import Contact from '../src/components/contact/Contact'
import Footer from '../src/components/footer/Footer'
import Map from "./components/map/Map";


function App() {

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Search/>      
      <Map/>
      <Alerts/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
