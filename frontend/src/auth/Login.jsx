import { useState, useEffect } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const [user, setUser] = useState({ username: "" })

    // Input Login Info //

    const loginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    // Login //

    const loginSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(data => {
            setUser(data.user)
            localStorage.setItem('token', data.token)
            // need to navigate to the dashboard next...
        }); 

        // view the login info in the console...
        
        console.log('login info', loginData)
        let loginName = loginData.username
        let loginPassword = loginData.password
        console.log(`username: ${loginName}, password: ${loginPassword}`)

    } 

    return (
        <div className="Login">
            <div>
                <h1>LogIn</h1>
                <form onSubmit={e => loginSubmit(e)}>
                    <input
                        onChange={loginChange}
                        type="text"
                        name="username"
                        placeholder="username"
                        value={loginData.username}
                    />
                    <input
                        onChange={loginChange}
                        type="text"
                        name="password"
                        placeholder="password"
                        value={loginData.password}
                    />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Login;