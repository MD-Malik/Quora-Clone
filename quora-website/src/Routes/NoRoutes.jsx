import React from "react";
import styled from "styled-components";

const H = styled.h1`
margin:auto;
width:fit-content;
color:red;
margin-top:200px;
`
export const NoRoute = () => {
    return (
        <>
         <H>404 Page Not Found...</H>
        </>
    )
}