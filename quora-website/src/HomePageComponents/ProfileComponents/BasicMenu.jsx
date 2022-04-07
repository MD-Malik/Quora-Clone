import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from "@material-ui/core";
import styled from "styled-components"
import { useDispatch } from 'react-redux';
// import { ChangeAuth } from '../Redux/Auth Reducer/action';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
// import { LoginFooter } from '../Components/LoginFooter';
import { ChangeAuth } from '../../Redux/Auth Reducer/action';

const Profile_div = styled.div`
padding:10px;
display:flex;
height:90px;
width:240px;
flex-direction:column;
&>img{
  border-radius:50%;
  height:40px;
  width:40px;
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
    fetch("http://localhost:3001/current_user/1",{
      method:"PATCH",
      body:JSON.stringify({
        isAuth:false,
        userid:""
      }),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(()=>{dispatch(ChangeAuth(false))
    navigate("/login")})
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
        <MenuItem onClick={handleClose}>
          <Profile_div>
            <img src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png" alt="img" />
            <div>
              <h3>User Name</h3>
              <h2>{">"}</h2>
            </div>
          </Profile_div>
        </MenuItem>
        <hr/>
        <MenuItem style={{padding:"10px"}}>
        <Img src="https://cdn-icons-png.flaticon.com/128/134/134808.png" alt="messae_icon" />
         Messages
        </MenuItem>
        <br />
        <MenuItem style={{padding:"10px"}}>
         <Img src="https://cdn-icons-png.flaticon.com/128/3179/3179416.png" alt="create_ad" />
        Create Ad</MenuItem>
        <br />
        <MenuItem style={{padding:"10px"}}>
         <Img src="https://cdn-icons-png.flaticon.com/128/991/991952.png" alt="monetization" />
        Monetization</MenuItem>
        <br />
        <MenuItem style={{padding:"10px"}}>
        <Img src="https://cdn-icons-png.flaticon.com/128/876/876222.png" alt="stats_icon" />
        Your content & stats</MenuItem>
        <br />
        <MenuItem style={{padding:"10px"}}>
        <Img src="https://cdn-icons-png.flaticon.com/128/7220/7220132.png" alt="bookmark_icon" />
        Bookmarks</MenuItem>
        <br />
        <MenuItem style={{padding:"10px"}}>
        <Img src="https://cdn-icons.flaticon.com/png/128/4173/premium/4173370.png?token=exp=1649242457~hmac=f49e8a86b0a1d6b07f566939def90611" alt="drafts_icon" />
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