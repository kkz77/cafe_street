import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/Admin/AdminNavbar";
import { useCategory } from "../../../layouts/BaseLayout";
import './Category.css'
import UpperNavbar from "../../../components/Admin/UpperNavbar";

export default function Category() {
    const categories = useCategory()
    return (
        <>
            <div className="category-table">
                <AdminNavbar />
                <section className="main-category">
                    <UpperNavbar />
                    <div className="item-category-part">
                        <h3>Categories</h3>
                        <div className="modify-table">
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {
                                    categories ? (
                                        categories.map((c) =>
                                        (
                                            <tr key={c.Id}>
                                                <td>{c.Id}</td>
                                                <td>{c.name}</td>
                                                <td>
                                                    <Link className='table-btn edit-category-btn' to={`/dashboard/category/editCategory/${c.Id}`}>Edit</Link>
                                                </td>
                                                <td>
                                                    <Link className='table-btn delete-category-btn' to={`/dashboard/category/deleteCategory/${c.Id}`}>Delete</Link>
                                                </td>
                                            </tr>
                                        )
                                        )) : ('No Category')
                                }
                            </table>
                        </div>
                        <div className="table-create-category">
                            <Link className='table-btn create-category-btn' to={`/dashboard/category/createCategory`}>Create Category</Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}