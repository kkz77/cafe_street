import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/Admin/AdminNavbar";
import { useTopping } from "../../../layouts/BaseLayout";
import './Topping.css'
import UpperNavbar from "../../../components/Admin/UpperNavbar";

export default function Topping() {
    const toppings = useTopping()

    return (
        <>
            <div className="topping-table">
                <AdminNavbar />
                <section className="main-category">
                    <UpperNavbar />
                    <div className="item-topping-part">
                        <h3>Toppings</h3>
                        <div className="modify-table">
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {
                                    toppings ? (
                                        toppings.map((t) =>
                                        (
                                            <tr key={t.Id}>
                                                <td>{t.Id}</td>
                                                <td>{t.name}</td>
                                                <td>{t.price}</td>
                                                <td>
                                                    <Link className='table-btn edit-topping-btn' to={`/dashboard/topping/editTopping/${t.Id}`}>Edit</Link>
                                                </td>
                                                <td>
                                                    <Link className='table-btn delete-topping-btn' to={`/dashboard/topping/deleteTopping/${t.Id}`}>Delete</Link>
                                                </td>
                                            </tr>
                                        )
                                        )) : ('No Topping')
                                }
                            </table>
                        </div>
                        <div className="table-create-topping">
                            <Link className='table-btn create-topping-btn' to={`/dashboard/topping/createTopping`}>Create Topping</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}