import React from "react";
import { api } from "../apiLink"
import { useNavigate } from "react-router-dom"

export const ConfirmPassword = () => {
    const [code, setCode] = React.useState({
        useremail : "",
        usercode : ""
    });

    const handleInputCode = (e) => {
        setCode({
            ...code,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value
        })
    }

    const navigate = useNavigate();
    
    const handleConfirmCode = () => {
        // console.log("operate")
        fetch(`${api}/emailConfirmation`, {
            method : "POST",
            body : JSON.stringify(code),
            headers : {
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res)
            if(res.status=="failed"){
                alert(res.message)
                return;
            }
            localStorage.setItem("userid", JSON.stringify(res.userid))
            navigate("/resetPassword")
        })
    }
    return <>
     <div style={{margin:"auto", textAlign: "center", background: "white"}}>
       <h2>Please enter confirmation code sent to your email</h2>
       <input type="text" placeholder="Enter Your Email" id="useremail" onChange={handleInputCode}/>
       <input type="text" placeholder="Enter Confirmation Code" id="usercode" onChange={handleInputCode}/>
       <button style={{background: "blue", cursor:"pointer"}} onClick={handleConfirmCode}>Confirm</button>
     </div>
    </>
}