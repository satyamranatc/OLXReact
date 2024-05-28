import React,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'
import "./UserLoginSection.css"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'


export default function UserLoginSection({setLoginSuccess}) {
  
  
    let [AllUsers,setAllUsers] = useState([]);
  
  
    return (
    <div id = "UserLoginSection">

        <BrowserRouter>

        <Routes>

            <Route path="/Login" element={<Login AllUsers = {AllUsers} setLoginSuccess = {setLoginSuccess}/>} />
            <Route path="/Signup" element={<Signup AllUsers = {AllUsers} setAllUsers = {setAllUsers}/>} />

        </Routes>
        

        <nav>
            <Link to={"/Login"} >Login</Link>
            <Link to={"/Signup"}>SignUp</Link>
        </nav>
        </BrowserRouter>

    </div>
  )
}
