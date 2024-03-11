import { useState } from 'react'
import { useUserProfile } from '../../layouts/BaseLayout'
import './Navbar.css'
import { redirect } from 'react-router-dom'
export default function Navbar() {
    const userProfile = useUserProfile()
    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropDownOpen(!isDropdownOpen)
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        return redirect('/login')
    }

    return (
        <div className="nav-section">
            <div className="logo"><a href="/"><img src="./src/assets/img/logo_coffe.svg" alt="coffee logo" /></a></div>
            <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/menu">Our Product</a></li>
                    <li><a href="/review">Review</a></li>
                </ul>
            </div>
            {
                userProfile ? (
                    <div className="right-nav">
                        <div className="cart"><a href="#"><img src="./src/assets/img/shopping_cart.png" alt="shopping_cart" /></a></div>
                        <div className="profile" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <a className='profile-img' href="#"><img src="./src/assets/img/profile-user.png" alt="Profile" /></a>
                            <a href="#" className='profile-header'>Welcome, {userProfile.username}</a>
                            { userProfile.role == "customer" ?(
                            isDropdownOpen && (
                                <div className="dropdown-content">
                                    <a href="/member">My Account</a>
                                    <a href='/' onClick={handleLogout}>Logout</a>
                                </div>
                            )):(
                                isDropdownOpen && (
                                    <div className="dropdown-content">
                                        <a href="/dashboard">Dashboard</a>
                                        <a href='/' onClick={handleLogout}>Logout</a>
                                    </div>
                            ))}
                        </div>
                    </div>
                ) : (

                    <div className='right-nav'>
                        <div className="login"><a href="/login">Log In</a></div>
                        <div className="register"><a href="/register">Register</a></div>
                    </div>
                )
            }


            {/* <div className="search"><input type="search" name="items" id="#" placeholder="Cappuccino" /></div>
                <div className="cart"><a href="#"><img src="./src/assets/img/shopping_cart.png" alt="shopping_cart" /></a></div> */}
        </div>
    )
}