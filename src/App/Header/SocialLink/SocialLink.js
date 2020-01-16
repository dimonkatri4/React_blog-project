import React from 'react'
import './socialLink.css'

const SocialLink = () => {
    return (
        <div className="social-link">
            <div><a href="/">
                <img src="images/fb.png" alt="fb"/>
            </a></div>
            <div><a href="/">
                <img src="images/inst.png" alt="insta"/>
            </a></div>
            <div><a href="/">
                <img src="images/g+.png" alt="g+"/>
            </a></div>
            <div><a href="/">
                <img src="images/p.png" alt="p"/>
            </a></div>
        </div>
    )
}

export default SocialLink