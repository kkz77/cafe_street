import { useMenu, useCategory, useTopping, useUserProfile } from '../../layouts/BaseLayout'
import './MemberPage.css'
import MainNav from '../../components/Member/MainNav'
import MainMenu from './MainMenu'
import { useEffect, useState } from 'react'
import Bill from './Bill'
import UpperNavbar from '../../components/Admin/UpperNavbar'
export default function MemberPage() {
    const category = useCategory()
    const topping = useTopping()
    const user = useUserProfile()
    const menu = useMenu()
    const [cart, setCart] = useState([])
    const [response, setResponse] = useState([])
    useEffect(() => {
        if (user && user.cart) {
            setResponse(user.cart)
        }
    }, [user])

    return (
        <>
            <div className="lma-main-container">
                <MainNav />
                <MainMenu
                    topping={topping}
                    category={category}
                    menu={menu}
                    cart={cart} setCart={setCart}
                    user={user}
                    response={response} setResponse={setResponse}
                />

                <article className="side">
                    <div className="user">
                        {
                            user ? (
                                <a className="user-profile-link" href="#">
                                    <img
                                        className="user-profile-img"
                                        src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                                    />
                                    <h3 className="user-profile-text"><b>{user.username}</b></h3>
                                </a>
                            ) : ("no user information")
                        }


                    </div>

                    <Bill user={user} cart={cart} response={response} setResponse={setResponse} menu={menu} topping={topping} />
                </article>
            </div>
        </>
    )
}