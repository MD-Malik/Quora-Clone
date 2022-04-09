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
          border: "1px solid black",
          margin: "20px",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <Avatar />
          <Button href="#text-buttons" size="large">
            What do you want to ask or share?
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>
            <LiveHelpOutlinedIcon />
            Ask
          </Button>
          |
          <Button>
            <AssignmentTurnedInOutlinedIcon />
            Answer
          </Button>
          |
          <Button>
            <BorderColorOutlinedIcon />
            Post
          </Button>
        </div>
      </div>

      {posts.map((post) => (
        <div key={post.id}
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            margin: "20px",
            padding: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            <Avatar />
            <div>
              <h6 style={{ paddingLeft: '5px' }}>Answered by {post.username}</h6>
              <p style={{ padding: '0px', fontWeight: 'bold' }}>{post.title}</p>
            </div>
          </div>
          <div>
            <p style={{ paddingLeft: '3px' }}>
              {post.message}
            </p>
            <img src={post.images} alt="" style={{ width: "600px" }} />
          </div>
          <PostBottom upvote={post.upvotes} />
        </div>
      ))}

    </>
  );
};
