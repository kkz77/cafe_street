import axios from "axios"
import { useEffect,useState } from "react"
import { useTopping } from "../../../layouts/BaseLayout"
import { useParams } from "react-router-dom"

export default function EditTopping() {
    const { id } = useParams()
    const topping = useTopping()
    const [formData, setFormData] = useState({
        name: "",
        price: "",
    })

    useEffect(() => {
        if (topping) {
            const toppingItem = topping.find(t => t.Id == id);
            if (toppingItem) {
                setFormData({
                    name: toppingItem.name,
                    price: toppingItem.price,
                });
            }
        }
    }, [topping, id]); 

    console.log("FormData",formData)

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

        const toppingData= {
            name: formData.name,
            price: price, // Send price as float instead of string
        };
        try {
            const token = window.localStorage.getItem('token')
            axios.put(
                `https://bubble-tea-cafe-api-production.up.railway.app/api/topping/${id}`,
                toppingData, {
                headers: {
                    Authorization: `${token}`
                }
            }
            ).then((response) => {
                window.location.href = '/dashboard'
                console.log(response)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="create-menu-container">
                <h2 className="create-menu-h2">Edit Topping Item</h2>
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

                    <button className="create-menu-button" type="submit">Add Menu Item</button>
                </form>
            </div >
        </>
    )
}