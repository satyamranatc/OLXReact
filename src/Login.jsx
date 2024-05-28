import React, { useState } from "react";

export default function Login({ AllUsers, setLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [Found,setFound] = useState(false)

  function CheckCred() {
    AllUsers.map((e) => {
      if (username == e.username && password == e.password) {
        setLoginSuccess(true);
        setFound(true)
      }
    });

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target[0].value);
    setPassword(e.target[1].value);
    CheckCred();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>LOGIN</h1>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button type="submit">LOGIN</button>
      </form>
      {Found?<h1>Login Success</h1>:<h1>Login Failed</h1>}
    </div>
  );
}
