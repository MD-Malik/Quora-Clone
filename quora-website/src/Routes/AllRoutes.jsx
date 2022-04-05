import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Answer } from '../HomePageComponents/Answer';
import { NoRoute } from './NoRoutes';
import { Login } from './LoginPage';
import { Home } from '../HomePageComponents/Home';

export const AllRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/answer" element={<Answer />} />
         <Route path='/login' element={<Login />}/>
         <Route path="*" element={<NoRoute />} />
         {/* <Route path = "/notifications" element = {<Notification />} /> */}
    </Routes>
  )
}
