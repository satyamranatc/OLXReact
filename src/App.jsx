import React,{useState} from 'react'
import Login from './Login'
import Admin from './Admin'

export default function App() {
  let [LoginSuccess,setLoginSuccess] = useState(false)

  return (
    <div>
      <center>

        {LoginSuccess?<Admin/>:<Login setLoginSuccess = {setLoginSuccess}/>}



      </center>
    </div>
  )
}
