import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";

const StyledLogoImg = styled.img`
  position: absolute;
  width: 11rem;
`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledLogoImg src={LogoImg} alt="로고" />
    </Link>
  );
};

export default Logo;
