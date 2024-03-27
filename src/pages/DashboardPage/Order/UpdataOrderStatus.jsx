import { useParams } from "react-router-dom";
import axios from "axios";
import { useOrder } from "../../../layouts/BaseLayout";
import { useEffect, useState } from "react";
import AdminNavbar from "../../../components/Admin/AdminNavbar";

export default function updateOrderStatus() {
    const order = useOrder()
    const { id } = useParams()
    const token = window.localStorage.getItem('token')
    const [formData, setFormData] = useState({
        user_id: "",
        menu_id: "",
        topping: [],
        quantity: "",
        total: "",
        status: ""
    })

    useEffect(() => {
        if (order) {
            const orderItem = order.find(o => o.Id == id)
            console.log("order Item", orderItem)
            if (orderItem) {
                const quantity = parseInt(orderItem.quantity)
                const total = parseFloat(orderItem.total)
                setFormData({
                    ...formData,
                    user_id: orderItem.user_id,
                    menu_id: orderItem.menu_id,
                    topping: orderItem.topping,
                    quantity: quantity,
                    total: total,
                    status: "completed"
                })
            }
        }
    }, [order, id])

    useEffect(() => {
        console.log("formData:", formData); // Log formData after it's been updated
    }, [formData]); // Log only when formData changes


    const handleSubmit = async () => {
        axios.put(
            `https://bubble-tea-cafe-api-production.up.railway.app/api/order/${id}`,
            formData,
            {
                headers: {
                    Authorization: `${token}`
                }
            }
        )
            .then((response) => {
                window.location.href = '/dashboard'
                console.log("order_status", response)
            })
    }


    useEffect(() => {
        handleSubmit(); // Call handleSubmit when the component mounts
    }, [formData]);
    return (
        <>
            <AdminNavbar />
        </>
    )
}