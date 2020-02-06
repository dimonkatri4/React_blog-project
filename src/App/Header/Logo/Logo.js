import React from 'react'
import logo from './logo.png'
import './logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo" title="Logo"/>
            </Link>
        </div>
    )
}

export default Logo