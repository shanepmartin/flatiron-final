import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../auth/UserState"

const Landing = () => {
    
    let navigate = useNavigate()

    let dispatch = useDispatch()

    const user = useSelector((state) => state.user);

    console.log('user', user)

    // const [user, setUser] = useState({ username: "" })

    useEffect(() => {
        let token = localStorage.getItem('token')
        console.log('token', token)
        if (token && !user.username) {
            fetch('http://localhost:3000/me', {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.user) {
                    dispatch(setUser(data.user))
                    navigate('/profile')
                } 
            })
        } 
    }, [])

    return (
        <div className="Landing">
            <button onClick={() => navigate('/login')}>Log In</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
    )
}

export default Landing;