import React from 'react'
import PostsList from './Posts/PostsList'
import Sidebar from './Sidebar/Sidebar'
import { Route } from 'react-router-dom'
import LifeStylePage from './LifeStylePage/LifeStylePage'

const Main=()=> {
    return (
    <main>
		<div className="container">
			<Route  path="/" component = {PostsList} />
			<Route path="/lifestyle" component = {LifeStylePage} />
			<Sidebar/>
		</div>
	</main>
    )
}

export default Main