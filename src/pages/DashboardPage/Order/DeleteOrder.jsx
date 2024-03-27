import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DeleteOrder() {
    const { id } = useParams()
    const token = window.localStorage.getItem('token')
    const deleteOrder = async (id) => {
        axios.delete(
            `https://bubble-tea-cafe-api-production.up.railway.app/api/order/${id}`,
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
        deleteOrder(id)
    }, [id])
    return (null)
}