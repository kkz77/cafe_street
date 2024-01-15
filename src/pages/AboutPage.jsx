import '../App.css'
export default function AboutPage() {
    return (
        <>
            <div id='delivery' className="main-content">
                <div className="container">
                    <div id='about' className="about-us">
                        <div className="about-img">
                            <img src="./src/assets/img/about-img.png" alt="about us image" />
                        </div>
                        <div className="about-content">
                            <div className="title">About <span>us</span></div>
                            <div className="text">We provide quality coffee, and ready to deliver.</div>
                            <div className="text paragraph">
                                We are a company that makes and distributes delicious drinks. our main product is made with a
                                secret
                                recipe and available in stores worldwide.
                            </div>
                            <div className="btn"><a href="#">Get your coffee</a></div>
                        </div>
                    </div>
                </div>
                <div className="about-bg-img">
                    <img src="./src/assets/img/bg-image2.png" alt="background image" />
                </div>
            </div>
        </>
    )
}