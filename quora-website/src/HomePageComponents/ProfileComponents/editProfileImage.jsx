import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import styled from "styled-components"

const Div = styled.div`
position:absolute;
left:320px;
top:140px;
&:hover{
    display:none;
}
`

export default function UploadButtons() {
  return (
      <Div>
        <input accept="image/*" id="icon-button-file" type="file" style={{display:"none"}}/>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera/>
        </IconButton>
    </Div>
  );
}