import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import React from "react";

import Landing from "./views/Landing"
import SignUp from "./auth/SignUp"
import Login from "./auth/Login"

function App() {
  return (
    <div className="App">
      <h1>BackPocket</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
