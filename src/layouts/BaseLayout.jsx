import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserProfileContext = createContext()
const MenuContext = createContext()

function Layout() {
    const [userProfile, setUserProfile] = useState(null)
    const [menu, setMenu] = useState(null)
    const getUserProfile = useMemo(() => async () => {
        try {
            const token = window.localStorage.getItem('token')
            const response = await axios.get("https://bubble-tea-cafe-api-production.up.railway.app/api/auth/profile"
                , {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            )
            setUserProfile(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }, [userProfile])

    const getMenu = useMemo(() => async () => {
        try {
            const response = await axios.get("https://bubble-tea-cafe-api-production.up.railway.app/api/menu")
            setMenu(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }, [menu])

    useEffect(() => {
        getMenu()
        getUserProfile()
    }, [])

    return (
        <MenuContext.Provider value={menu}>
            <UserProfileContext.Provider value={userProfile}>
                <Navbar />
                <Outlet />
                <Footer />
            </UserProfileContext.Provider>
        </MenuContext.Provider>
    )
}

const useUserProfile = () => {
    const context = useContext(UserProfileContext)
    if (!context) {
        console.log('userUserProfile must be used between UserProfileContext Provider')
    }
    return context
}

const useMenu = () => {
    const context = useContext(MenuContext)
    if (!context) {
        console.log('MenuContext must be used between MenuContext Provider')
    }
    return context
}

export { useMenu, useUserProfile, Layout }
