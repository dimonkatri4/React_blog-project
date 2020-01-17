import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Categories from './Categories/Categories'
import Subscribe from './Subscribe/Subscribe'
import BarBanner from './BarBanner/BarBanner'
import PopularPosts from './PopularPosts/POpularPosts'
import FollowInst from './FollowInst/FollowInst'

const Sidebar = () => {
    return (
        <div className="sidebar">
				<AboutMe/>
				<Categories/>
				<Subscribe/>
				<BarBanner/>
				<PopularPosts/>
				<FollowInst/>
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
			</div>
    )
}

export default Sidebar