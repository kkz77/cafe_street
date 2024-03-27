import axios from "axios"
import './Category.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCategory } from "../../../layouts/BaseLayout"
import AdminNavbar from "../../../components/Admin/AdminNavbar"

export default function EditCategory() {
    const category = useCategory()
    const { id } = useParams()
    const [name, setName] = useState("")
    console.log(category)

    useEffect(() => {
        if (category) {
            const categoryItem = category.find(c => c.Id == id)
            categoryItem ? (
                setName(categoryItem.name)
            ) : ("")
        }
        console.log(name)
    },[category,id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = window.localStorage.getItem('token')
            axios.put(
                `https://bubble-tea-cafe-api-production.up.railway.app/api/category/${id}`,
                { name: name }
                , {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            ).then((response) => {
                window.location.href = '/dashboard/category'
                console.log(response)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <AdminNavbar />
            <div className="create-menu-container">
                <h2 className="create-menu-h2">Edit Category Item</h2>
                <form className="create-menu-form" id="menuForm" method="post" onSubmit={handleSubmit}>
                    <label className="create-menu-label" htmlFor="name">Name:</label>
                    <input className="create-menu-input" type="text" id="name" name="name"
                        value={name}
                        onChange={((e) => setName(e.target.value))}
                        required />
                    <button className="create-menu-button" type="submit">Add Category Item</button>
                </form>
            </div >
        </>
    )
}