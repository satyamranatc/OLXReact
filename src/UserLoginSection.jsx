import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import "./UserLoginSection.css"
import { Routes, Route, Link } from 'react-router-dom'

export default function UserLoginSection({ setLoginSuccess }) {
  let [AllUsers, setAllUsers] = useState([]);

  return (
    <div id="UserLoginSection">
      <Routes>
        <Route path="" element={<Login AllUsers={AllUsers} setLoginSuccess={setLoginSuccess} />} />
        <Route path="/Signup" element={<Signup AllUsers={AllUsers} setAllUsers={setAllUsers} />} />
      </Routes>
      <nav>
        <Link to="">Login</Link>
        <Link to="Signup">SignUp</Link>
      </nav>
    </div>
  )
}
