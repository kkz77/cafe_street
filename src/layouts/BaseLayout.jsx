import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserProfileContext = createContext()
const MenuContext = createContext()
const CategoryContext = createContext()

function Layout() {
    const [userProfile, setUserProfile] = useState(null)
    const [menu, setMenu] = useState(null)
    const [category, setCategory] = useState(null)
    const getUserProfile = async () => {
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
    }

    const getMenu = async () => {
        try {
            const response = await axios.get("https://bubble-tea-cafe-api-production.up.railway.app/api/menu")
            setMenu(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCategory =async () => {
        try {
            const response = await axios.get("https://bubble-tea-cafe-api-production.up.railway.app/api/category")
            setCategory(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getCategory()
        getMenu()
        getUserProfile()
    }, [])

    return (
        <CategoryContext.Provider value={category}>
            <MenuContext.Provider value={menu}>
                <UserProfileContext.Provider value={userProfile}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </UserProfileContext.Provider>
            </MenuContext.Provider>
        </CategoryContext.Provider>
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

const useCategory = () => {
    const context = useContext(CategoryContext)
    if (!context) {
        console.log('CategoryContext must be used between CategoryContext Provider')
    }
    return context
}

export {useCategory, useMenu, useUserProfile, Layout }
