import React from 'react'
import './alerts.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
const Alerts = () => {
  const handleAlerts= () => {
    // Redirect to the Laravel login page
    window.location.href = 'http://127.0.0.1:8000/register';
  };
  return (
    <section id='alerts'>
      <div className="alerts-container">
        <h1>Personalized Alerts</h1>
        <AiOutlineUserAdd className='alert-icon'/>
        <div className="info">
          <p>Stay Up To Date with crimes in your area by choosing between daily or weekly updates via email</p>
          <h5>Stay Aware, Stay Safe</h5>
        </div>  
        <div className="btn-content">
        <div className="btn-alerts">      
        <button onClick={handleAlerts}>Get Alerts</button>
      </div>
      </div>                  
      </div>
      
    </section>
  )
}

export default Alerts