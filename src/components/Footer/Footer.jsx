import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="title">Subscribe to get 50% discount price</div>
                    <div className="input-box">
                        <input type="email" className="email" placeholder="Email address" />
                        <input type="submit" className="submit" value="Order Now" />
                    </div>
                </div>
            </div>
            <div className='end-footer'>
                <div className='footer-logo'><a href="#"><img src="./src/assets/img/logo_coffe.svg" alt="logo_coffee" /></a></div>
                <div className='footer-links'>
                    <div className='footer-block'>
                        <div className='footer-title'><a href="/about">About Us</a></div>
                        <div className='footer-title'><a href="#">Our Mission</a></div>
                        <div className='footer-title'><a href="#">Team</a></div>
                    </div>
                    <div className='footer-block'>
                        <div className='footer-title'><a href="#">Services</a></div>
                        <div className='footer-title'><a href="/menu">Products</a></div>
                        <div className='footer-title'><a href="#">Partnerships</a></div>
                    </div>
                    <div className='footer-block'>
                        <div className='footer-title'><a href="#">Contact</a></div>
                        <div className='footer-title'><a href="#">FAQs</a></div>
                        <div className='footer-title'><a href="#">Support</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}