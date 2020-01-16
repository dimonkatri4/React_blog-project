import React from 'react'
import logo from './logo.png'
import './logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <a href="">
                <img src={logo} alt="Logo" title="Logo"/>
            </a>
        </div>
    )
}

export default Logo