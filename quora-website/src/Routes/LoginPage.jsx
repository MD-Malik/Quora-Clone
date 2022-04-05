import { Link } from "@mui/material";
import React from "react";
import styled from "styled-components";

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
bottom:60px;
`
const Left_div = styled.div`
display:flex;
flex-direction:column;
width:fit-content;
&>p{
    color:grey;
    font-size:13px;
    text-align:center;
}
`
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
}
`
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
}
`
const Footer_div = styled.div`
display:flex;
flex-direction:row;
background:#dee0e1;
padding:6px;
padding-left:80px;

&>p{
    text-decoration:none;
    color:#636466;
    font-size:13px;
    cursor:pointer;
    margin:10px 2px;
    &:hover{
        text-decoration:underline;
    }
}
`
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
}
`
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
}
`
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
&>close{
    cursor:pointer;
    font-size:25px;

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
    top:110px;
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
`

export const Login = () => {
    const [isClicked, setIsClicked]= React.useState(false);

    
    return (
        <>
        <Signup_div hidden={isClicked===false?true:false}> <close onClick={()=>setIsClicked(false)}>X</close>
        <h3>Sign up</h3>
        <label>Name</label><br />
        <input type="text" placeholder="What would you like to be called?" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" placeholder="Your email" />
        <div>
            <button>Next</button>
        </div>
        </Signup_div>
         <div style={{backgroundImage:"url(https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png)", backgroundRepeat:"no-repeat", width:"100%", position:"absolute", minHeight:"135%", filter:`contrast${isClicked===true?"(10%)":"(100%)"}`}}>
             <div style={login_box}>
                 <h1 style={{color:"rgb(190,0,0)", fontSize:"60px", fontFamily:"sansSerif", fontWeight:"800", margin:"auto", marginTop:"20px"}}>Quora</h1>
                 <h5 style={{margin:"auto", marginTop:"-40px", fontSize:"15px", color:"grey"}}>A Place to share knowledge and better understand the world</h5>
                 <Div>
                     <Left_div>
                         <ELIDiv>
                             <img src="https://www.bing.com/th?id=OIP.bUazsv7bC2pTq1nFHvqg4AHaD4&w=187&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="google" />
                             <h4>Continue with Google</h4>
                         </ELIDiv>
                         <ELIDiv>
                             <img src="https://www.bing.com/th?id=OIP.bOdxtMx_BX8ICFq2szS3HwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="facebook" />
                             <h4>Continue with Facebook</h4>
                         </ELIDiv>
                         <Email_div>
                             <h5 onClick={()=>setIsClicked(true)}>Sign up with email</h5>
                         </Email_div>
                         <p>By continuing you indicate that you agree to <br />
                         Quora's Terms of Service and Privacy Policy. </p>
                     </Left_div>
                     <Right_div>
                         <h4>Login</h4>
                         <hr />
                         <label>Email</label>
                         <br />
                         <input type="text" placeholder="Your email" />
                         <br />
                         <label>Password</label>
                         <br />
                         <input type="password" placeholder="Your password" />
                         <Fp_login_div>
                             <p>Forgot password?</p>
                             <Login_button>Login</Login_button>
                         </Fp_login_div>
                     </Right_div>
                 </Div>
                 <Eng_div>
                     <p>English {">"}</p>
                 </Eng_div>
                 <Footer_div>
                     <p>About.</p>
                     <p>Careers.</p>
                     <p>Privacy.</p>
                     <p>Terms.</p>
                     <p>Contact.</p>
                     <p>Language.</p>
                     <p>Your Ad Choices.</p>
                     <p>Press.</p>
                     <p>© Quora, Inc. 2022</p>
                 </Footer_div>
             </div>
         </div>
        </>
    )
}