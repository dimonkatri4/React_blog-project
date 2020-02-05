import React from 'react'
import './postsList.css'
import PostListItem from './PostListItem'
import postsData from './postsData'
import SpecialPost from './SpecialPost'

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
            <SpecialPost/>
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