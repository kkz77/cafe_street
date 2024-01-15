import './Navbar.css'
export default function Navbar() {
    return (
        <div className="nav-section">
            <div className="logo"><a href="/"><img src="./src/assets/img/logo_coffe.svg" alt="coffee logo" /></a></div>
            <div className="navbar">
                <ul> 
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/menu">Our Product</a></li>
                    <li><a href="/review">Review</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="search"><input type="search" name="items" id="#" placeholder="Cappuccino" /></div>
                <div className="cart"><a href="#"><img src="./src/assets/img/shopping_cart.png" alt="shopping_cart" /></a></div>
            </div>
        </div>
    )
}