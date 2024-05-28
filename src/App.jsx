import React,{useState} from 'react'
import UserLoginSection from './UserLoginSection'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Admin from './Admin'
import "./App.css"
// Media Section :
import searchIcon from './Media/search-regular-24 (3).png';


function UserLogiIn()
{
  return  LoginSuccess?<Admin/>:<UserLoginSection setLoginSuccess = {setLoginSuccess}/>

}

export default function App() {
  let [LoginSuccess,setLoginSuccess] = useState(false)

  return (
    <div>
      <center>


        <nav id = "HomeNav">
          <h2>OLX</h2>
          <div id="SearchBar">
            <input placeholder='Search Products....' type="text" />
            <img src={searchIcon} alt="" />
          </div>
          <ul>
            <li><Link to={"/Home"} >Home</Link></li>
            <li><Link to={"/Admin"} >Add Product</Link></li>
   
          </ul>
        </nav>


      </center>
    </div>
  )
}
