import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../apiLink";
import { Login_div } from "../Components/Login";
import { LoginFooter } from "../Components/LoginFooter";
import { LoginLeftDiv } from "../Components/LoginLeftDiv";
import { Signup } from "../Components/Signup";
import { ChangeAuth } from "../Redux/Auth Reducer/action";


const login_box = {
    backgroundColor:"white",
    width:"700px",
    margin:"auto",
    marginTop:"190px",
    borderRadius:"5px",
    height:"650px",
    display:"flex",
    flexDirection:"column"
}

const Div = styled.div`
display:flex;
flex-direction:row;
width:fit-content;
margin:auto;
position:relative;
bottom:60px;`

const Eng_div = styled.div`
border-top:1px solid lightgrey;
text-align:center;
&>p{
    color:blue;
    cursor:pointer;
    font-size:15px;
    &:hover{
        text-decoration:underline;
    }
}`

export const Login = () => {
    const [isClicked, setIsClicked]= React.useState(false);
    const {isAuth} = useSelector((state)=>state.authReducer)
    const navigate = useNavigate();
    const dispatch=useDispatch();

    
    useEffect(()=>{
        const current_user=JSON.parse(localStorage.getItem("current_user"));
        if(!current_user){
            return;
        }
        fetch(`${api}/verifyToken/${current_user.token}`)
        .then((res)=>res.json())
        .then((res)=>{
            if(res.isAuth==true){
                navigate("/")
                return;
            }
            navigate('/login')
        })
        
    },[])
    
    return (
        <>
        <Signup state={{isClicked, setIsClicked}}/>
         <div style={{backgroundImage:"url(https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png)", backgroundRepeat:"no-repeat", width:"100%", position:"absolute", minHeight:"135%", filter:`contrast${isClicked===true?"(10%)":"(100%)"}`}}>
             <div style={login_box}>
                 <h1 style={{color:"rgb(190,0,0)", fontSize:"60px", fontFamily:"sansSerif", fontWeight:"800", margin:"auto", marginTop:"20px"}}>Quora</h1>
                 <h5 style={{margin:"auto", marginTop:"-40px", fontSize:"15px", color:"grey"}}>A Place to share knowledge and better understand the world</h5>
                 <Div>
                     <LoginLeftDiv state={{setIsClicked}}/>
                     <Login_div />
                 </Div>
                 <Eng_div>
                     <p>English {">"}</p>
                 </Eng_div>
                 <LoginFooter />
             </div>
         </div>
        </>
    )
}