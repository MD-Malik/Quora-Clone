import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RssFeedOutlinedIcon from "@material-ui/icons/RssFeedOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ScreenShareIcon from "@material-ui/icons//ScreenShare";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import styled from "styled-components"
import { CreatePost } from "../Components/AddQuestion/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { isBoxVisibleAction } from "../Redux/ShowAddQuestion Reducer/action";
import { isBoxVisibleReducer } from "../Redux/ShowAddQuestion Reducer/reducer";
import FormDialog from "../Components/Answer/Giveanswer";

const Ques_Link = styled(Link)`
text-decoration:none;
color:black;
:hover{
  text-decoration:underline;
}
`
const Outer_div = styled.div`
margin-top:30px;
filter:blur(${props=>props.props==="true"?"0px":"10px"})
; 
`
export const Questions = () => {

  const [questionList, setQuestionList] = useState([])
  const navigate = useNavigate()
  const { isBoxVisible } = useSelector((state)=>state.isBoxVisibleReducer)
  const dispatch = useDispatch(isBoxVisibleReducer)
  // console.log(isBoxVisible)

  useEffect(()=>{
    fetch("http://localhost:3001/questions")
    .then((res)=>res.json())
    .then((res)=>setQuestionList(res))
  },[])

  return (
    <>
    <Outer_div props={isBoxVisible===true?"true":"false"}>
      {questionList.map((item)=>(      
    <div key={item.id}
      style={{
        backgroundColor: "white",
        border: "1px solid lightgrey",
        margin: "0px",
        padding: "5px 20px",
        width:"550px",
        borderRadius:"5px"
      }}
    >
      <div>
        <Ques_Link to="/">
          <h3>
            {item.question}
          </h3>
        </Ques_Link>
        <p>No answer yet</p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <Button>
              <AssignmentTurnedInOutlinedIcon/>
              <FormDialog />
            </Button>
          </div>
          <div>
            <Button>
              <RssFeedOutlinedIcon />
              Follow
            </Button>
          </div>
        <div style={{justifyContent: "end", float:"right", marginLeft:"200px"}}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-around",
              alignContent: "flex-end",
            }}>
            <ArrowDownwardOutlinedIcon />
            <ScreenShareIcon />
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      </div>
    </div>
    ))}
    </Outer_div>
    <CreatePost />
    </>
  );
};
