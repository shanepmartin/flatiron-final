import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Landing from './views/Landing'
import SignUp from './auth/SignUp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App();
