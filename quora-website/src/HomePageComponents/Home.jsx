import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Feed } from './Feed';
import { Navbar } from './Navbar'
import { Post } from './Post';
import { Space } from './Space';

export const Home = () => {

  const {isAuth}= useSelector((state)=>state.authReducer)

  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuth===false){
      navigate("/login")
    }
  },[])
  return (
    <div>
       <Navbar />
       <div style={{display :"flex", gap: "25px", justifyContent:"center",alignItems:"center" }}>
           <Space />
           <Post />
           <Feed />
       </div>
    </div>
  )
}
