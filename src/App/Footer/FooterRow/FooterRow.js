import React from 'react'
import './footerRow.css'

const FooterRow = () => {
    return (
        <div className="footer-row">
            <div className="logo-footer">
                <a href="/"><img src="images/logo_footer.png" alt="logo-footer"/></a>
            </div>
            <div className="social-link">
                <div><a href="/">
                        <img src="images/fb.png" alt=""/>
                    </a></div>
                    <div><a href="/">
                        <img src="images/inst.png" alt=""/>
                    </a></div>
                    <div><a href="/">
                        <img src="images/g+.png" alt=""/>
                    </a></div>
                    <div><a href="/">
                        <img src="images/p.png" alt=""/>
                    </a></div>
                    <div><a href="/">
                        <img src="images/tw.png" alt=""/>
                    </a></div>
            </div>
            <div className="signature-footer">© 2019, Adelaide Theme</div>
        </div>
    )
}

export default FooterRow