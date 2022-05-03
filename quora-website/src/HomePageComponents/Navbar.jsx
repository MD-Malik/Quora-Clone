import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "../CSS/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import BasicMenu from "./ProfileComponents/BasicMenu";
import { useDispatch, useSelector } from "react-redux";
import { isBoxVisibleReducer } from "../Redux/ShowAddQuestion Reducer/reducer";
import { isBoxVisibleAction } from "../Redux/ShowAddQuestion Reducer/action";

export const Navbar = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch(isBoxVisibleReducer);
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src="https://www.vectorlogo.zone/logos/quora/quora-ar21.svg" alt="pic" />
      </div>
      <div className="navbar-icons">
        <div className="icon">
          <Tooltip title="Home">
            <Link to="/">
              <HomeIcon />
            </Link>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="Following">
            <Link to="/">
              <FeaturedPlayListOutlinedIcon />
            </Link>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="Answer">
            <Link to="/answer">
              <AssignmentTurnedInOutlinedIcon />
            </Link>

          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="Spaces">
            <Link to="/">
              <PeopleAltOutlinedIcon />
            </Link>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="Notification">
            <Link to="/">
              <NotificationsOutlinedIcon />
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="navbar-search">
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>
      <div className="navbar-right">
        <div>
          <input type="text" placeholder="Try Quora +" />
        </div>
        <div className="navbar-avtar">
          {/* <Avatar /> */}
          <BasicMenu />
        </div>
        <LanguageIcon />
        <Button onClick={() => dispatch(isBoxVisibleAction(false))}>Add Question</Button>
      </div>
    </div>
  );
};
