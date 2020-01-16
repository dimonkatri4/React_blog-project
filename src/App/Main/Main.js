import React from 'react'

const Main=()=> {
    return (
    <main>
		<div className="container">
			<div className="posts-block">
				<div className="post">
					<div className="way in-post"><pre><a href="/">Travel</a><span>   /   March 23, 2019</span></pre></div>
					<div className="caption">
						<a href="/">Make your adventure sound really epic</a>
					</div>
					<div className="img-post">
						<img src="images/img_post1.png" alt="post1"/>
					</div>
					<div className="text-post">Do you find yourself reading stories about adventures in outdoor magazines and websites and feeling down about what you did on your summer vacation?</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="post">
					<div className="way in-post"><pre><a href="/">LifeStyle</a><span>   /   March 13, 2019</span></pre></div>
					<div className="caption">
						<a href="/">Wallpaper Wednesday: Glowing Place to Be</a>
					</div>
					<div className="img-post">
						<img src="images/img_post2.png" alt="post2"/>
					</div>
					<div className="text-post">The North Cascades might be the biggest secret in American mountain ranges. Well, no, it’s not a secret secret — people in the know know, but beyond...</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="special-post">
						<img src="images/spec_post.png" alt="spec-post"/>
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
				<div className="post">
					<div className="way in-post"><pre><a href="/">LifeStyle</a><span>   /   March 6, 2019</span></pre></div>
					<div className="caption">
						<a href="/">Anatomy of a Sandbag</a>
					</div>
					<div className="img-post">
						<img src="images/img_post3.png" alt="" />
					</div>
					<div className="text-post">Did you ever see the epic clip, above, of a mountain bike racer crashing, only to watch his bike ride away on its own? Give it a quick look  and then ponder...</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="post">
					<div className="way in-post"><pre><a href="/">Podcast</a><span>   /   March 4, 2019</span></pre></div>
					<div className="caption">
						<a href="/">ONE FORK TO RULE THEM</a>
					</div>
					<div className="img-post">
						<img src="images/img_post4.png" alt="post4" />
					</div>
					<div className="text-post">Once upon a time, every mountain biker wanted the same fork because, really, practically every mountain biker was riding the same bike—a hardtail.</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="post">
					<div className="way in-post"><pre><a href="/">LifeStyle</a><span>   /   March 14, 2019</span></pre></div>
					<div className="caption">
						<a href="/">My Favorite Affordable House Moments</a>
					</div>
					<div className="img-post">
						<img src="images/img_post5.png" alt="post5" />
					</div>
					<div className="text-post">Did you ever see the epic clip, above, of a mountain bike racer crashing, only to watch his bike ride away on its own? Give it a quick look  and then ponder...</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="post">
					<div className="way in-post"><pre><a href="/">Reviews</a><span>   /   March 19, 2019</span></pre></div>
					<div className="caption">
						<a href="/">The Prettiest Personalized Jewelry</a>
					</div>
					<div className="img-post">
						<img src="images/img_post6.png" alt="post6" />
					</div>
					<div className="text-post">Once upon a time, every mountain biker wanted the same fork because, really, practically every mountain biker was riding the same bike—a hardtail.</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="post">
					<div className="way in-post"><pre><a href="/">LifeStyle</a><span>   /   March 20, 2019</span></pre></div>
					<div className="caption">
						<a href="/">My Favorite Affordable House Moments</a>
					</div>
					<div className="img-post">
						<img src="images/img_post7.png" alt="post7" />
					</div>
					<div className="text-post">Did you ever see the epic clip, above, of a mountain bike racer crashing, only to watch his bike ride away on its own? Give it a quick look  and then ponder...</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="post">
					<div className="way in-post"><pre><a href="/">Reviews</a><span>   /   March 28, 2019</span></pre></div>
					<div className="caption">
						<a href="/">The Prettiest Personalized Jewelry</a>
					</div>
					<div className="img-post">
						<img src="images/img_post8.png" alt="post8" />
					</div>
					<div className="text-post">Once upon a time, every mountain biker wanted the same fork because, really, practically every mountain biker was riding the same bike—a hardtail.</div>
					<div>
						<button className="btn btn-post">Read more</button>
					</div>
				</div>
				<div className="show-more">
					<a href="/">Show more</a>
				</div>
			</div>
			<div className="sidebar">
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
		</div>
	</main>
    )
}

export default Main