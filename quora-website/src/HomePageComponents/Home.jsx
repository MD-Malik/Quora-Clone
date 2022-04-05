import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar'

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
    </div>
  )
}
