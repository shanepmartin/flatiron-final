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
import AchievementsLog from "./lists/AchievementsLog"
import Contacts from "./components/Contacts"
import ContactsLog from "./lists/ContactsLog";
import UpdateContact from "./forms/UpdateContact";
import Degrees from "./components/Degrees"
import DegreesLog from "./lists/DegreesLog";
import Feels from "./components/Feels";
import FeelsLog from "./lists/FeelsLog";
import Goals from "./components/Goals"
import GoalsLog from "./lists/GoalsLog";
import Memories from "./components/Memories"
import NewMemory from "./forms/NewMemory";
import MemoriesLog from "./lists/MemoriesLog";
import Schools from "./components/Schools"
import SchoolsLog from "./lists/SchoolsLog";
import Trips from "./components/Trips";
import TripsLog from "./lists/TripsLog";

// Redux login state modules...
import { setUser, logout } from "./auth/UserState"

import { useSelector, useDispatch } from "react-redux"
import DashBoardSideBar from "./dashboard/DashboardSideBar";


const App = () => {

  const user = useSelector((state) => state.user);
   // state current contact
  const dispatch = useDispatch()

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


  // index of routes...

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<DashBoardSideBar />} /> */}
          <Route path="/achievements/new" element={<Achievements />} />
          <Route path="/achievements" element={<AchievementsLog />} />
          <Route path="/contacts/new" element={<Contacts />} />
          <Route path="/contacts/:id" element={<UpdateContact  />} />
          <Route path="/contacts" element={<ContactsLog />} />
          <Route path="/degrees/new" element={<Degrees />} />
          <Route path="/degrees" element={<DegreesLog />} />
          <Route path="/feels/new" element={<Feels />} />
          <Route path="/feels" element={<FeelsLog />} />
          <Route path="/goals/new" element={<Goals />} />
          <Route path="/goals" element={<GoalsLog />} />
          <Route path="/memories/new" element={<Memories />} />
          <Route path="/memories" element={<MemoriesLog />} />
          <Route path="/memories/new/:id" element={<NewMemory />} />
          <Route path="/schools/new" element={<Schools />} />
          <Route path="/schools" element={<SchoolsLog />} />
          <Route path="/trips/new" element={<Trips />} /> 
          <Route path="/trips" element={<TripsLog />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
