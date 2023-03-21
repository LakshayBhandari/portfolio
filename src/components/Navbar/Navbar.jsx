import React from 'react'
import logo from "../../img/logo.png"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className='container'>
                <div className='links'>
                    <img className='logo' src={logo} alt="" />

                </div>
               
                    <button type='button' className='btn' onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
             
            </div>

        </div>
    )
}

export default Navbar