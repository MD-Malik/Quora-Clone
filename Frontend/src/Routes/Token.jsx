import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Token = () => {
    
    let { token }= useParams()
    
    localStorage.setItem("current_user", JSON.stringify({token}))


    const navigate = useNavigate();
    
    React.useEffect(()=>{
        navigate('/')
    }, [])
    
    return <>
      <p>SignIn Successfull</p>
    </>
}