import React from 'react'

const FooterRow = () => {
    return (
        <div className="footer-row">
            <div className="logo-footer">
                <a href=""><img src="images/logo_footer.png"/></a>
            </div>
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
                    <div><a href="">
                        <img src="images/tw.png"/>
                    </a></div>
            </div>
            <div className="signature-footer">© 2019, Adelaide Theme</div>
        </div>
    )
}

export default FooterRow