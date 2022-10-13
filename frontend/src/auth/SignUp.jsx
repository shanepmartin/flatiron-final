import { useState } from "react";

function SignUp() {
    const signUpBody = {
        name: "",
        username: "",
        password: ""
    }

    let [signUpData, setSignupData] = useState({...signUpBody})

    const signUpChange = (e) => {
        setSignupData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    function handleSignUp() {
        if(signUpData === "" ) {
            console.log("please fill out the form")
        } else {
            fetch('http://localhost:3000/signup', {
                method: "POST",
                body: JSON.stringify(signUpData),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(res => res.json())
            .then(data => {
                if(data.id !== undefined) {
                    localStorage.setItem('token', data.token)
                    window.location.href = "/dashboard"
                } else {
                    console.log("signup failed :(")
                }
            })
        };
    }

    return (
        <div className="SignUp">
                <div>
                    <h1>Welcome, Sign Up</h1>
                    <form onChange={e => signUpChange(e)} onSubmit={e => handleSignUp(e)}>
                        <input type="text" name="name" placeholder="name" value={signUpData.name} />
                        <input type="text" name="username" placeholder="username" value={signUpData.username} />
                        <input type="text" name="password" placeholder="password" value={signUpData.password} />
                    </form>
                </div>
        </div>
    );
}

export default SignUp();