import { Link } from "react-router-dom"
import { useMenu } from "../../../layouts/BaseLayout"
import AdminNavbar from "../../../components/Admin/AdminNavbar"
import './Menu.css'
import UpperNavbar from "../../../components/Admin/UpperNavbar"

export default function Menu() {
    const menu = useMenu()
    return (
        <>
            <div className="menu-table">
                <AdminNavbar />
                <section className="main-category">
                <UpperNavbar />
                <div className="item-menu-part">
                    <h3>Menu</h3>
                    <div className="modify-table">
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {
                                menu ? (
                                    menu.map((m) =>
                                    (
                                        <tr key={m.Id}>
                                            <td>{m.Id}</td>
                                            <td>{m.name}</td>
                                            <td className="row-data-image-block">
                                                <img className="row-data-image" src={`${m.image}`} alt={`${m.name}`} />
                                            </td>
                                            <td>{m.description}</td>
                                            <td>{m.category}</td>
                                            <td>{m.price}</td>
                                            <td>
                                                <Link className='table-btn edit-menu-btn' to={`/dashboard/menu/editMenu/${m.Id}`}>Edit</Link>
                                            </td>
                                            <td>
                                                <Link className='table-btn delete-menu-btn' to={`/dashboard/menu/deleteMenu/${m.Id}`}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                    )) : ('No Menu')
                            }
                        </table>
                    </div>
                    <div className="table-create-menu">
                        <Link className='table-btn create-menu-btn' to={`/dashboard/menu/createMenu`}>Create Menu</Link>
                    </div>
                </div>
                            </section>
            </div>
        </>
    )
}