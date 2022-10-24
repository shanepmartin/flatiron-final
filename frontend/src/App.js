import "./App.css";
import 'rsuite/dist/rsuite.min.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"; 
import { React, useEffect } from "react";

import Landing from "./views/Landing"

import SignUp from "./auth/SignUp"
import Login from "./auth/Login"

import Dashboard from "./views/Dashboard"
import Profile from "./dashboard/Profile"

import Achievements from "./components/Achievements"
import Contacts from "./components/Contacts"
import Degrees from "./components/Degrees"
import Feels from "./components/Feels";
import Goals from "./components/Goals"
import Memories from "./components/Memories"
import Schools from "./components/Schools"
import Trips from "./components/Trips";

// Redux login state modules...
import { setUser, logout } from "./auth/UserState"

import { useSelector, useDispatch } from "react-redux"
import DashBoardSideBar from "./dashboard/DashboardSideBar";


const App = () => {

  const user = useSelector((state) => state.user);

  // let navigate = useNavigate();

  const dispatch = useDispatch()

  // render user info to the console...

  console.log(user ? "user exists" : "user does not exist")
  console.log(user ? user : "user doesn't exist")
  console.log(!user.isLoggedIn ? "user is not logged in" : "user logged in")

  // Auto-Login //
  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log('token', token)
    if (token && !user.isLoggedin) {
      fetch("http://localhost:3000/me", {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('useEffect data', data) 
          // localStorage.setItem('token', data.token)
          dispatch(setUser(data.user))
        });
    }  
  }, [])


  // Render to the page...
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<DashBoardSideBar />} /> */}
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/feels" element={<Feels />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/trips" element={<Trips />} /> */
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
