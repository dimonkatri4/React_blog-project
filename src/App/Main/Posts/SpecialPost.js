import React from 'react'
import './postsList.css'
import { Link } from 'react-router-dom'

const SpecialPost = ({
    category,
    date,
    caption,
    image,
    text,
}) => {
    return (
            <div className="special-post">
                <img src={image} alt={image}/>
                <div className="content-block">
                    <div className="way spec-post"><pre><Link to={category}>{category}</Link><span>   /   {date}</span></pre></div>
                    <div className="caption spec-caption">
                        <Link to="/">{caption}</Link>
                    </div>
                    <div className="text-post">{text}</div> 
                    <div>
                        <button className="btn read-more">Read more</button>
                    </div>
                </div> 
            </div>
            )
}

export default SpecialPost