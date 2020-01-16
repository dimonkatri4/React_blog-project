import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

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
                    <div className="social-link">
                        <div><a href="">
                            <img src="images/fb.png"/>
                        </a></div>
                        <div><a href="">
                            <img src="images/inst.png"/>
                        </a></div>
                        <div><a href="">
                            <img src="images/g+.png"/>
                        </a></div>
                        <div><a href="">
                            <img src="images/p.png"/>
                        </a></div>
                    </div>
                </div>
            </div>
	    </header>
    )
            }

export default Header
