import { Avatar, Button } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
// import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
// import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
// import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
// import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import React, { useEffect } from "react";
// import { PostTop } from "./Postpage/PostTop";
import { PostBottom } from "./Postpage/PostBottom";
// import { PostMiddle } from "./Postpage/PostMiddle";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/PostReducer/action";
import { isBoxVisibleAction } from "../Redux/ShowAddQuestion Reducer/action";
import { api } from "../apiLink";

export const Component1 = () => {

  const { posts } = useSelector((state) => state.postReducer);
  // console.log("post", posts);
  const dispatch = useDispatch();
  const getPosts = () => {
    fetch(`${api}/post`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("resPost:", res);
        dispatch(getPost(res));
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const PostList = styled.div`
  background: white;
  border: 1px solid #dee0dc;
  border-radius: 5px;
  margin: 20px;
  padding: 20px 0px;
  width: 550px;
  &:hover{
    background: rgba(255, 255, 255, 0.6);
  }
  `;

  const PostHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

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
            textAlign: 'left', width: '90%', border: "1px solid #dee0dc", borderRadius: '70px', backgroundColor: '#F7F7F8', justifyContent: 'start', color: '#A6A8AA', fontSize: '11px', padding: '0px 10px'
          }} href="#text-buttons" size="large" onClick={() => dispatch(isBoxVisibleAction(false))}>
            What do you want to ask or share?
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}>
          <Button style={{ textTransform: 'capitalize', columnGap: '15px', fontSize: '12px', fontWeight: 'bold', color: '#717274' }} onClick={() => dispatch(isBoxVisibleAction(false))}>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd"><g transform="translate(9 7)"><path d="M3 6v-.5A2.5 2.5 0 1 0 .5 3" stroke-linecap="round" stroke-linejoin="round"></path><circle class="icon_svg-fill_as_stroke" fill="#666" cx="3" cy="8.5" r="1" stroke="none"></circle></g><path d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" stroke-linejoin="round"></path></g></svg>&nbsp;
            Ask
          </Button>
          <div style={{ color: '#DEE0E1' }}> | </div>
          <Button style={{ textTransform: 'capitalize', columnGap: '5px', fontSize: '12px', fontWeight: 'bold', color: '#717274' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>&nbsp;
            Answer
          </Button>
          <div style={{ color: '#DEE0E1' }}> | </div>
          <Button style={{ textTransform: 'capitalize', columnGap: '5px', fontSize: '12px', fontWeight: 'bold', color: '#717274' }} onClick={() => dispatch(isBoxVisibleAction(false))}>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>&nbsp;
            Post
          </Button>
        </div>
      </div>

      {posts.map((post) => (
        <PostList key={post.id} >
          <div style={{ padding: '0px 20px', }}>
            <PostHead>
              <div style={{
                display: "flex",
                columnGap: '1%',
                alignItems: 'center'
              }}>
                <Avatar style={{ height: "35px", width: "35px" }} />
                <span style={{ marginLeft: '5px' }}> {post.userId.username}</span>
              </div>

              <CloseIcon style={{ alignItems: 'flex-end', width: '20px', alignContent: 'flex-end' }} />
            </PostHead>
            <p style={{ fontWeight: 'bold' }}>{post.title}</p>
          </div>
          <div >
            <p style={{ padding: '3px 23px' }}>
              {post.descriptions.content}
            </p>
            <img src={post.descriptions.image} alt="" style={{ width: "100%" }} />
          </div>
          <PostBottom upvote={post.upvotes} />
        </PostList>
      ))}
    </>
  );
};
