import React from 'react'
import './postsList.css'
import PostListItem from './PostListItem'
import postsData from './postsData'

const PostsList = () => {
    return (
        <div className="posts-block">
            {
                postsData.filter(function(e) {
                    return e.id<=2;
                }).map((
                    {
                        id,
                        category,
                        date,
                        caption,
                        image,
                        text
                    }
                ) => (
                        <PostListItem key={id}
                            category={category}
                            date={date}
                            caption={caption}
                            image={image}
                            text={text}
                        />
                )

                )
            }
            <div className="special-post">
                    <img src="images/post/spec_post.png" alt="spec-post"/>
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
            {
                postsData.filter(function(e) {
                    return e.id>2;
                }).map((
                    {
                        id,
                        category,
                        date,
                        caption,
                        image,
                        text
                    }
                ) => (
                        <PostListItem key={id}
                            category={category}
                            date={date}
                            caption={caption}
                            image={image}
                            text={text}
                        />
                )

                )
            }
            <div className="show-more">
                <a href="/">Show more</a>
            </div>
        </div>
    )
}

export default PostsList