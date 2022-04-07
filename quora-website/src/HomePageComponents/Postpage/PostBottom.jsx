import React from 'react';
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import LoopSharpIcon from '@material-ui/icons/LoopSharp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";

export const PostBottom = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
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
<Button
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
>
    <MoreHorizIcon />
</Button>
<Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
    </div> 
  </div>
  )
}
