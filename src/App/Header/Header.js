import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import SocialLink from './SocialLink/SocialLink'
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container head">
                <div className="col-md-2">
                    <Logo/>
                </div>
                <div className="col-md-8">
                    <Menu/>
                </div>
                <div className="col-md-2">
                    <SocialLink/>
                </div>
            </div>
	    </header>
    )
            }

export default Header
