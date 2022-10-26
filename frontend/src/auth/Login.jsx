import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../auth/UserState"

const Login = () => {

    const user = useSelector((state) => state.user);

    // console.log('user', user)
    // console.log('user.isLoggedIn', user.isLoggedIn)

    let token = localStorage.getItem("token");

    // console.log('token', token)

    let navigate = useNavigate()

    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    // let [user, setUser] = useState({ username: "" })

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
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    alert("login invalid")
                }
            })
            .then(data => {
                // setUser(data.user)
                console.log('data', data.token)
                localStorage.setItem('token', data.token)
                dispatch(setUser(data.user))
                // need to navigate to the profile next...
                navigate('dashboard')
            });

        // view the login info in the console...

        console.log('login info', loginData)
        let loginName = loginData.username
        let loginPassword = loginData.password
        console.log(`username: ${loginName}, password: ${loginPassword}`)

    }

    return (
        <div className="login">
            <div>
                <h1 className="login-heading">BackPocket</h1>
                <form className="login-form" onSubmit={e => loginSubmit(e)}>
                    <input
                        onChange={loginChange}
                        type="text"
                        name="username"
                        placeholder="username"
                        value={loginData.username}
                    />
                    <br>
                    </br>
                    <input
                        onChange={loginChange}
                        type="password"
                        name="password"
                        placeholder="password"
                        value={loginData.password}
                    />
                    <br>
                    </br>
                    <input type="submit" />
                </form>
                <br>
                </br>
                <button onClick={() => navigate('/signup')}>SignUp</button>
            </div>
        </div>
    )
}

export default Login;