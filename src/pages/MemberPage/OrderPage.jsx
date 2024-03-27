import { useEffect, useState } from "react";
import { useMenu, useTopping, useUserProfile } from "../../layouts/BaseLayout";
import axios from "axios";
import MainNav from "../../components/Member/MainNav";
import './OrderPage.css'
import UpperNavbar from "../../components/Admin/UpperNavbar";
export default function OrderPage() {
    const user = useUserProfile()
    const menu = useMenu()
    const toppings = useTopping()
    const [order, setOrder] = useState([])
    const [hasComplete, setHasComplete] = useState(false)
    const getOrderByUserId = async (id) => {
        try {
            const token = window.localStorage.getItem('token')
            axios.get(
                `https://bubble-tea-cafe-api-production.up.railway.app/api/order/user/${id}`,
                {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            ).then((response) => {
                setOrder(response.data.data)
                console.log("response", response)
            })
        }
        catch (error) {
            console.log(error)
        }
    };

    const getToppingName = (toppingIds) => {
        return (
            toppingIds ? (
                toppingIds.map((tID) =>
                    toppings.find(item => item.Id === tID)?.name
                ).join(', ')
            ) : ('')
        )
    }

    useEffect(() => {
        user ? (
            getOrderByUserId(user.Id)
        ) : ('')
    }, [user])

    return (
        <>
            <MainNav />
            <UpperNavbar />
            <div className="order-table">
                <div className="item-order-part">
                    <h3>Your Pending Orders</h3>
                    <div className="modify-table">
                        <table>
                            <tr>
                                <th>Menu</th>
                                <th>Quantity</th>
                                <th>Toppings</th>
                                <th>Total Price</th>
                                <th>Status</th>
                            </tr>
                            {
                                order ? (
                                    order.map((o) =>
                                        (o.status == "pending") ?
                                            (
                                                <tr key={o.Id}>
                                                    <td>{menu.find(item => item.Id === o.menu_id)?.name}</td>
                                                    <td>{o.quantity}</td>
                                                    <td>
                                                        {getToppingName(o.topping)}
                                                    </td>
                                                    <td>
                                                        {o.total}
                                                    </td>
                                                    <td>
                                                        {o.status}
                                                    </td>
                                                </tr>
                                            ) : ('')
                                    )) : ('No Order')
                            }
                        </table>
                    </div>
                </div>
            </div>
            <div className="order-table">
                <div className="item-order-part">
                    <h3>Your Completed Orders</h3>
                    <div className="modify-table">
                        <table>
                            <tr>
                                <th>Menu</th>
                                <th>Quantity</th>
                                <th>Toppings</th>
                                <th>Total Price</th>
                                <th>Status</th>
                            </tr>
                            {
                                order ? (
                                    order.map((o) =>
                                        (o.status == "completed") ?
                                            (
                                                <tr key={o.Id}>
                                                    <td>{menu.find(item => item.Id === o.menu_id)?.name}</td>
                                                    <td>{o.quantity}</td>
                                                    <td>
                                                        {getToppingName(o.topping)}
                                                    </td>
                                                    <td>
                                                        {o.total}
                                                    </td>
                                                    <td>
                                                        {o.status}
                                                    </td>
                                                </tr>
                                            ) : ('')
                                    )) : ('No Order')
                            }
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}