import axios from "axios"
import './Category.css'
import { useState } from "react"
import AdminNavbar from "../../../components/Admin/AdminNavbar"

export default function CreateCategory() {
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = window.localStorage.getItem('token')
            axios.post(
                "https://bubble-tea-cafe-api-production.up.railway.app/api/category",
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
                <h2 className="create-menu-h2">Create Category Item</h2>
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