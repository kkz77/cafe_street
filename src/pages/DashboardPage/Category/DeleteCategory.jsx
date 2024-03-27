import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DeleteCategory() {
    const {id} = useParams() 
    console.log(id)
    // Define an async function to delete the menu item
    const deleteItem = async () => {
        try{
            const token = window.localStorage.getItem('token')
            axios.delete(
                `https://bubble-tea-cafe-api-production.up.railway.app/api/category/${id}`,
                {
                    headers:{
                        Authorization: `${token}`
                    }
                }
            ).then((response)=>{
                window.location.href = '/dashboard/category'
                console.log(response)
            })
        }
        catch(error){
            console.log(error)
        }
    };

    // Call the deleteItem function to execute the deletion
    deleteItem();

    // Component should return null since it doesn't render anything
    return null;
}
