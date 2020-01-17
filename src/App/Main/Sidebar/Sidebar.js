import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Categories from './Categories/Categories'
import Subscribe from './Subscribe/Subscribe'
import BarBanner from './BarBanner/BarBanner'
import PopularPosts from './PopularPosts/POpularPosts'

const Sidebar = () => {
    return (
        <div className="sidebar">
				<AboutMe/>
				<Categories/>
				<Subscribe/>
				<BarBanner/>
				<PopularPosts/>
				<div className="sidebar-block folllow-inst">
					<div className="bar-title">Follow on instagram</div>
					<div className="img-instagram">
						<a href="/"><img src="images/img_inst1.png" alt="img_inst1"/></a>
						<a href="/"><img src="images/img_inst2.png" alt="img_inst2"/></a>
						<a href="/"><img src="images/img_inst3.png" alt="img_inst3"/></a>
						<a href="/"><img src="images/img_inst4.png" alt="img_inst4"/></a>
					</div>
				</div>
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