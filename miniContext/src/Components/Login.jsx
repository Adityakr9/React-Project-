import React, {useState, useContext} from "react";
import UserContext from "../Context/userContext";

function Login(){
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState(' ');
    
    const {setUser}=useContext(UserContext);

    const handleBtn = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div >
            <h2>Login the Page</h2>
            <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/> {"   "}
            <input type="password" placeholder="PassWord" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleBtn}>Submit</button>
        </div>
    )
}

export default Login;