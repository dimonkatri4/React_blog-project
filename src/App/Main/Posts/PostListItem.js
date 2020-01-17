import React from 'react'

const PostListItem = ({
    category,
    date,
    caption,
    image,
    text,
    
}) => {
    return (
        <div className="post">
            <div className="way in-post"><pre><a href="/">{category}</a><span>   /   {date}</span></pre></div>
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