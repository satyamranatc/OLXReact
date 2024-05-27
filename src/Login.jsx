import React,{useState} from 'react'

export default function Login({setLoginSuccess}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Success, setSuccess] = useState(false)


    function CheckCred()
    {
        if(username == "admin" && password == "123")
        {
            setLoginSuccess(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(e.target[0].value)
        setPassword(e.target[1].value)
        // CheckCred();

    }
  return (
    <div>
        <form onSubmit={()=>handleSubmit()}>
            <h1>LOGIN</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}
