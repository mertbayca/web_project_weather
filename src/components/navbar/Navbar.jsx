import React from 'react'
import './Navbar.css'
import {logo} from '../../assets'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo}/>
            <div className="gradient_text">
             <h1>Mert Bayça Weather App</h1>
            </div>
        </div>
        <div className="w_welcome">
            <h2>Welcome.</h2>
        </div>
    </nav>
  )
}

export default Navbar