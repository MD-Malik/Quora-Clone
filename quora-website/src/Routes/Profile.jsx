import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { Navbar } from "../HomePageComponents/Navbar";
import { setUserDetails } from "../Redux/CurrentUser Reducer/action";
import { currentUserReducer } from "../Redux/CurrentUser Reducer/reducer";

// const Div_one = styled.div`
// display:flex:
// flex-direction:row;
// `

const Profile_div = styled.div`
display:flex;
flex-direction:row;
width:fit-content;
margin:auto;
// background:grey;
&>div:nth-child(1){
    display:flex;
    flex-direction:column;

    &>div:nth-child(1){
        display:flex;
        flex-direction:row;
        &>div{
            display:flex;
            flex-direction:column;
            margin-left:30px;
            &>div:nth-child(3){
                height:15px;
                font-size:15px;
                &:hover{
                    cursor:pointer;
                    text-decoration:underline;
                }
            }
            &>p{
                color:grey;
                font-size:14px;
                &:hover{
                    cursor:pointer;
                    text-decoration:underline;
                }
            }
            &>div{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                height:50px;
                &>img{
                    margin-left:260px;
                    margin-top:30px;
                    height:20px;
                    background:lightgrey;
                    border-radius:50%;
                    padding:3px;
                    border:1px solid grey;
                    &:hover{
                        cursor:pointer;
                    }
                }
            }
        }
        &>img{
            margin-top:30px;
            border-radius:50%;
            height:130px;

        }
    }
    &>p{
        font-size:13px;
        &:hover{
            cursor:pointer;
            text-decoration:underline;
        }
    }
    &>div:nth-child(3){
        display:flex;
        flex-direction:row;
        &>p{
            margin:6px;
            font-size:13px;
            font-weight:bold;
            // text-decoration:underline;
            padding:5px;
            &:hover{
                cursor:pointer;
                color:red;
                background:lightgrey;
                padding:5px;
            }
        }
    }
    &>div:nth-child(4){
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        border-top:1px solid lightgrey;
        border-bottom:1px solid lightgrey;
        // height:40px;
    }
    &>div:nth-child(5){
        display:flex;
        flex-direction:column;
        width:fit-content;
        margin:auto;
        &>img{
            height:200px;
            width:200px;
            width:fit-content;
            margin:auto;
            margin-top:20px;
        }
        &>button{
            background:blue;
            border:none; 
            width:fit-content;
            padding:10px 20px;
            border-radius:20px;
            margin:auto;
            margin-top:20px;
            color:white;
            font-weight:bold;
            &:hover{
                cursor:pointer;
            }
        }
    }
}
&>div:nth-child(2){
    margin-left:50px;
    width:max-content;
    padding:10px;
    &>div:nth-child(1){
        &>div:nth-child(n){
            display:flex;
            flex-direction:row;
            height:30px;
            &>p{
                margin-left:10px;
                color:blue;
                &:hover{
                    text-decoration:underline;
                    cursor:pointer;
                }
            }
            &>img{
                height:20px;
                margin-top:15px;
            }
        }
        &>div:nth-child(1){
            justify-content:space-between;
            border-bottom: 1px solid lightgrey;
            height:60px;
            &>p{
                color:black;
                font-weight:bold;
                font-size:13px;
            }
            &>img{
                height:20px;
                width:20px;
                padding:5px;
                background:lightgrey;
                border:1px solid grey;
                border-radius:50%;
                margin-top:8px;
                &:hover{
                    cursor:pointer;
                }
            }
        }
    }
    &>div:nth-child(2){
        &>div:nth-child(1){
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            &>img{
                height:20px;
                width:20px;
                padding:5px;
                background:lightgrey;
                border:1px solid grey;
                border-radius:50%;
                margin-top:8px;
                &:hover{
                    cursor:pointer;
                }
            }
            border-bottom:1px solid lightgrey;
        }
        &>div:nth-child(2){
            display:flex;
            flex-direction:column;
            &>img{
                height:70px;
                width:80px;
                margin:20px auto;
            }
            &>button{
                background:lightblue;
                border:1px solid blue;
                padding:5px 10px;
                border-radius:15px;
                color:blue;
                font-size:13px;
                font-weight:bold;
                margin:auto;
                &:hover{
                    cursor:pointer;
                }
            }
        }
    }
}
`

export const Profile = () => {
    const { user_details } = useSelector((state)=>state.currentUserReducer)
    const dispatch = useDispatch(currentUserReducer)

    useEffect(()=>{
        fetch("http://localhost:3001/current_user/1")
        .then((res)=>res.json())
        .then((res)=>{
            fetch(`http://localhost:3001/users?userid=${res.userid}`)
            .then((res)=>res.json())
            .then((res)=>dispatch(setUserDetails(res[0])))
        })

    },[])
    return (
        <>
        <Navbar />
         <Profile_div>
           <div>
               <div>
                   <img src={user_details.userimage} alt="userimage icon" />
                   <div>
                       <div>
                           <h1>{user_details.username}</h1>
                           <img src="https://cdn-icons.flaticon.com/png/128/2958/premium/2958783.png?token=exp=1649332032~hmac=941381c757a33bdd610f3c1e43baf4ee" alt="share icon" />
                       </div>
                       <p>Add profile credential</p>
                       <div>{user_details.followers} followers . {user_details.following} following</div>
                   </div>
               </div>
               <p>Write a description about yourself</p>
               <div>
                   <p>Profile</p>
                   <p>0 Answers</p>
                   <p>0 Questions</p>
                   <p>0 Posts</p>
                   <p>{user_details.followers} Followers</p>
                   <p>{user_details.following} Following</p>
                   <p>Edits</p>
                   <p>Activity</p>
               </div>
               <div>
                   <h4>Profile</h4>
                   <h5>Most recent</h5>
               </div>
               <div>
                   <img src="https://cdn-icons-png.flaticon.com/128/869/869078.png" alt="nothing here" />
                   <p>You haven't shared, answered or posted anything yet.</p>
                   <button>Answer Questions</button>
               </div>
           </div>
           <div>
               <div>
                   <div>
                       <p>Credentials and Highlights</p>
                       <img src="https://cdn-icons.flaticon.com/png/128/1024/premium/1024143.png?token=exp=1649337546~hmac=0e4aa55d25da9fdcec5b9975764f06fe" alt="pencil_icon" />
                   </div>
                   <div>
                       <img src="https://cdn-icons-png.flaticon.com/128/639/639394.png" alt="bag_icon" />
                       <p>Add employment credential</p>
                   </div>
                   <div>
                       <img src="https://cdn-icons.flaticon.com/png/128/2939/premium/2939207.png?token=exp=1649335652~hmac=b0014efb7eeb31ae3d900339882315a3" alt="icon" />
                       <p>Add education credential</p>
                   </div>
                   <div>
                       <img src="https://cdn-icons.flaticon.com/png/128/2838/premium/2838912.png?token=exp=1649335679~hmac=da2a8be6f79bd4cda7638b6a95db1871" alt="icon" />
                       <p>Add location credential</p>
                   </div>
                   <div>
                       <img src="https://cdn-icons.flaticon.com/png/128/2278/premium/2278049.png?token=exp=1649335711~hmac=bbfd255a8be6d33be1a3d3e000a17a1a" alt="icon" />
                       <p>Join April 2022</p>
                   </div>
               </div>
               <div>
                   <div>
                       <p>Knows about</p>
                       <img src="https://cdn-icons.flaticon.com/png/128/1024/premium/1024143.png?token=exp=1649337546~hmac=0e4aa55d25da9fdcec5b9975764f06fe" alt="edit icon" />
                   </div>
                   <div>
                       <img src="https://cdn-icons-png.flaticon.com/128/869/869078.png" alt="empty icon" />
                       <button>Add topics</button>
                   </div>
               </div>
           </div>
        </Profile_div>
        </>
    )
}