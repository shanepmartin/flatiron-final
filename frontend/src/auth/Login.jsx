import { useState, useEffect } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const [user, setUser] = useState({ username: "" })

    // Auto-Login //

    // useEffect(() => {
    //     let token = localStorage.getItem('token')
    //     if(token && !user.username) {
    //         fetch('http://localhost:3000/me', {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.username)
    //             if(data.user) {
    //                 setUser(data.user)
    //             }
    //         })
    //     }
    // }, [])

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
        }); console.log('user', user)
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