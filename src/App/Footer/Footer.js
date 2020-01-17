import React from 'react'
import FooterRow from './FooterRow/FooterRow'
import FooterImg from './FooterImg/FooterImg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <FooterRow/>
            </div>
            <FooterImg/>
	    </footer>
    )
}

export default Footer