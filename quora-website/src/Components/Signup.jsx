import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid"
import { ChangeAuth } from "../Redux/Auth Reducer/action";
import { users } from "../Redux/User Reducer/action";

const Signup_div = styled.div`
background:white;
color:black;
width:600px;
z-index:2;
position:fixed;
top:200px;
left:460px;
height:400px;
border-radius:10px;
padding-left:20px;
padding-top:20px;
&>h1{
    font-weight:400;
    width:25px;
    margin-left:-10px;
    padding-left:10px;
    cursor:pointer;
    font-size:25px;
    &:hover{
        background:lightgrey;
        border-radius:35px;
    }

}
&>label{
    font-weight:600;
    font-size:14px;
}
&>input{
    height:45px;
    width:95%;
    border-radius:5px;
    border:1px solid lightgrey;
    padding-left:10px;
    font-size:15px;
    outline:blue;
    &:focus{
        border:1px solid skyblue;
    }
    &:hover{
        border:1px solid blue;
    }
}
&>div{
    border-top:1px solid lightgrey;
    position:relative;
    top:${props => (props.children[1].props.props===0?"90px":"140px")};
    margin-left:-20px;
    &>button{
        position:relative;
        float:right;
        top:10px;
        right:20px;
        background:rgba(0, 100, 200, 0.6);
        border:none;
        padding:10px 20px;
        border-radius:18px;
        color:white;
        font-weight:bold;
        &:hover{
            background:blue;
            cursor:pointer;
        }
    }
}
@media screen and (max-width: 1200px){
    position:absolute;
    left:10%;
}
@media screen and (max-width: 800px){
    left:10%;
}
`

export const Signup = ({state}) => {
    const {isClicked, setIsClicked} = state;
    const [nextCount, setNextCount] = React.useState(0)
    const {isAuth} = useSelector((state)=>state.authReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userReducer} = useSelector((state)=>state)

    const updateUsers = () => {
        fetch("http://localhost:3001/users")
        .then((res)=>res.json())
        .then((res)=>dispatch(users(res)))
    }

    const updateFromDataStorage = () => {
        fetch("http://localhost:3001/current_user/1")
        .then((res)=>res.json())
        .then((res)=>dispatch(ChangeAuth(res.isAuth)))
    }

    useEffect(()=>{
        updateUsers();
        updateFromDataStorage();
        console.log(userReducer.users)        
    },[])

    const [userDetails, setUserDetails] = React.useState({
        username:"",
        useremail:"",
        password:""
    })

    const handleChange = (e) => {
        const payload = {
            ...userDetails,
            [e.target.id]:e.target.value
        }

        setUserDetails(payload)
    }
let alreadyPresent=false

    const handleSubmit = () => {
        console.log("done")
        updateUsers();
        userReducer.users.forEach((item)=>{
            if(item.password===userDetails.password || item.useremail===userDetails.useremail){
                alreadyPresent=true;
                return;
            }
        })
        if(alreadyPresent===true){
            alreadyPresent=false;
            alert("User Already Exist");
            setNextCount(0)
            return;
        }
        else{
            
            fetch("http://localhost:3001/users",{
            method:"POST",
            body:JSON.stringify({
                ...userDetails,
                userid:uuid(),
                isAuth:true
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            // localStorage.setItem("current_user", JSON.stringify({isAuth:true, userid:res.userid}));
            // console.log(res);
            fetch("http://localhost:3001/current_user/1",{
                method:"PATCH",
                body:JSON.stringify({
                    isAuth:true,
                    userid:res.userid
                })
            })
            .then(()=>{
                updateUsers();
                updateFromDataStorage();
            })
         })
         .then(()=>navigate("/"))
        }
    }

    return (
        <>
        <Signup_div hidden={isClicked===false?true:false}> <h1 onClick={()=>{setIsClicked(false);
        setNextCount(0)}} props={nextCount}>X</h1>
        <h3>Sign up</h3>
        <label>{nextCount===0?"Name":"Password"}</label><br />
        <input type="text" id="username" placeholder="What would you like to be called?" onChange={handleChange} hidden={nextCount===0?false:true}/>
        <input type="password" id="password" onChange={handleChange} hidden={nextCount===1?false:true}/>
        <br />
        <label hidden={nextCount===0?false:true}>Email</label>
        <br />
        <input type="email" id="useremail" placeholder="Your email" onChange={handleChange} hidden={nextCount===0?false:true}/>
        <div>
            <button onClick={()=>setNextCount(nextCount+1)} hidden={nextCount===0?false:true}>Next</button>
            <button onClick={handleSubmit} hidden={nextCount===1?false:true}>Finish</button>
        </div>
        </Signup_div>
        </>
    )
}