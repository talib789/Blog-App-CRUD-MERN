import React from 'react'
import styled from 'styled-components';
import "./Header.css";

const Header = () => {
  return (
    <div className='yay'>
      <h1>Welcome to MERN Stack blog!</h1>
    </div>
  )
}

export default Header

// Main Container
const MainContainer=styled.header`
    background: url(../../images/header-bg.jpg) no-repeat center/cover;
    height: 25rem;
    color:white;
`;