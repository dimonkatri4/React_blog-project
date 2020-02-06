import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = ({
    category,
    date,
    caption,
    image,
    text,
    
}) => {
    return (
        <div className="post">
            <div className="way in-post"><pre><Link to={category} >{category}</Link><span>   /   {date}</span></pre></div>
            <div className="caption">
                <a href="/">{caption}</a>
            </div>
            <div className="img-post">
                <img src={image} alt="post1"/>
            </div>
            <div className="text-post">{text}</div>
            <div>
                <button className="btn btn-post">Read more</button>
            </div>
        </div>
    )
}

export default PostListItem