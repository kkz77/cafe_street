import { useEffect, useState } from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar';
import { useCategory, useMenu, useOrder, useTopping, useUserProfile } from '../../layouts/BaseLayout'
import './DashboardPage.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

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
                    <div class="upper-nav">
                        <div class="upper-nav-inside">
                            <h1>Admin Dashboard</h1>
                            <a class="user-profile-link" href="#">
                                <img
                                    class="user-profile-img"
                                    src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                                />
                            </a>
                        </div>
                    </div>

                    <div class="item-category">
                        <a href="#C3">
                            <div class="item-menu-list">
                                <img
                                    class="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/10529/10529540.png"
                                />
                                <p4
                                >{menu ? menu.length : 0} items<br />
                                    <span class="item-menu-watertext">Menu</span></p4
                                >
                            </div>
                        </a>
                        <a href="#C3">
                            <div class="item-menu-list">
                                <img
                                    class="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/2038/2038767.png"
                                />
                                <p4
                                >{category ? category.length : 0} Categories<br />
                                    <span class="item-menu-watertext">Category</span></p4
                                >
                            </div>
                        </a>
                        <a href="#C4">
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
                        <a href="#C3">
                            <div class="item-menu-list">
                                <img
                                    class="img-category"
                                    src="https://cdn-icons-png.flaticon.com/512/2182/2182890.png"
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
                                            (o.status == "pending")?
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
                                            ):('')
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
                                            (o.status == "completed")?
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
                                            ):('')
                                        )
                                    ) : ('No Order')
                                }


                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <h2>All Menu</h2>
                {console.log(menu)}
                {menu ? menu.map((m) => <div key={`${m.Id}`} style={{ color: '#000' }}>{m.name}
                    <button><Link to={`/menu/deleteMenu/${m.Id}`} style={{ color: '#000' }}>Delete</Link></button>
                    <button><Link to={`/menu/editMenu/${m.Id}`} style={{ color: '#000' }} >Edit</Link></button>
                </div>) : (<div></div>)}
            </div>
            <div>
                <h2>All Category</h2>
                {console.log(category)}
                {category ? category.map((c) => <div key={`${c.Id}`} style={{ color: "#000" }}>
                    {c.name}
                    <button><Link to={`/category/editCategory/${c.Id}`} style={{ color: '#000' }}>Edit</Link></button>
                    <button><Link to={`/category/deleteCategory/${c.Id}`} style={{ color: '#000' }}>Delete</Link></button>
                </div>) : (<></>)}
            </div>
            <div>
                <h2>All Toppings</h2>
                {console.log(topping)}
                {topping ? topping.map((t) => <div key={`${t.Id}`} style={{ color: "#000" }}>
                    {t.name}
                    <button><Link to={`/topping/editTopping/${t.Id}`} style={{ color: '#000' }}>Edit</Link></button>
                    <button><Link to={`/topping/deleteTopping/${t.Id}`} style={{ color: '#000' }}>Delete</Link></button>
                </div>) : (<></>)}
            </div>
            <div>
                <h2>All Orders</h2>
                {console.log(order)}
                {order ? order.map((o) => <div key={`${o.Id}`} style={{ color: "#000" }}>
                    ID ={o.Id}\ user_id ={o.user_id}\ menu_id ={o.menu_id}\ order_status = {o.status}
                    <button><Link to={`/order/updateOrder/${o.Id}`}>Update Status</Link></button>
                </div>) : (<></>)}
            </div>
        </>
    )
}