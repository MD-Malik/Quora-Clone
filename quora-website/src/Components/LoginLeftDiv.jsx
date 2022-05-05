import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import api from "../apiLink";

const Left_div = styled.div`
display:flex;
flex-direction:column;
width:fit-content;
&>p{
    color:grey;
    font-size:13px;
    text-align:center;
}`

const ELIDiv = styled.div`
display:flex;
flex-direction:row;
border:1px solid lightgrey;
border-radius:5px;
height:45px;
width:290px;
margin:5px;

&>img{
    width:23px;
    height:22px;
    margin:12px;
    border-radius:50%;
}
&>h4{
    margin:10px;
    font-weight:400;
}
&:hover{
    background:#dee0e1;
    cursor:pointer;
}`

const Email_div = styled.div`
// text-align:center;
border-bottom: 1px solid lightgrey;
border-radius:5px;
height:45px;
width:290px;
margin:5px;
text-align:center;
&>h5{
    margin-top:10px;
    padding:5px;
    border-radius:15px;
    &:hover{
        background:#dee0e1;
        cursor:pointer;        
    }
}`

export const LoginLeftDiv = ({state}) => {
    const {setIsClicked}= state;

    let navigate = useNavigate();

    const handleClick=()=>{
        console.log(window.location.href)
        window.location.href = "http://localhost:9008/google";
        setTimeout(() => {
            console.log(window.location.href)
        }, 3000);
    }


    return (
        <>
                    <Left_div>
                        {/* <a href={api+"/google"}> */}
                         <ELIDiv onClick={handleClick}>
                             <img src="https://www.bing.com/th?id=OIP.bUazsv7bC2pTq1nFHvqg4AHaD4&w=187&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="google" />
                             <h4>Continue with Google</h4>
                         </ELIDiv>
                         {/* </a> */}
                         <ELIDiv onClick={()=>handleClick("/auth/facebook")}>
                             <img src="https://www.bing.com/th?id=OIP.bOdxtMx_BX8ICFq2szS3HwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="facebook" />
                             <h4>Continue with Facebook</h4>
                         </ELIDiv>
                         <Email_div>
                             <h5 onClick={()=>setIsClicked(true)}>Sign up with email</h5>
                         </Email_div>
                         <p>By continuing you indicate that you agree to <br />
                         Quora's Terms of Service and Privacy Policy. </p>
                    </Left_div>
        </>
    )
}