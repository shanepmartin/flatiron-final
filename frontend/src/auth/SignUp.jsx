import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

import { setUser } from "../auth/UserState"

const SignUp = () => {

    let navigate = useNavigate()

    const dispatch = useDispatch()

    let token = localStorage.getItem("token");

    const [signUpData, setSignUpData] = useState({
        name: "",
        username: "",
        password: ""
    })

    // const [user, setUser] = useState({ username: '' })

    const signUpChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    // Sign Up //

    const handleSignUp = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUpData),
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("signup invalid")
            }
        })
        .then(data => {
            // setUser(data.user)
            localStorage.setItem('token', data.token)
            dispatch(setUser(data.user))
            // need to navigate to the profile next...
            navigate('/dashboard')
            console.log('signup data', data)
        }); 

        let sName = signUpData.name
        let sUsername = signUpData.username
        let sPassword = signUpData.password
        console.log(`name: ${sName}, username: ${sUsername}, password: ${sPassword}`)
    }

    return (
        <div className="sign-up">
            <h1 className="sign-up-heading">Sign Up</h1>
            <form 
                className="sign-up-form" 
                onSubmit={e => handleSignUp(e)}
            >
                <input
                    onChange={signUpChange}
                    type="text" 
                    name="name" 
                    placeholder="name" 
                    value={signUpData.name} 
                />
                <br>
                </br>
                <input 
                    onChange={signUpChange}
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    value={signUpData.username} 
                />
                <br>
                </br>
                <input 
                    onChange={signUpChange}
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    value={signUpData.password} 
                />
                <br>
                </br>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default SignUp;