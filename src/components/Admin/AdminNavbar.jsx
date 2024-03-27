import { handleLogout } from "../Navbar/Navbar";
import './AdminNavbar.css'

export default function AdminNavbar() {
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
                <a href="/">
                    <img
                        className="navimg"
                        src="/src/assets/img/home.png"
                    />
                    <p>Home</p>
                </a>
            </div>
            <div className="nav-items">
                <a href="/dashboard/category">
                    <img
                        className="navimg"
                        src="/src/assets/img/category.png"
                    />
                    <p>Categories</p>
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