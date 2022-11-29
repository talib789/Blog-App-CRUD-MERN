import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
        <span style={{display:"flex",justifyContent:"center", alignItems:"center", width:"100%", height:"100%", color:"white"}}>
            &copy;{new Date().getFullYear()} All Rights Reserved. <b>AshTech</b>
        </span>
    </FooterContainer>
  )
}

export default Footer

// Footer Container

const FooterContainer=styled.footer`
    background: var(--dark-green);
    height: 4rem;
    width:100%;
    &:hover{
        background:var(--light-green);
    }
`