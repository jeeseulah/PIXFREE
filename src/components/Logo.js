import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  position: absolute;
  width: 11rem;
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src="../logo.png" alt="로고" />
    </Link>
  );
};

export default Logo;
