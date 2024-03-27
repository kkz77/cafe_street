import { useEffect, useState } from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar';
import { useCategory, useMenu, useOrder, useTopping, useUserProfile } from '../../layouts/BaseLayout'
import './DashboardPage.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpperNavbar from '../../components/Admin/UpperNavbar';

export default function DashboardPage() {
    const menu = useMenu()
    const category = useCategory()
    const topping = useTopping()
    const order = useOrder()
    const user = useUserProfile()
    const [allUser, setAllUser] = useState([])
    const getAllUser = async () => {
        try {
            const token = window.localStorage.getItem('token')
            const response = await axios.get("https://bubble-tea-cafe-api-production.up.railway.app/api/auth/users"
                , {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            )
            setAllUser(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getToppingName = (toppingIds) => {
        return (
            toppingIds ? (
                toppingIds.map((tID) =>
                    topping.find(item => item.Id === tID)?.name
                ).join(', ')
            ) : ('')
        )
    }

    useEffect(() => {
        getAllUser()
    }, [user])

    return (
        <>
            <div class="lma-admin-main-container">
                <AdminNavbar />
                <section class="main-category">
                    <UpperNavbar />

                    <div class="item-category">
                        <a href="/dashboard/menu">
                            <div class="item-menu-list">
                                <img
                                    class="img-category"
                                    src="/src/assets/img/checklist.png"
                                />
                                <p4
                                >{menu ? menu.length : 0} items<br />
                                    <span class="item-menu-watertext">Menu</span></p4
                                >
                            </div>
                        </a>
                        <a href="/dashboard/category">
                            <div class="item-menu-list">
                                <img
                                    class="img-category"
                                    src="/src/assets/img/categories.png"
                                />
                                <p4
                                >{category ? category.length : 0} Categories<br />
                                    <span class="item-menu-watertext">Category</span></p4
                                >
                            </div>
                        </a>
                        <a href="/dashboard">
                            <div class="item-menu-list">
                                <img
                                    class="img-category"
                                    src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/purchase_order-512.png"
                                />
                                <p4
                                >{order ? order.length : 0} Orders<br />
                                    <span class="item-menu-watertext">Orders</span></p4
                                >
                            </div>
                        </a>
                        <a href="/dashboard">
                            <div class="item-menu-list">
                                <img
                                    class="img-category"
                                    src="/src/assets/img/user.png"
                                />
                                <p4
                                >{allUser ? allUser.length : 0} <br />
                                    <span class="item-menu-watertext">Clients</span></p4
                                >
                            </div>
                        </a>
                    </div>

                    <div id="C4" class="item-order-part">
                        <h3>Pending Orders</h3>
                        <div class="modify-table">
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>User Id</th>
                                    <th>Name</th>
                                    <th>Menu</th>
                                    <th>Toppings</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                                {
                                    order ? (
                                        //todo split pending orders and completed orders
                                        order.map((o) =>
                                            (o.status == "pending") ?
                                                (
                                                    <tr>
                                                        <td>{o.Id}</td>
                                                        <td>{o.user_id}</td>
                                                        <td>{allUser?.find(item => item.Id === o.user_id)?.username}</td>
                                                        <td>{menu?.find(item => item.Id === o.menu_id)?.name}</td>
                                                        <td>{getToppingName(o.topping)}</td>
                                                        <td>{o.quantity}</td>
                                                        <td>{o.total}</td>
                                                        <td>{o.status}</td>
                                                        <td>
                                                            <Link className='update-order-btn' to={`/dashboard/order/updateOrder/${o.Id}`}>Update</Link>
                                                        </td>
                                                        <td>
                                                            <Link className='delete-order-btn' to={`/dashboard/order/deleteOrder/${o.Id}`}>Delete</Link>
                                                        </td>
                                                    </tr>
                                                ) : ('')
                                        )
                                    ) : ('No Order')
                                }


                            </table>
                        </div>
                    </div>

                    <div id="C5" class="item-order-part">
                        <h3>Completed Orders</h3>
                        <div class="modify-table">
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>User Id</th>
                                    <th>Name</th>
                                    <th>Menu</th>
                                    <th>Toppings</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                </tr>
                                {
                                    order ? (
                                        order.map((o) =>
                                            (o.status == "completed") ?
                                                (
                                                    <tr>
                                                        <td>{o.Id}</td>
                                                        <td>{o.user_id}</td>
                                                        <td>{allUser?.find(item => item.Id === o.user_id)?.username}</td>
                                                        <td>{menu?.find(item => item.Id === o.menu_id)?.name}</td>
                                                        <td>{getToppingName(o.topping)}</td>
                                                        <td>{o.quantity}</td>
                                                        <td>{o.total}</td>
                                                        <td>{o.status}</td>
                                                        <td>
                                                            <Link className='delete-order-btn' to={`/dashboard/order/deleteOrder/${o.Id}`}>Delete</Link>
                                                        </td>
                                                    </tr>
                                                ) : ('')
                                        )
                                    ) : ('No Order')
                                }


                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}