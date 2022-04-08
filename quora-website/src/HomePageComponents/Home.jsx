import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Feed } from './Feed';
import { Navbar } from './Navbar'
import { Post } from './Post';
<<<<<<< HEAD
import  Space  from './Space';
import HomeLeftSpace from './HomeLeftSpace';
=======
import { Space } from './Space';
>>>>>>> 04f7a0f3b49799c1a5ead1a43ac84abaef4b18af
import BasicMenu from './ProfileComponents/BasicMenu';
import { currentUserReducer } from '../Redux/CurrentUser Reducer/reducer';
import { setUserDetails, setUserId } from '../Redux/CurrentUser Reducer/action';
import { userReducer } from '../Redux/User Reducer/reducer';
import { CreatePost } from '../Components/AddQuestion/CreatePost';


export const Home = () => {


  const { isAuth } = useSelector((state) => state.authReducer)
  const currentuser_dispatch = useDispatch(currentUserReducer)

  const { users } = useSelector((state) => state.userReducer)
  const { isBoxVisible } = useSelector((state) => state.isBoxVisibleReducer)

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login")
    }
    else {
      fetch("http://localhost:3001/current_user/1")
        .then((res) => res.json())
        .then((res) => {
          users.forEach((item) => {
            if (item.userid === res.userid) {
              currentuser_dispatch(setUserDetails(item))
            }
          })
        })
    }
  }, [])
  return (

    <>
      <div props={isBoxVisible} style={{ filter: `blur${isBoxVisible === false ? "(5px)" : "(0px)"}` }}>
        <Navbar />
        <div style={{ display: "flex", gap: "25px", justifyContent: "center", alignItems: "flex-start" }}>
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