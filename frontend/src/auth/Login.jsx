import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

import {setUser} from "./UserState"

const Login = () => {
    
    const user = useSelector((state) => state.user);

    console.log('user', user)
    console.log('user.isLoggedIn', user.isLoggedIn)

    let token = localStorage.getItem("jwt");

    console.log('token', token)

    let navigate = useNavigate()

    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    // const [user, setUser] = useState({ username: "" })

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
            dispatch(setUser(data.user))
            // need to navigate to the profile next...
            navigate('/profile')
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