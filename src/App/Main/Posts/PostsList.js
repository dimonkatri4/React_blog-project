import React from 'react'

const PostsList = () => {
    return (
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
    )
}

export default PostsList