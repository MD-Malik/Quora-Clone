import React, { useState } from "react";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import LoopSharpIcon from "@material-ui/icons/LoopSharp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ScreenShareOutlinedIcon from "@material-ui/icons/ScreenShareOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import { brown } from "@material-ui/core/colors";

export const PostBottom = ({ upvote }) => {
  const [vote, setVote] = useState(1);
  const [value, setValue] = useState(false);
  const [box, setBox] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "25px",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <div style={{ color: '#929294' }}>
            <Button onClick={() => (upvote = upvote + vote)}>
              <ArrowUpwardOutlinedIcon />
              {upvote}
            </Button>
            |
            <Button>
              <ArrowDownwardOutlinedIcon />
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <div>
            <Button>
              <LoopSharpIcon />
            </Button>
          </div>
          <div>
            <Button>
              <ChatBubbleOutlineOutlinedIcon />
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <div>
            <Button>
              <ScreenShareOutlinedIcon />
            </Button>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </Button>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>




      {/* <div hidden={box}>
         <h1>Comment</h1>
      </div> */}
    </>
  );
};
