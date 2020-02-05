import React from 'react'

const SpecialPost = () => {
    return (
    <div className="special-post">
        <img src="images/post/spec_post.png" alt="spec-post"/>
        <div className="content-block">
            <div className="way spec-post"><pre><a href="/">Travel</a><span>   /   March 23, 2019</span></pre></div>
            <div className="caption spec-caption">
                <a href="/">GREAT Wednesday: Glowing Place</a>
            </div>
            <div className="text-post">The North Cascades might be the biggest secret in American mountain ranges. Well, no, it’s not a secret secret — people in the know know, but beyond...</div> 
            <div>
                <button className="btn read-more">Read more</button>
            </div>
        </div>
    </div>
    )
}

export default SpecialPost