import React from 'react'
import PostsList from './Posts/PostsList'
import Sidebar from './Sidebar/Sidebar'
import { Route } from 'react-router-dom'
import LifeStylePage from './LifeStylePage/LifeStylePage'
import PodcastPage from './PodcastPage/PodcastPage'

const Main=()=> {
    return (
    <main>
		<div className="container">
			<Route exact path="/" component = {PostsList} />
			<Route path="/lifestyle" component = {LifeStylePage} />
			<Route path="/podcast" component = {PodcastPage} />
			<Sidebar/>
		</div>
	</main>
    )
}

export default Main