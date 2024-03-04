import axios from "axios";
import { useState } from "react"

export default function RegisterPage() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await axios.post("https://bubble-tea-cafe-api-production.up.railway.app/api/auth/register",
            {
                username: username,
                email: email, 
                password: password
            }
            ).then((response)=>{
                window.localStorage.setItem('token',response.data.token)
                window.location.href="/"
            })
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <div className="login-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={username}
                     onChange={(e)=>setUsername(e.target.value)} required />

                    <input type="text" name="email" placeholder="Email" value={email} 
                    onChange={(e)=>setEmail(e.target.value)} required />

                    <input type="password" name="password" placeholder="Password" value={password} 
                    onChange={(e)=>setPassword(e.target.value)} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}