import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../apiLink"

export const ResetPassword = () => {
    const [newPassword, setNewPassword] = React.useState("");

    const navigate = useNavigate();

    React.useEffect(()=>{
        var userid = JSON.parse(localStorage.getItem("userid"));
        if(!userid){
            navigate('/login');
        }
    },[])

    const handleReset = () => {
        var userid = JSON.parse(localStorage.getItem("userid"))
        fetch(`${api}/resetPassword`, {
            method : "POST",
            body : JSON.stringify({password : newPassword , userid}),
            headers :{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            alert(res.message)
            navigate('/login')
        })
    }
   

    return<>
        <div style={{margin:"auto", textAlign: "center", background: "white"}}>
       <h2>Reset Your Password</h2>
       <input type="text" placeholder="Enter Your New Password" onChange={(e)=>setNewPassword(e.target.value)}/>
       <button style={{background: "blue", cursor:"pointer"}} onClick={handleReset}>Reset</button>
     </div>
    </>
    
}