import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../apiLink";

const Fp_login_div = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding:10px;
&>p{
    font-size:13px;
    color:grey;
    &:hover{
        text-decoration:underline;
        cursor:pointer;
    }
}
`
const Login_button = styled.button`
background:rgba(0, 0, 256, 0.6);
color:white;
width:70px;
font-weight:bold;
font-size:15px;
border-radius:20px;
border:none;
height:40px;
&:hover{
    background: blue;
    cursor: pointer;
}`

const Right_div = styled.div`
width:fit-content;
position:relative;
bottom:20px;
left:10px;

&>input{
border:1px solid lightgrey;
border-radius:5px;
height:45px;
width:290px;
margin:5px;
font-size:15px;
padding-left:10px;
outline:blue;
&:focus{
    border:1px solid lightblue;
}
&:hover{
    border:1px solid blue;
}
}

&>label{
    margin-left:5px;
font-weight:600;
font-size:14px; 
}
`

export const Login_div = () => {
    const { users } = useSelector((state) => state.userReducer)
    const navigate = useNavigate();
    // console.log(users)
    const [userDetails, setUserDetails] = React.useState({
        useremail: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.className]: e.target.value
        })
    }
    let isUserLogged = false;
    let current_user;

    const handleLogin = () => {
        fetch(`${api}/signIn`, {
            method: "POST",
            body : JSON.stringify(userDetails),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status=="failed"){
                alert(`${res.message}`)
                return;
            }
            else{
                localStorage.setItem("current_user", JSON.stringify({token: res.token}));

                setUserDetails({
                    useremail:"",
                    password:""
                })

                navigate("/")
            }
        })
    }

    const { useremail, password } = userDetails;
    return (
        <>
            <Right_div>
                <h4>Login</h4>
                <hr />
                <label>Email</label>
                <br />
                <input type="text" placeholder="Your email" onChange={handleChange} className="useremail" value={useremail} />
                <br />
                <label>Password</label>
                <br />
                <input type="password" placeholder="Your password" onChange={handleChange} className="password" value={password} />
                <Fp_login_div>
                    <p>Forgot password?</p>
                    <Login_button onClick={handleLogin}>Login</Login_button>
                </Fp_login_div>
            </Right_div>
        </>
    )
}