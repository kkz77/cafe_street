export default function RegisterPage() {
    return (
        <>
            <div className="login-container">
                <h2>Register</h2>
                <form action="#" method="post">
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="text" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}