import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserProfileContext = createContext()

function Layout() {
    const [userProfile, setUserProfile] = useState(null)
    const getUserProfile = useMemo(()=> async () => {
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
    },[userProfile])

    useEffect(() => {
        getUserProfile()
    }, [])

    return (
        <UserProfileContext.Provider value={userProfile}>
            <Navbar />
            <Outlet />
            <Footer />
        </UserProfileContext.Provider>
    )
}

const useUserProfile = ()=>{
    const context = useContext(UserProfileContext)
    if (!context){
        console.log('userUserProfile must be used between UserProfileContext Provider')
    }
    return context
}

export {useUserProfile,Layout}
