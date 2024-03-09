import './MemberPage.css'
export default function MemberPage() {
    return (
        <>
            <div className="lma-main-container">
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
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                            />
                            <p>Menu</p>
                        </a>
                    </div>
                    <div className="nav-items">
                        <a href="#">
                            <img
                                className="navimg"
                                src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-history_89998.png"
                            />
                            <p>History</p>
                        </a>
                    </div>
                    <div className="nav-items">
                        <a href="#">
                            <img
                                className="navimg"
                                src="https://cdn-icons-png.freepik.com/512/3757/3757881.png"
                            />
                            <p>Wallet</p>
                        </a>
                    </div>
                    <div className="nav-items">
                        <a href="#">
                            <img
                                className="navimg"
                                src="https://cdn-icons-png.flaticon.com/512/7526/7526142.png"
                            />
                            <p>Promo</p>
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

                <section className="main-category">
                    <h1>Choose Category</h1>
                    <div className="search-div">
                        <input className="search" type="text" placeholder="Search " />
                        <img
                            className="search-icon"
                            src="https://icons.veryicon.com/png/o/commerce-shopping/small-icons-with-highlights/search-260.png"
                        />
                    </div>

                    <div className="item-category">
                        <a href="#">
                            <div className="item-menu-list">
                                <img
                                    className="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/4474/4474385.png"
                                />
                                <p>All</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="item-menu-list">
                                <img
                                    className="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/2315/2315990.png"
                                />
                                <p>Coffee</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="item-menu-list">
                                <img
                                    className="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/129/129166.png"
                                />
                                <p>Juice</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="item-menu-list">
                                <img
                                    className="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/869/869655.png"
                                />
                                <p>Milk</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="item-menu-list">
                                <img
                                    className="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/859/859354.png"
                                />
                                <p>Snack</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="item-menu-list">
                                <img
                                    className="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/5347/5347946.png"
                                />
                                <p>Dessert</p>
                            </div>
                        </a>
                    </div>

                    {/* <!-- coffee menu --> */}
                    <div className="coffee-menu">
                        <h3>Coffee Menu</h3>
                        <div className="coffee-container">
                            <div className="coffee-container1">
                                <div className="coffee-img-text">
                                    <img
                                        className="lattle-box"
                                        src="https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
                                    />
                                    <div className="inside-text">
                                        <p className="header-menu"><b>Caramel Mocha</b></p>
                                        <p className="coffee-des">
                                            freshly whipped cream with extra caramel sauce for drizzle
                                        </p>

                                        <p className="coffee-price">
                                            <b>
                                                price: <small><sup>$</sup></small>
                                                2 <small><del>$3</del></small></b
                                            >
                                        </p>
                                    </div>
                                    <div className="coffee-mood-size-sugar-ice">
                                        <div className="mood">
                                            <p><b>Mood</b></p>
                                            <div className="type-select type-select-emoji">
                                                <a>
                                                    <img
                                                        className="emoji-one"
                                                        src="https://static.vecteezy.com/system/resources/previews/011/999/958/non_2x/fire-icon-free-png.png"
                                                    />
                                                </a>
                                                <a>
                                                    <img
                                                        className="emoji-two"
                                                        src="https://cdn-icons-png.flaticon.com/512/5906/5906790.png"
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Size</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="emoji-text">S</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">M</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">L</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Sugar</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mood">
                                            <p><b>Ice</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="add-t-b-a" href="#">
                                    <p className="add-to-billing">Add to Billing</p>
                                </a>
                            </div>
                            <div className="coffee-container1">
                                <div className="coffee-img-text">
                                    <img
                                        className="lattle-box"
                                        src="https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
                                    />
                                    <div className="inside-text">
                                        <p className="header-menu"><b>Caramel Latte</b></p>
                                        <p className="coffee-des">
                                            freshly whipped cream with extra caramel sauce for drizzle
                                        </p>

                                        <p className="coffee-price">
                                            <b>
                                                price: <small><sup>$</sup></small
                                                >2 <small><del>$3</del></small></b
                                            >
                                        </p>
                                    </div>
                                    <div className="coffee-mood-size-sugar-ice">
                                        <div className="mood">
                                            <p><b>Mood</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <img
                                                        className="emoji-one"
                                                        src="https://static.vecteezy.com/system/resources/previews/011/999/958/non_2x/fire-icon-free-png.png"
                                                    />
                                                </a>
                                                <a>
                                                    <img
                                                        className="emoji-two"
                                                        src="https://cdn-icons-png.flaticon.com/512/5906/5906790.png"
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Size</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="emoji-text">S</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">M</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">L</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Sugar</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mood">
                                            <p><b>Ice</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="add-t-b-a" href="#">
                                    <p className="add-to-billing">Add to Billing</p>
                                </a>
                            </div>
                            <div className="coffee-container1">
                                <div className="coffee-img-text">
                                    <img
                                        className="lattle-box"
                                        src="https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
                                    />
                                    <div className="inside-text">
                                        <p className="header-menu"><b>Americano</b></p>
                                        <p className="coffee-des">
                                            freshly whipped cream with extra caramel sauce for drizzle
                                        </p>

                                        <p className="coffee-price">
                                            <b>
                                                price: <small><sup>$</sup></small
                                                >3 <small><del>$4</del></small></b
                                            >
                                        </p>
                                    </div>
                                    <div className="coffee-mood-size-sugar-ice">
                                        <div className="mood">
                                            <p><b>Mood</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <img
                                                        className="emoji-one"
                                                        src="https://static.vecteezy.com/system/resources/previews/011/999/958/non_2x/fire-icon-free-png.png"
                                                    />
                                                </a>
                                                <a>
                                                    <img
                                                        className="emoji-two"
                                                        src="https://cdn-icons-png.flaticon.com/512/5906/5906790.png"
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Size</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="emoji-text">S</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">M</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">L</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Sugar</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mood">
                                            <p><b>Ice</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="add-t-b-a" href="#">
                                    <p className="add-to-billing">Add to Billing</p>
                                </a>
                            </div>
                            <div className="coffee-container1">
                                <div className="coffee-img-text">
                                    <img
                                        className="lattle-box"
                                        src="https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
                                    />
                                    <div className="inside-text">
                                        <p className="header-menu"><b>Cuppuccino</b></p>
                                        <p className="coffee-des">
                                            freshly whipped cream with extra caramel sauce for drizzle
                                        </p>

                                        <p className="coffee-price">
                                            <b>
                                                price: <small><sup>$</sup></small
                                                >3.5 <small><del>$4</del></small></b
                                            >
                                        </p>
                                    </div>
                                    <div className="coffee-mood-size-sugar-ice">
                                        <div className="mood">
                                            <p><b>Mood</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <img
                                                        className="emoji-one"
                                                        src="https://static.vecteezy.com/system/resources/previews/011/999/958/non_2x/fire-icon-free-png.png"
                                                    />
                                                </a>
                                                <a>
                                                    <img
                                                        className="emoji-two"
                                                        src="https://cdn-icons-png.flaticon.com/512/5906/5906790.png"
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Size</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="emoji-text">S</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">M</span>
                                                </a>
                                                <a>
                                                    <span className="emoji-text">L</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mood">
                                            <p><b>Sugar</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mood">
                                            <p><b>Ice</b></p>
                                            <div className="type-select">
                                                <a>
                                                    <span className="percent-text">30%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">50%</span>
                                                </a>
                                                <a>
                                                    <span className="percent-text">70%</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="add-t-b-a" href="#">
                                    <p className="add-to-billing">Add to Billing</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="side">
                    <div className="user">
                        <a className="user-profile-link" href="#">
                            <img
                                className="user-profile-img"
                                src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                            />
                            <h3 className="user-profile-text"><b>user1</b></h3>
                        </a>
                    </div>

                    <div className="bills-part">
                        <h3 className="bills-header">Bills</h3>
                        <div className="bills-coffee">
                            <img
                                className="bills-coffee-img"
                                src="https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
                            />
                            <div className="bills-coffee-texts">
                                <h1>Caramel Latte</h1>
                                <p className="bills-quantity-price">
                                    <small><b>x1</b></small> <span className="bills-note">Notes</span>
                                    <small>$2</small>
                                </p>
                            </div>
                        </div>
                        <div className="bills-coffee">
                            <img
                                className="bills-coffee-img"
                                src="https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
                            />
                            <div className="bills-coffee-texts">
                                <h1>Caramel Latte</h1>
                                <p className="bills-quantity-price">
                                    <small><b>x1</b></small> <span className="bills-note">Notes</span>
                                    <small>$2</small>
                                </p>
                            </div>
                        </div>
                        <div className="bills-coffee">
                            <img
                                className="bills-coffee-img"
                                src="https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
                            />
                            <div className="bills-coffee-texts">
                                <h1>Caramel Latte</h1>
                                <p className="bills-quantity-price">
                                    <small><b>x1</b></small> <span className="bills-note">Notes</span>
                                    <small>$2</small>
                                </p>
                            </div>
                        </div>

                        <div className="bills-total">
                            <p>Subtotal <span className="subtotal">$123</span></p>
                            <p>Tax (10%) <span className="tax">$123</span></p>
                            <hr />
                            <p>Total <span className="total">$1234</span></p>
                        </div>

                        <div className="payment">
                            <h1>Payment Method</h1>
                            <div className="payment-methods">
                                <div className="payment-cash">
                                    <a className="payment-a" href="#">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/10529/10529540.png"
                                        />
                                        <p>cash</p>
                                    </a>
                                </div>
                                <div className="payment-cash">
                                    <a className="payment-a" href="#">
                                        <img
                                            src="https://cdn-icons-png.freepik.com/512/9361/9361196.png"
                                        />
                                        <p>Card</p>
                                    </a>
                                </div>
                                <div className="payment-cash">
                                    <a className="payment-a" href="#">
                                        <img
                                            src="https://cdn-icons-png.freepik.com/512/8312/8312969.png"
                                        />
                                        <p>E-Wallet</p>
                                    </a>
                                </div>
                            </div>
                            <a className="add-t-b-a" href="#">
                                <p className="add-to-billing">Print Bills</p>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}