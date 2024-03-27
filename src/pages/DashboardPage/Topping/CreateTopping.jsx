import axios from "axios"
import { useState } from "react"
import AdminNavbar from "../../../components/Admin/AdminNavbar"

export default function CreateTopping() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
    })

    const handleChange = (e) => {
        const value = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const price = parseFloat(formData.price);

        const toppingData = {
            name: formData.name,
            price: price, // Send price as float instead of string
        };
        try {
            const token = window.localStorage.getItem('token')
            axios.post(
                "https://bubble-tea-cafe-api-production.up.railway.app/api/topping",
                toppingData, {
                headers: {
                    Authorization: `${token}`
                }
            }
            ).then((response) => {
                window.location.href = '/dashboard/topping'
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
                <h2 className="create-menu-h2">Create Topping Item</h2>
                <form className="create-menu-form" id="menuForm" method="post" onSubmit={handleSubmit}>
                    <label className="create-menu-label" htmlFor="name">Name:</label>
                    <input className="create-menu-input" type="text" id="name" name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required />

                    <label className="create-menu-label" htmlFor="price">Price:</label>
                    <input className="create-menu-input" type="number" id="price" name="price" min="0" step="0.01"
                        value={formData.price}
                        onChange={handleChange}
                        required />

                    <button className="create-menu-button" type="submit">Add Topping Item</button>
                </form>
            </div >
        </>
    )
}