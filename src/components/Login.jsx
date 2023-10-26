import React,{useState,useContext} from 'react'
import UserContextProvider from '../context/UserContextProvider'
import UserContext from '../context/UserContext'
function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext);

    const handleSubmit=(event)=>{
          event.preventDefault();
          setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='username' value={username} onChange={(event)=>setUsername(event.target.value)}></input>
        <input type='password' placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login