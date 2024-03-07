import { useCategory, useMenu, useOrder, useTopping } from '../../layouts/BaseLayout'
import './DashboardPage.css'
import { Link } from 'react-router-dom';

export default function DashboardPage() {
    const menu = useMenu() 
    const category = useCategory()
    const topping = useTopping()
    const order = useOrder() 
    return (
        <>
            <div>
                <h2>All Menu</h2>
                    {console.log(menu)}
                    {menu ? menu.map((m) => <div key={`${m.Id}`} style={{ color: '#000' }}>{m.name}
                        <button><Link to={`/menu/deleteMenu/${m.Id}`} style={{color:'#000'}}>Delete</Link></button>
                        <button><Link to={`/menu/editMenu/${m.Id}`} style={{color:'#000'}} >Edit</Link></button>
                    </div>) : (<div></div>)}
            </div>
            <div>
                <h2>All Category</h2>
                {console.log(category)}
                {category ? category.map((c)=> <div key={`${c.Id}`} style={{color:"#000"}}>
                    {c.name}
                    <button><Link to={`/category/editCategory/${c.Id}`} style={{color:'#000'}}>Edit</Link></button>
                    <button><Link to={`/category/deleteCategory/${c.Id}`} style={{color:'#000'}}>Delete</Link></button>
                </div>):(<></>)}
            </div>
            <div>
                <h2>All Toppings</h2>
                {console.log(topping)}
                {topping ? topping.map((t)=> <div key={`${t.Id}`} style={{color:"#000"}}>
                    {t.name}
                    <button><Link to={`/topping/editTopping/${t.Id}`} style={{color:'#000'}}>Edit</Link></button>
                    <button><Link to={`/topping/deleteTopping/${t.Id}`} style={{color:'#000'}}>Delete</Link></button>
                </div>):(<></>)}
            </div>
            <div>
                <h2>All Orders</h2>
                {console.log(order)}
                {order ? order.map((o)=> <div key={`${o.Id}`} style={{color:"#000"}}>
                    ID ={o.Id}\ user_id ={o.user_id}\ menu_id ={o.menu_id}\ order_status = {o.status}
                    <button><Link to={`/order/updateOrder/${o.Id}`}>Update Status</Link></button>
                </div>):(<></>)}
            </div>
        </>
    )
}