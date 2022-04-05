import React from "react";
import styled from "styled-components";

const Footer_div = styled.div`
display:flex;
flex-direction:row;
background:#dee0e1;
padding:6px;
padding-left:80px;

&>p{
    text-decoration:none;
    color:#636466;
    font-size:13px;
    cursor:pointer;
    margin:10px 2px;
    &:hover{
        text-decoration:underline;
    }
}
`

export const LoginFooter = () => {
    return (
        <>
         <Footer_div>
                     <p>About.</p>
                     <p>Careers.</p>
                     <p>Privacy.</p>
                     <p>Terms.</p>
                     <p>Contact.</p>
                     <p>Language.</p>
                     <p>Your Ad Choices.</p>
                     <p>Press.</p>
                     <p>© Quora, Inc. 2022</p>
         </Footer_div>
        </>
    )
}