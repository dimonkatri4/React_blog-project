import React from 'react'

const Subscribe = () => {
    return (
        <div className="sidebar-block subscribe">
            <div className="bar-title">Subscribe to newsletter</div>
            <div className="bar-text">Subscribe to our free newsletter to be in touch with our new articles.</div>
            <div className="bar-email">
                <input type="email" placeholder="YOUR E-MAIL..." name=""/>
            </div>
            <div>
                <button className="btn btn-subscribe">Subscribe</button>
            </div>
		</div>
    )
}

export default Subscribe