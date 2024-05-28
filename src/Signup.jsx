import React,{useState} from 'react'

export default function Signup({AllUsers,setAllUsers}) {


    function handleSubmit(e)
    {
        e.preventDefault();
        setAllUsers([...AllUsers,{name:e.target[0].value,username:e.target[1].value,password:e.target[2].value}])
        e.target.reset();
        console.log(AllUsers)
    }


  return (
    <div>

        <center>
            <h2>Sign up</h2>
        </center>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <input placeholder='Name' type="text" />
                <br />
                <input placeholder='Username' type="text" />

                <br />
                <input placeholder='Password' type="text" />
                <br />

                <button type='Submit'>Submit</button>
                <button type='reset' >Clear</button>

            </form>
    </div>
  )
}
