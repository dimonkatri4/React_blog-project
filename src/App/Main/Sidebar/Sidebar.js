import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Categories from './Categories/Categories'
import Subscribe from './Subscribe/Subscribe'
import BarBanner from './BarBanner/BarBanner'
import PopularPosts from './PopularPosts/PopularPosts'
import FollowInst from './FollowInst/FollowInst'
import PopularTags from './PopularTags/PopularTags'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
				<AboutMe/>
				<Categories/>
				<Subscribe/>
				<BarBanner/>
				<PopularPosts/>
				<FollowInst/>
				<PopularTags/>
			</div>
    )
}

export default Sidebar