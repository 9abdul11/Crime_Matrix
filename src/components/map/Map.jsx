import React from 'react'
import './map.css'


const Map = ({crimes}) => {
  return (
    <section id='map' className='map-container'>
      <div className="map">
      <iframe
       width="100%" 
       height="550px "
       style={{ border:0 }}
       loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=Johar%20town&key=AIzaSyDR_XB-T08NPT2VjF2sde5C5IvQTaEaRtI">
       </iframe>
      </div>
    </section>
  )
}

export default Map
