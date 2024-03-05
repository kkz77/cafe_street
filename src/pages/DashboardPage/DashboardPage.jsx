import { useMenu } from '../../layouts/BaseLayout'
import axios from 'axios';
import './DashboardPage.css'
import { Link } from 'react-router-dom';

export default function DashboardPage() {
    const menu = useMenu() 
    const handleDelete = async (itemId) => {
        try {
            // Send a DELETE request to the API endpoint with the item ID
            const token = window.localStorage.getItem('token')
            const response = await axios.delete(`https://bubble-tea-cafe-api-production.up.railway.app/api/menu/${itemId}`,
                {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            ).then(() => {
                window.location.href = "/dashboard"
            });
            console.log('Item deleted successfully:', response.data);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <>
            <div>
                <h2>All Menu</h2>
                    {console.log(menu)}
                    {menu ? menu.map((m) => <div key={`${m.Id}`} style={{ color: '#000' }}>{m.name}
                        <button onClick={() => handleDelete(m.Id)}>Delete</button>
                        <button><Link to={`/editMenu/${m.Id}`}>Edit</Link></button>
                    </div>) : (<div></div>)}
            </div>
        </>
    )
}