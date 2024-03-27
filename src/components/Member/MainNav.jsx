import { handleLogout } from "../Navbar/Navbar";

export default function MainNav() {
    return (
        <nav className="main-nav">
            <div className="logo">
                <a href="/">
                    <img
                        className="navimg"
                        src="https://clipart-library.com/img/1695731.png"
                    />
                </a>
            </div>
            <div className="nav-items">
                <a href="/member">
                    <img
                        className="navimg"
                        src="/src/assets/img/home.png"
                    />
                    <p>Home</p>
                </a>
            </div>
            <div className="nav-items">
                <a href="/member/orderHistory">
                    <img
                        className="navimg"
                        src="/src/assets/img/clipboard.png"
                    />
                    <p>My Orders</p>
                </a>
            </div>
            <div className="nav-items">
                <a href="/" onClick={handleLogout}>
                    <img
                        className="navimg"
                        src="/src/assets/img/logout.png"
                    />
                    <p>Logout</p>
                </a>
            </div>
        </nav>
    )
}