import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="sidebar-block categories">
            <div className="bar-title">Categories</div>
            <div className="link-categories">
                <Link to="/lifestyle">Lifestyle</Link>
                <Link to="/podcast">Podcast</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/travel">Travel</Link>
            </div>
		</div>
    )
}

export default Categories