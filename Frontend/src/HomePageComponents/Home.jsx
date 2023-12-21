import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Feed } from './Feed';
import { Navbar } from './Navbar'
import { Post } from './Post';
import Space from './Space';
import BasicMenu from './ProfileComponents/BasicMenu';
import { currentUserReducer } from '../Redux/CurrentUser Reducer/reducer';
import { setUserDetails, setUserId } from '../Redux/CurrentUser Reducer/action';
import { userReducer } from '../Redux/User Reducer/reducer';
import { CreatePost } from '../Components/AddQuestion/CreatePost';
import { ChangeAuth } from '../Redux/Auth Reducer/action';
import {api} from '../apiLink';
import { CleaningServicesOutlined } from '@mui/icons-material';


export const Home = () => {

  const { isAuth } = useSelector((state) => state.authReducer)
  const currentuser_dispatch = useDispatch(currentUserReducer)

  const { users } = useSelector((state) => state.userReducer)
  const { isBoxVisible } = useSelector((state) => state.isBoxVisibleReducer)

  const navigate = useNavigate();

  useEffect(() => {
      // currentuser_dispatch(setUserDetails(item))
      let current_user = JSON.parse(localStorage.getItem("current_user"));
      console.log(current_user);
      if(!current_user){
        navigate("/login")
        return;
      }
      fetch(`${api}/verifyToken/${current_user.token}`)
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
        if(res.isAuth==false){
          navigate("/login")
          return;
        }
        navigate("/");
      })
  }, [])
  return (

    <>
      <div props={isBoxVisible} style={{ filter: `blur${isBoxVisible === false ? "(5px)" : "(0px)"}` }}>
        <Navbar />
        <div style={{ display: "flex", gap: "1%", justifyContent: "center", alignItems: "flex-start" }}>
          <Space />
          <Post />
          <Feed />
        </div>
        {/* <HomeLeftSpace /> */}
      </div>
      <CreatePost />
    </>
  )
}