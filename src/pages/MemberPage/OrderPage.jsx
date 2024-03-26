import { useEffect, useState } from "react";
import { useMenu, useTopping, useUserProfile } from "../../layouts/BaseLayout";
import axios from "axios";
export default function OrderPage() {
    const user = useUserProfile()
    const menu = useMenu()
    const toppings = useTopping()
    const [order, setOrder] = useState([])
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
            <div className="order-history">
                <h1 className="order-history-header">Your Orders</h1>
                <table className="order-table">
                    <tr className="order-table-row">
                        <th className="order-table-header">Menu</th>
                        <th className="order-table-header">Quantity</th>
                        <th className="order-table-header">Toppings</th>
                        <th className="order-table-header">Total Price</th>
                        <th className="order-table-header">status</th>
                    </tr>
                    {
                        order ? order.map((o) =>
                            <tr className="order-table-row" key={o.Id}>
                                <td className="order-table-data">{menu.find(item => item.Id === o.menu_id)?.name}</td>
                                <td className="order-table-data">{o.quantity}</td>
                                <td className="order-table-data">{getToppingName(o.topping)}</td>
                                <td className="order-table-data">{o.total}</td>
                                <td className="order-table-data">{o.status}</td>
                            </tr>
                        ) : ('')
                    }
                </table>


            </div>
        </>
    )
}