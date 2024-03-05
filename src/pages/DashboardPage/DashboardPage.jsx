import { useCategory, useMenu } from '../../layouts/BaseLayout'
import './DashboardPage.css'
import { Link } from 'react-router-dom';

export default function DashboardPage() {
    const menu = useMenu() 
    const category = useCategory()
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
        </>
    )
}