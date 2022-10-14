import {useState} from "react";

const SignUp = () => {

    const [signUpData, setSignUpData] = useState({
        name: "",
        username: "",
        password: ""
    })

    const [user, setUser] = useState({ username: '' })

    const signUpChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    const handleSignUp = () => {
        fetch('http://localhost:3000/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUpData),
        })
        .then(res => res.json())
        .then(data => {
            setUser(data.user)
            localStorage.setItem('token', data.token)
            console.log('data', data)
            window.location.href = "/dashboard"
        }); console.log('user', user)
    }

    return (
        <div className="SignUp">
                <div>
                    <h1>Welcome, Sign Up</h1>
                    <form onSubmit={e => handleSignUp(e)}>
                        <input
                            onChange={signUpChange}
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            value={signUpData.name} 
                        />
                        <input 
                            onChange={signUpChange}
                            type="text" 
                            name="username" 
                            placeholder="username" 
                            value={signUpData.username} 
                        />
                        <input 
                            onChange={signUpChange}
                            type="text" 
                            name="password" 
                            placeholder="password" 
                            value={signUpData.password} 
                        />
                        <input type="submit"/>
                    </form>
                </div>
        </div>
    );
}

export default SignUp;