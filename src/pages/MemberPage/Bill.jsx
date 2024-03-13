import { useEffect, useState } from "react"

export default function Bill({ menu, response, topping }) {
    const [menuNames, setMenuNames] = useState([])
    const [price, setPrice] = useState([])
    const [imageUrl,setImageUrl] = useState([])
    const [toppingNames, setToppingNames] = useState([])
    useEffect(() => {
        const menuNameMap = {}
        const toppingNameMap = {}
        const priceNameMap = {}
        const imageNameMap = {}
        menu ? (menu.forEach((menuItem) => {
            menuNameMap[menuItem.Id] = menuItem.name
            priceNameMap[menuItem.Id] = menuItem.price
            imageNameMap[menuItem.Id] = menuItem.image
        }
        )) : ("")

        topping ? (topping.forEach((toppingItem) => {
            toppingNameMap[toppingItem.Id] = toppingItem.name
        })) : ("")

        setMenuNames(menuNameMap)
        setToppingNames(toppingNameMap)
        setImageUrl(imageNameMap)
        setPrice(priceNameMap)
    }, [menu])

    return (
        <div className="bills-part">
            <h3 className="bills-header">Bills</h3>
            {
                response ? response.map((r) => (
                    <div className="bills-coffee" key={r.Id}>
                        <img
                            className="bills-coffee-img"
                            src={`${imageUrl[r.menu_id]}`}
                        />
                        <div className="bills-coffee-texts">
                            <h1>{menuNames[r.menu_id]}</h1>
                            <p className="bills-quantity-price">
                                <small className="bills-quantity"><b>x{r.quantity}</b></small>
                                {
                                    r.topping ? (r.topping.map((rt) => (
                                        <span className="bills-note" key={rt}>{toppingNames[rt]}</span>
                                    ))
                                    ) : ('')
                                }
                                <small>${price[r.menu_id] * r.quantity}</small>
                            </p>
                        </div>
                    </div>
                )) : ('')
            }

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
    )
}