import { Avatar, Button } from "@material-ui/core";
import React from "react";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import LoopSharpIcon from '@material-ui/icons/LoopSharp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const Component1 = () => {

  return (
    <div>
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
            {" "}
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
        <div style={{ display: "flex" }}>
          <Avatar />
          <div>
            <h3>Ashish Kumar</h3>
            <span>
              Masters in Economics, IIT KGP and Co Founder at Skillslash Academy.
            </span>
          </div>
        </div>
        <div>
          <h4>
            What is the best way to learn full stack AI and ML with project
          </h4>
          <span>
            I am an IIT KGP grad. I have worked in multiple companies as a data
            scientist.
          </span>
        </div>
        <div style={{ display: "flex", gap:"25px", fontSize:"25px", alignItems:"center" }}>
          <div>
            <ArrowUpwardOutlinedIcon />
            <ArrowDownwardOutlinedIcon />
          </div>
          <div>
             <LoopSharpIcon />
             <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div>
             <ScreenShareOutlinedIcon />
             <MoreHorizIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
