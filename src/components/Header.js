import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomImg } from "../services/Requests";
import Logo from "./Logo";
import SearchGroup from "./SearchGroup";
import HeaderBg from "../assets/header_bg.jpg";

const StyledHeaderDiv = styled.div`
  background-size: cover;
  background-position: center center;
  height: 60vh;
  min-height: 440px;
  margin-bottom: 10px;
  position: relative;
`;

const Header = () => {
  // const [randomImg, setRandomImg] = useState("");
  // const getPictures = async () => {
  //   try {
  //     const picture = await getRandomImg();
  //     setRandomImg(picture);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getPictures();
  // }, []);
  return (
    <StyledHeaderDiv
      style={{
        // backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${randomImg})`,
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${HeaderBg})`,
      }}
    >
      <Logo />
      <SearchGroup />
    </StyledHeaderDiv>
  );
};

export default Header;
