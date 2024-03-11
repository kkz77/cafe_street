import { useEffect, useState } from 'react'
import { useCategory, useMenu, useTopping, useUserProfile } from '../../layouts/BaseLayout'
import './MemberPage.css'
export default function MemberPage() {
    const category = useCategory()
    const topping = useTopping()
    const user = useUserProfile()
    const menu = useMenu()
    const [count, setCount] = useState([])
    const [selectedTopping, setSelectedTopping] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    useEffect(() => {
        if (menu) {
            const initialCounts = {};
            menu.forEach((m) => {
                initialCounts[m.Id] = 0;
            });
            setCount(initialCounts);
        }
    }, [menu]);
    console.log("first", count)
    const handlePositiveChange = (menuId, newCount) => {
        setCount(prevCount => ({
            ...prevCount,
            [menuId]: newCount + 1
        }));
    };

    const handleNegativeChange = (menuId, newCount) => {
        if (newCount > 1) {
            setCount(prevCount => ({
                ...prevCount,
                [menuId]: newCount - 1
            }));
        }
        else {
            setCount(prevCount => ({
                ...prevCount,
                [menuId]: newCount
            }));
        }

    };

    const handleTopping = (toppingId, menuItemId) => {
        const newSelectedTopping = [...selectedTopping];
        console.log(newSelectedTopping)
        const index = newSelectedTopping.findIndex((item) => item.menuItemId === menuItemId);
        if (index !== -1) {
            if (newSelectedTopping[index].toppingIds.includes(toppingId)) {
                newSelectedTopping[index].toppingIds = newSelectedTopping[index].toppingIds.filter((id) => id !== toppingId);
            } else {
                newSelectedTopping[index].toppingIds.push(toppingId);
            }
        } else {
            newSelectedTopping.push({
                menuItemId: menuItemId,
                toppingIds: [toppingId],
            });
        }
        setSelectedTopping(newSelectedTopping);
    };

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
                        <a href="#" onClick={() => setSelectedCategory("All")}>
                            {
                                console.log(selectedCategory)
                            }
                            <div className="item-menu-list">
                                <img
                                    className="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/4474/4474385.png"
                                />
                                <p>All</p>
                            </div>
                        </a>
                        {
                            category ? (category.map((c) =>
                                <a href="#" key={c.Id} onClick={() => setSelectedCategory(c.name)}>
                                    <div className="item-menu-list">
                                        <img
                                            className="img-category"
                                            src="https://cdn-icons-png.flaticon.com/512/2315/2315990.png"
                                        />
                                        <p>{c.name}</p>
                                    </div>
                                </a>
                            )) : ("No Category")
                        }
                    </div>

                    {/* <!-- coffee menu --> */}
                    <div className="coffee-menu">
                        <h3>Coffee Menu</h3>
                        <div className="coffee-container">
                            {
                                menu ? (
                                    menu.map((m) =>
                                    (!selectedCategory || selectedCategory === "All" || selectedCategory === m.category)? (
                                            <div className="coffee-container1" key={m.Id}>
                                                <div className="coffee-img-text">
                                                    <img
                                                        className="lattle-box"
                                                        src={`${m.image}`}
                                                    />
                                                    <div className="inside-text">
                                                        <p className="header-menu"><b>{m.name}</b></p>
                                                        <p className="coffee-des">
                                                            {m.description}
                                                        </p>

                                                        <p className="coffee-price">
                                                            <b>
                                                                price: <small><sup>$</sup></small>
                                                                {m.price}
                                                            </b>
                                                        </p>
                                                    </div>
                                                    <div className="coffee-mood-size-sugar-ice">
                                                        <div className="mood">
                                                            <p><b>Quantity</b></p>
                                                            <div className="type-select type-select-emoji">
                                                                <button className='add-button' onClick={() => handlePositiveChange(m.Id, count[m.Id])}>+</button>
                                                                <p className='count'>{count[m.Id]}</p>
                                                                <button className='minus-button' onClick={() => handleNegativeChange(m.Id, count[m.Id])}>-</button>
                                                            </div>
                                                        </div>

                                                        <div className="mood">
                                                            <p><b>Size</b></p>
                                                            <div className="type-select">
                                                                {topping ? (
                                                                    topping.map((t) => (
                                                                        <div key={t.Id}>
                                                                            <input
                                                                                type="checkbox"
                                                                                id={t.Id}
                                                                                value={t.name}
                                                                                checked={selectedTopping[m.Id]?.includes(t.Id)}
                                                                                onChange={() => handleTopping(t.Id, m.Id)}
                                                                            />
                                                                            <label htmlFor={t.Id}>{t.name}</label>
                                                                        </div>
                                                                    ))
                                                                ) : ("")}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <a className="add-t-b-a" href="#">
                                                    <p className="add-to-billing">Add to Billing</p>
                                                </a>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    )
                                ) : (
                                    "No menu"
                                )

                            }
                        </div>
                    </div>
                </section>

                <article className="side">
                    <div className="user">
                        {
                            user ? (
                                <a className="user-profile-link" href="#">
                                    <img
                                        className="user-profile-img"
                                        src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                                    />
                                    <h3 className="user-profile-text"><b>{user.username}</b></h3>
                                </a>
                            ) : ("no user information")
                        }


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