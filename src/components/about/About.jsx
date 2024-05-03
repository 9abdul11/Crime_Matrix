import React from 'react'
import './about.css'
import {BsCheck} from 'react-icons/bs'
import {FaCarCrash} from 'react-icons/fa'
import {IoMdBicycle} from 'react-icons/io'
import {FaPeopleCarry} from 'react-icons/fa'
import {MdEmojiPeople} from 'react-icons/md'
import {GiPistolGun} from 'react-icons/gi'
import {FaSignLanguage} from 'react-icons/fa'
import {CgDanger} from 'react-icons/cg'
import {GiHazardSign} from 'react-icons/gi'
import { GiChalkOutlineMurder } from "react-icons/gi";
const About = () => {      
  return (
    <section id='about' className='about-container'>
       <div className="about-heading">
        <h1>Crime In My Area</h1>
        <p>Criminals don't discriminate against location, which is why it's so important to protect your property and possessions. See the level of crime recorded by the police in your area - which is offered by Crime Matrix.
        </p>
        <h1>Types Of Crime & Crime Representation</h1>
       </div>
       
       <div className="types">
        <div className="category">
        <article className='dif-types'>              
            <MdEmojiPeople className='about-icons'/>
              <div>
              <h5>Burgalry</h5>              
              </div>              
        </article>  
        <article className='dif-types'>       
        <IoMdBicycle className='about-icons'/>       
              <div>
              <h5>Bicycle Theft</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <FaPeopleCarry className='about-icons'/>           
              <div>
              <h5>Robbery</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <FaCarCrash className='about-icons'/>           
              <div>
              <h5>Car Crime</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <GiPistolGun className='about-icons'/>           
              <div>
              <h5>Shooting</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <FaSignLanguage className='about-icons'/>           
              <div>
              <h5>Domestic Abuse</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <CgDanger className='about-icons'/>           
              <div>
              <h5>Rural Crime</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <GiPistolGun className='about-icons'/>           
              <div>
              <h5>Gun Point</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <GiHazardSign className='about-icons'/>           
              <div>
              <h5>Assualt</h5>              
              </div>              
        </article>  
        <article className='dif-types'>   
        <GiChalkOutlineMurder className='about-icons'/>           
              <div>
              <h5>Murder</h5>              
              </div>              
        </article>  
        
        </div>
        {/* <ul className='list1'>
          <li>Bicycle theft</li>
          <li>Burglary</li>
          <li>Robery</li>
          <li>Car Crime</li>
          <li>Child Sexual</li>
          <li>Domestic Abuse</li>
          <li>Rural Crime</li>
          <li>Terrorism</li>
          <li>Rape</li>
        </ul> */}
        <div className="representation">
          <div className="shape1">
          <h5 className='round'>Below</h5>
          <h5 className='round'>20%</h5>
          </div>
          <div className="shape2">
          <h5 className='round'>AVG</h5>
          <h5 className='round'>40%</h5>
          </div>
          <div className="shape3">
          <h5 className='round'>Above</h5>
          <h5 className='round'>50%</h5>
          </div>
        </div>
       </div>
    </section>
  )
}

export default About