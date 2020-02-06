import React from 'react'
import '../Posts/postsList.css'
import PostListItem from '../Posts/PostListItem'
import postsData from '../Posts/postsData'

const ReviewsPage = () => {
    return (
        <div className="posts-block">
            {
                postsData.filter(function(e) {
                    return e.category === "Reviews"
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
        </div>
    )
}

export default ReviewsPage