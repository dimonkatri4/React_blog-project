import React from 'react'
import AboutMe from './AboutMe/AboutMe'

const Sidebar = () => {
    return (
        <div className="sidebar">
				<AboutMe/>
				<div className="sidebar-block categories">
					<div className="bar-title">Categories</div>
					<div className="link-categories">
						<a href="/">Lifestyle</a>
						<a href="/">Podcast</a>
						<a href="/">Reviews</a>
						<a href="/">Travel</a>
					</div>
				</div>
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
				<div className="sidebar-block bar-banner">
					<div className="banner-img">
						<img src="images/banner.png" alt="banner" />
						<div className="banner-text">Banner spot</div>
					</div>
				</div>
				<div className="sidebar-block popular-posts">
					<div className="bar-title">Popular posts</div>
					<div className="pop-post">
						<div className="img-pop-post">
							<img src="images/img_pop1.png" alt="img_pop1" />
						</div>
						<div className="date-pop-post">March 6, 2019</div>
						<div className="title-pop-post"><a href="/">Make Your Adventure Sound Really Epic</a></div>
					</div>
					<div className="pop-post">
						<div className="img-pop-post">
							<img src="images/img_pop2.png" alt="img_pop2" />
						</div>
						<div className="date-pop-post">February 19, 2019</div>
						<div className="title-pop-post"><a href="/">Podcast: Featuring Great Comments from Our Listeners</a></div>
					</div>
					<div className="pop-post">
						<div className="img-pop-post">
							<img src="images/img_pop3.png" alt="img_pop3" />
						</div>
						<div className="date-pop-post">January 6, 2019</div>
						<div className="title-pop-post"><a href="/">Easy Ways to Add Color To Your Home</a></div>
					</div>
				</div>
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