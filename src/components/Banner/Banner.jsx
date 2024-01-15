import './Banner.css'
export default function Banner() {
    return (
        <div className="banner">
            <div className="title">How to use delivery <span>service</span></div>
            <div className="banner-main">
                <div className="banner-content">
                    <div className="banner-img">
                        <img src="./src/assets/img/banner-img1.png" alt="choose coffee" />
                    </div>
                    <div className="text banner-text">choose your coffee</div>
                    <div className="banner-text2">there are 20+ coffees for you</div>
                </div>
                <div className="banner-content">
                    <div className="banner-img"><img src="./src/assets/img/food-truck_1.png" alt="cart" /></div>
                    <div className="text banner-text">we deliver it to you</div>
                    <div className="banner-text2">Choose delivery service</div>
                </div>
                <div className="banner-content">
                    <div className="banner-img"><img src="./src/assets/img/coffee-cup_2.png" alt="coffee-cup" /></div>
                    <div className="text banner-text">Enjoy your coffee</div>
                    <div className="banner-text2">Best taste</div>
                </div>
            </div>
        </div>
    )
}