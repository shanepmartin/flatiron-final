import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import React from "react";

import Landing from "./views/Landing"

import SignUp from "./auth/SignUp"
import Login from "./auth/Login"

import Profile from "./dashboard/Profile"


// Redux login state modules...
import { setUser, logout } from "./auth/UserState"
import UserRoute from "./auth/UserRoute"
import { useSelector, useDispatch } from "react-redux"

function App() {
  
  const user = useSelector((state) => state.user);

  // render user info to the console...
  console.log(user ? "user exists" : "user does not exist")
  console.log(user ? user : "user doesn't exist")
  console.log(!user.isLoggedIn ? "user is not logged in" : "user logged in")


  // Render to the page...
  return (
    <div className="App">
      <h1>BackPocket</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
