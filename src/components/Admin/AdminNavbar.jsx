import './AdminNavbar.css'
export default function AdminNavbar() {
    return (
        <>
            <nav class="main-nav">
                <div class="logo">
                    <a href="/user.html">
                        <img
                            class="navimg"
                            src="https://clipart-library.com/img/1695731.png"
                        />
                    </a>
                </div>
                <div class="nav-items">
                    <a href="#">
                        <img
                            class="navimg"
                            src="https://pixsector.com/cache/afb480a4/aveb8d3f1fac7a77e24f0.png"
                        />
                        <p4>Home</p4>
                    </a>
                </div>
                <div class="nav-items">
                    <a href="#">
                        <img
                            class="navimg"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                        />
                        <p4>Menu</p4>
                    </a>
                </div>
                <div class="nav-items">
                    <a href="#">
                        <img
                            class="navimg"
                            src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-history_89998.png"
                        />
                        <p4>History</p4>
                    </a>
                </div>
                <div class="nav-items">
                    <a href="#">
                        <img
                            class="navimg"
                            src="https://cdn-icons-png.freepik.com/512/3757/3757881.png"
                        />
                        <p4>Wallet</p4>
                    </a>
                </div>
                <div class="nav-items">
                    <a href="#">
                        <img
                            class="navimg"
                            src="https://cdn-icons-png.flaticon.com/512/7526/7526142.png"
                        />
                        <p4>Promo</p4>
                    </a>
                </div>
                <div class="nav-items">
                    <a href="#">
                        <img
                            class="navimg"
                            src="https://cdn-icons-png.freepik.com/512/771/771203.png"
                        />
                        <p4>Setting</p4>
                    </a>
                </div>
                <div class="nav-items">
                    <a href="#">
                        <img
                            class="navimg"
                            src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png"
                        />
                        <p4>Logout</p4>
                    </a>
                </div>
            </nav>
        </>
    )
}