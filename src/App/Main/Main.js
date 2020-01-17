import React from 'react'
import PostsList from './Posts/PostsList'
import Sidebar from './Sidebar/Sidebar'

const Main=()=> {
    return (
    <main>
		<div className="container">
			<PostsList/>
			<Sidebar/>
		</div>
	</main>
    )
}

export default Main