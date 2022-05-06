import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const H = styled.h1`
margin:auto;
width:fit-content;
color:red;
margin-top:200px;
`
export const NoRoute = () => {
    // console.log(token)
    return (
        <>
         <H>404 Page Not Found...</H>
        </>
    )
}