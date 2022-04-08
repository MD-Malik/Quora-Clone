import React from "react";
import { Link } from "react-router-dom";
import RssFeedOutlinedIcon from "@material-ui/icons/RssFeedOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

export const Questions = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid black",
        margin: "20px",
        padding: "20px",
        width: "500px",
      }}
    >
      <div>
        <Link to="/">
          <h3>
            What are some successful people after doing a BCA and an MCA. ?
          </h3>
        </Link>
        <p>No answer yet</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button>
            <AssignmentTurnedInOutlinedIcon />
            Answer
          </Button>
        </div>
        <div>
          <Button>
            <RssFeedOutlinedIcon />
            Follow
          </Button>
        </div>
        <div style={{ justifyContent: "end" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-around",
              alignContent: "flex-end",
            }}
          >
            <Button>
              <ArrowDownwardOutlinedIcon />
            </Button>
            <Button>
              <ScreenShareIcon />
            </Button>
            <Button>
              <MoreHorizIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
