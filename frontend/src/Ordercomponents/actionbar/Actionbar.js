import React from 'react'
import download from '../../assets/download.png'
import './actionbar.scss'

const Actionbar = () => {
  return (
    <div className="main-ribbon">
        <div className="inventory-management-text">
            WELCOME, ORDER MANAGEMENT 
        </div>
     
        <div className="user-details">
          <img className='user-image' src={download} alt="profile" />
          <div className="profile-details">
              <span className='username'>Methma Hewavitharana</span>
              <span className='designation'>ORDER Manager</span>
              
          </div>
          <button className='logout'>Logout</button>
        </div>
    </div>
  )
}

export default Actionbar