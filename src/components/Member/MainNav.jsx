export default function MainNav() {
    return (
        <nav className="main-nav">
            <div className="logo">
                <a href="/user.html">
                    <img
                        className="navimg"
                        src="https://clipart-library.com/img/1695731.png"
                    />
                </a>
            </div>
            <div className="nav-items">
                <a href="#">
                    <img
                        className="navimg"
                        src="https://pixsector.com/cache/afb480a4/aveb8d3f1fac7a77e24f0.png"
                    />
                    <p>Home</p>
                </a>
            </div>
            <div className="nav-items">
                <a href="#">
                    <img
                        className="navimg"
                        src="https://cdn-icons-png.freepik.com/512/771/771203.png"
                    />
                    <p>Setting</p>
                </a>
            </div>
            <div className="nav-items">
                <a href="#">
                    <img
                        className="navimg"
                        src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png"
                    />
                    <p>Logout</p>
                </a>
            </div>
        </nav>
    )
}