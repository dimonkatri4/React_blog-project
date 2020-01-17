import React from 'react'

const PopularTag = () => {
    return (
        <div className="sidebar-block popular-tags">
            <div className="bar-title">Popular tags</div>
            <div className="tags">
                <div className="pop-tag"><a href="/">Video</a></div>
                <div className="pop-tag"><a href="/">Presentation</a></div>
                <div className="pop-tag"><a href="/">Beauty</a></div>
                <div className="pop-tag"><a href="/">Decor</a></div>
                <div className="pop-tag"><a href="/">Fashion</a></div>
                <div className="pop-tag"><a href="/">Resources</a></div>
                <div className="pop-tag"><a href="/">Books</a></div>
            </div>
		</div>
    )
}

export default PopularTag