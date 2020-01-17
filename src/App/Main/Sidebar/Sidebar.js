import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Categories from './Categories/Categories'
import Subscribe from './Subscribe/Subscribe'
import BarBanner from './BarBanner/BarBanner'
import PopularPosts from './PopularPosts/POpularPosts'
import FollowInst from './FollowInst/FollowInst'
import PopularTag from './PopularTags/PopularTags'

const Sidebar = () => {
    return (
        <div className="sidebar">
				<AboutMe/>
				<Categories/>
				<Subscribe/>
				<BarBanner/>
				<PopularPosts/>
				<FollowInst/>
				<PopularTag/>
			</div>
    )
}

export default Sidebar