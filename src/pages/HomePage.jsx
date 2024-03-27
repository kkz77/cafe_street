import "../App.css"
import Banner from "../components/Banner/Banner"
import Card from "../components/Card/Card"
import Img_Hero from "../components/Img-Hero/Img_Hero"
import { useMenu, useUserProfile } from "../layouts/BaseLayout"
export default function HomePage() {
    const user = useUserProfile()
    const menu = useMenu()
    return (
        <>
        {console.log(user?.role)}
            <div id='home' className="main-bg-img">
                <div className="container">
                    <div className="hero">
                        <div className="content-hero">
                            <div className="content-title">
                                Enjoy your <span>coffee</span> before your activity
                            </div>
                            <div className="content-p">
                                Boost your productivity and build your mood with a glass of coffee in the morning
                            </div>
                            <div className="content-btn">
                                <div className="btn">
                                    <a href="#"> Order Now
                                        <img src="./src/assets/img/cart.png" alt="cart" />
                                    </a>
                                </div>
                                <div className="btn content-btn-menu">
                                    <a href="#">More Menu</a>
                                </div>
                            </div>
                        </div>
                        <Img_Hero rating={"4.9"} name={"Cappuccino"} price={"28k"} />
                    </div>
                    <div className="popular-content">
                        <div className="title">Popular <span>Now</span></div>
                        <div className="cards">
                            {menu ?
                                (menu.slice(-3).map((m) => <Card rating={"4.9"} name={m.name} price={m.price} img={m.image} description={m.description} />))
                                : ("No item in the menu list")}
                        </div>
                    </div>
                </div>
                <div className="rectangle">
                    <img src="./src/assets/img/Rectangle2.png" alt="rectangle" />
                </div>
            </div>
            <div className="container">
                <Banner />
            </div>
        </>
    )
}