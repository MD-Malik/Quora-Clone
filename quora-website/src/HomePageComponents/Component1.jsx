import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import React, { useEffect } from "react";
import { PostTop } from "./Postpage/PostTop";
import { PostBottom } from "./Postpage/PostBottom";
import { PostMiddle } from "./Postpage/PostMiddle";

export const Component1 = () => {
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
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          margin: "20px",
          padding: "20px",
        }}
      >
        <PostTop />
        <PostMiddle />
        <PostBottom />
      </div>
    </>
  );
};
