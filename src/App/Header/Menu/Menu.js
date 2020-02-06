import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/travel">Travel</Link></li>
            <li><a href="/">About me</a></li>
            <li><a href="/">Contacts</a></li>
        </ul>
    )
}

export default Menu