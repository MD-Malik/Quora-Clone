import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from '../HomePageComponents/Home';
import { Answer } from '../HomePageComponents/Answer';

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
