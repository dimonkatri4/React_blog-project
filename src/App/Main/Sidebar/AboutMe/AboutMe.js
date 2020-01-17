import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className="sidebar-block about-me">
            <div className="bar-title">About me</div>
            <div className="photo-me">
                <img src="images/img_me.png" alt="img_me"/>
            </div>
            <div className="signature">
                <img src="images/signature.png" alt="signature" />
            </div>
            <div className="bar-text">I'm Sarah Connor. A designer, author, speaker, former rock dreamer, cautious adventurer and a dad in real life.</div>
            <div className="social-link bar-link">
                <div><a href="/">
                    <img src="images/fb.png" alt="fb" />
                </a></div>
                <div><a href="/">
                    <img src="images/inst.png" alt="inst" />
                </a></div>
                <div><a href="/">
                    <img src="images/g+.png" alt="g+" />
                </a></div>
                <div><a href="/">
                    <img src="images/p.png" alt="p" />
                </a></div>
                <div><a href="/">
                    <img src="images/tw.png" alt="tw" />
                </a></div>
            </div>
        </div>
    )
}

export default AboutMe