import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from "@material-ui/core";
import styled from "styled-components"
import { useDispatch } from 'react-redux';
// import { ChangeAuth } from '../Redux/Auth Reducer/action';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
// import { LoginFooter } from '../Components/LoginFooter';
import { ChangeAuth } from '../../Redux/Auth Reducer/action';
import  {api}  from '../../apiLink';

const Profile_div = styled.div`
padding:10px;
display:flex;
height:90px;
width:240px;
flex-direction:column;
&>img{
  border-radius:50%;
  height:30px;
  width:30px;
}
&>div{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  &>h2{
    margin-left:40px;
    font-weight:400;
  }
}
`
const Img = styled.img`
width:20px;
height:20px;
margin-right:10px;`

const Logout_section = styled.div`
padding-left:10px;
`

const Section_one = styled(MenuItem)`
padding:10px;
display:flex;
flex-direction:row;
justify-content:space-between;
font-size:13px;
height:25px;
&>h6{
  position:absolute;
  left:210px;
  background:lightgrey;
  padding:1px 3px;
  height:14px;
  border-radius:8px;
}
`
const Section = styled(MenuItem)`
font-size:13px;
padding-left:10px;
`

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // fetch("http://localhost:3001/current_user/1", {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     isAuth: false,
    //     userid: ""
    //   }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(() => {
    //     dispatch(ChangeAuth(false))
    //     navigate("/login")
    //   })
    let current_user = JSON.parse(localStorage.getItem("current_user"))
    fetch(`${api}/logout/${current_user.token}`, {
      method : "DELETE",
      headers : {
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.status == "success"){
        navigate("/login");
        alert(res.message);
        return;
      }
    })
  }

  const showProfile = () => {
    navigate("/profile")
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar />
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
        <MenuItem onClick={showProfile}>
          <Profile_div>
            <img src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png" alt="img" />
            <div>
              <h3>User Name</h3>
              <h2>{">"}</h2>
            </div>
          </Profile_div>
        </MenuItem>
        <hr />
        <MenuItem style={{ padding: "10px" }}>
          <Img src="https://cdn-icons-png.flaticon.com/128/134/134808.png" alt="messae_icon" />
          Messages
        </MenuItem>
        <br />
        <MenuItem style={{ padding: "10px" }}>
          <Img src="https://cdn-icons-png.flaticon.com/128/3179/3179416.png" alt="create_ad" />
          Create Ad</MenuItem>
        <br />
        <MenuItem style={{ padding: "10px" }}>
          <Img src="https://cdn-icons-png.flaticon.com/128/991/991952.png" alt="monetization" />
          Monetization</MenuItem>
        <br />
        <MenuItem style={{ padding: "10px" }}>
          <Img src="https://cdn-icons-png.flaticon.com/128/876/876222.png" alt="stats_icon" />
          Your content & stats</MenuItem>
        <br />
        <MenuItem style={{ padding: "10px" }}>
          <Img src="https://cdn-icons-png.flaticon.com/128/7220/7220132.png" alt="bookmark_icon" />
          Bookmarks</MenuItem>
        <br />
        <MenuItem style={{ padding: "10px" }}>
          <Img src="data:image/jpeg;base64,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" alt="drafts_icon" />
          Drafts</MenuItem>
        <hr />
        <Logout_section>
          <Section_one>
            <p>Dark mode</p>
            <h6>OFF</h6>
          </Section_one>
          <Section>Settings</Section>
          <br />
          <Section>Languages</Section>
          <br />
          <Section>Help</Section>
          <br />
          <Section onClick={handleLogout}>Logout</Section>
        </Logout_section>
        {/* <div>when footer section complete ho jayega then give element tag here</div> */}
      </Menu>
    </div>
  );
}