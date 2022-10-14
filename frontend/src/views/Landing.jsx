import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"

const Landing = () => {

    // const user = useSelector((state) => state.user);

    const [user, setUser] = useState({ username: "" })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token && !user.username) {
            fetch('http://localhost:3000/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.user) {
                        setUser(data.user)
                        localStorage.setItem('token', data.token)
                    } 
                })
        } 
    }, [])

    let navigate = useNavigate()

    return (
        <div className="Landing">
            <h1>BackPocket</h1>
            <button onClick={() => navigate('/login')}>Log In</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
    )
}

export default Landing;