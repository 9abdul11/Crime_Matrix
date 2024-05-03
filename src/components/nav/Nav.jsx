import React from 'react'
import './nav.css'
import logo from '../../images/logo.png'

const Nav = () => {

  const handleSignUpClick = () => {
    // Redirect to the Laravel login page
    window.location.href = 'http://127.0.0.1:8000/register';
  };
  return (
         
   <section className='nav-heading'>
    <div className="navbar-content">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#search">Search</a>
        <a href="#alerts">Alerts</a>        
        <a href="#contact">Submit a Crime Tip</a>
        <button onClick={handleSignUpClick} className='btn'>Get Alerts</button>
      </nav>
    </div>
   </section>
    
  )
}

export default Nav