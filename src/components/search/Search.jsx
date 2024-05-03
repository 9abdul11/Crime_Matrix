import React from 'react'
import './search.css'

 

const Search = () => {

  const handlecrimesearch=()=>{
    window.location.href = 'http://127.0.0.1:8000/crime-map-search';
  }
  

  return (
    <section id='search'>
      <div className="info-container">                
        <h1>Crime Map</h1>

        <div className="info-content">
          <h5>Want to see what crimes have been reported in your area ?</h5>
          <p>Type any area to see crimes within one-mile radius for the latest reported month.</p>          
        </div>
      </div>

      <div className="search-container">
          <h1>Find Crime In Your Neigborhood</h1>                  
          <button className='near-button' onClick={handlecrimesearch}> View Crimes Near Me </button>                                             
      </div>      
    </section>
  )
}

export default Search