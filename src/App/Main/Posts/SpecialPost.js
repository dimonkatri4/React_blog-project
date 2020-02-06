import React from 'react'
import './postsList.css'

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
                    <div className="way spec-post"><pre><a href="/">{category}</a><span>   /   {date}</span></pre></div>
                    <div className="caption spec-caption">
                        <a href="/">{caption}</a>
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