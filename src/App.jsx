import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import UserLoginSection from './UserLoginSection'
import NavBar from './NavBar'
import Home from './Home'
import "./App.css"

export default function App() {
  let [LoginSuccess, setLoginSuccess] = useState(false);

  function UserLogiIn() {
    return LoginSuccess ? <Admin /> : <UserLoginSection setLoginSuccess={setLoginSuccess} />
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin/*" element={UserLogiIn()} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
