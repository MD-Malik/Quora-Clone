import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChangeAuth } from "../Redux/Auth Reducer/action";
import { setUserId } from "../Redux/CurrentUser Reducer/action";

export const Home = () => {

    const {isAuth} = useSelector((state)=>state.authReducer);
    const {userid} = useSelector((state)=>state.currentUserReducer);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setFalseInLocalStorage = () =>{
        localStorage.setItem("current_user", JSON.stringify({isAuth:false, userid:""}))
    }

    useEffect(()=>{
        let current_user = JSON.parse(localStorage.getItem("current_user"));
        if(current_user===null){
            setFalseInLocalStorage()
            current_user=JSON.parse(localStorage.getItem("current_user"));
        }
        dispatch(setUserId(current_user.userid));
        if(isAuth===false){
            navigate("/login")
            return false;
        }
    },[])

    const handleLogout = () => {
        setFalseInLocalStorage();
        navigate("/login")
    }
    // console.log(userid);
    return (
        <>
         <h1>This is home Page....</h1>  {/* don't delete it give route of the origin home page here */}
         <h2>User id of the user is {userid}</h2>
         <button onClick={handleLogout}>logout</button>
        </>
    )
}