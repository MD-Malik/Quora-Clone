import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import {v4 as uuid } from "uuid";

const User_name_p = styled.p`
&:hover{
  cursor:pointer;
  text-decoration:underline;
}
`
const Span = styled.span`
padding:5px 8px;
&:hover{
  background:lightgrey;
  border-radius:100px;
  cursor:pointer;
}
`
export default function FormDialog() {
  
  const [open, setOpen] = React.useState(false);
  const { user_details } = useSelector((state)=>state.currentUserReducer)
  const [ques_statement, setQues_statement]=React.useState("")
  const [answer_Statement, setAnswer_Statement]= React.useState("")

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
    setQues_statement(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].innerText)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(ques_statement, answer_Statement )
    fetch("http://localhost:3001/post", {
      method:"POST",
      body:JSON.stringify({
        postid:uuid(),
        message:answer_Statement,
        title:ques_statement,
        username:user_details.username,
        userimage:user_details.userimage,
        upvotes:0,
      }),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(handleClose)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
      Answer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle onClick={handleClose} style={{width:"500px"}}><Span>X</Span></DialogTitle>
        <DialogContent>
          <DialogContentText style={{display:"flex", flexDirection:"row"}}>
            <img src={user_details.userimage} alt="img" style={{height:"45px", borderRadius:"50%"}} />
            <User_name_p style={{marginLeft:"10px", fontWeight:"bold"}}>{user_details.username}</User_name_p>
          </DialogContentText>
          <h2>{ques_statement}</h2>
          <TextField
            autoFocus
            margin="dense"
            id="answer"
            label="Write your answer"
            type="text"
            fullWidth
            variant="standard"
            value={answer_Statement}
            onChange={(e)=>setAnswer_Statement(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}