import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import React, { useEffect } from "react";
import { PostTop } from "./Postpage/PostTop";
import { PostBottom } from "./Postpage/PostBottom";
import { PostMiddle } from "./Postpage/PostMiddle";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/PostReducer/action";
import { isBoxVisibleAction } from "../Redux/ShowAddQuestion Reducer/action";

export const Component1 = () => {

  const { posts } = useSelector((state) => state.postReducer);
  // console.log("post", posts);
  const dispatch = useDispatch();
  const getPosts = () => {
    fetch(`http://localhost:3001/post`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("res:", res);
        dispatch(getPost(res));
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #dee0dc",
          borderRadius: '5px',
          margin: "20px",
          padding: "10px 0px 0px 0px",
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'space-around',
        }} >
        <div style={{ display: "flex", alignContent: 'space-around', justifyContent: 'center', columnGap: '1%' }}>
          <Avatar style={{ height: "30px", width: "30px" }} />
          <Button style={{
            textAlign: 'left', width: '90%', border: "1px solid #dee0dc", borderRadius: '70px', backgroundColor: '#F1F2F2', justifyContent: 'start', color: '#A6A8AA', fontSize: '11px', padding: '0px 10px'
          }} href="#text-buttons" size="large" onClick={() => dispatch(isBoxVisibleAction(false))}>
            What do you want to ask or share?
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button style={{ textTransform: 'capitalize', columnGap: '15px' }} onClick={() => dispatch(isBoxVisibleAction(false))}>
            <LiveHelpOutlinedIcon />&nbsp;
            Ask
          </Button>
          |
          <Button style={{ textTransform: 'capitalize', columnGap: '5px' }}>
            <AssignmentTurnedInOutlinedIcon />&nbsp;
            Answer
          </Button>
          |
          <Button style={{ textTransform: 'capitalize', columnGap: '5px' }} onClick={() => dispatch(isBoxVisibleAction(false))}>
            <BorderColorOutlinedIcon />&nbsp;
            Post
          </Button>
        </div>
      </div>

      {posts.map((post) => (
        <div key={post.id}
          style={{
            backgroundColor: "white",
            border: "1px solid #dee0dc",
            borderRadius: '5px',
            margin: "20px",
            padding: "20px",
            width: "550px"
          }} >
          <div >
            <div style={{
              display: "flex",
              columnGap: '1%',
              alignItems: 'center'
            }}>
              <Avatar style={{ height: "35px", width: "35px" }} />
              <span> {post.username}</span>
            </div>
            <p style={{ padding: '0px', fontWeight: 'bold' }}>{post.title}</p>
          </div>
          <div>
            <p style={{ paddingLeft: '3px' }}>
              {post.message}
            </p>
            <img src={post.images} alt="" style={{ width: "100%" }} />
          </div>
          <PostBottom upvote={post.upvotes} />

        </div>
      ))}
    </>
  );
};
