import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
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
            </div>
            <div className="footer-img">
                <img src="images/img_foot6.png" alt=""/>
                <img src="images/img_foot1.png" alt=""/>
                <img src="images/img_foot7.png" alt=""/>
                <img src="images/img_foot2.png" alt=""/>
                <img src="images/img_foot3.png" alt=""/>
                <img src="images/img_foot4.png" alt=""/>
                <img src="images/img_foot5.png" alt=""/>
            </div>
	    </footer>
    )
}

export default Footer