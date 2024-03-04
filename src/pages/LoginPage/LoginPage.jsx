import { useState } from 'react'
import './LoginPage.css'
import axios from 'axios'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Email = ", email)
        console.log("Password = ", password)
        try {
            await axios.post(
                "https://bubble-tea-cafe-api-production.up.railway.app/api/auth/login",
                {
                    email: email,
                    password: password
                }
            )
                .then((response) => {
                    window.localStorage.setItem('token', response.data.token)
                    window.location.href = '/'; 
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="login-container">
                <h2>Log In</h2>
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        required />

                    <input type="password" name="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}