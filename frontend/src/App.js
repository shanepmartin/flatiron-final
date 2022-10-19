import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"; 
import { React, useEffect } from "react";

import Landing from "./views/Landing"

import SignUp from "./auth/SignUp"
import Login from "./auth/Login"

import Profile from "./dashboard/Profile"
import Dashboard from "./views/Dashboard"

import Contacts from "./components/Contacts"
import NewContact from "./components/NewContact";


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
          <Route path="/profile" element={<DashBoardSideBar />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="/contacts/new" element={<NewContact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
