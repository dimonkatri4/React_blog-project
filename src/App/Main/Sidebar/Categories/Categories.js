import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="sidebar-block categories">
            <div className="bar-title">Categories</div>
            <div className="link-categories">
                <Link to="/lifestyle">Lifestyle</Link>
                {/* <a href="/">Lifestyle</a> */}
                <a href="/">Podcast</a>
                <a href="/">Reviews</a>
                <a href="/">Travel</a>
            </div>
		</div>
    )
}

export default Categories