import React from 'react'

const PopularPosts = () => {
    return (
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
    )
}

export default PopularPosts