import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import ModalDetail from "../components/ModalDetail";

const StyledModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
`;
const StyledCloseBtn = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  color: rgba(255, 255, 255, 0.7);
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledModalBox = styled.div`
  width: 80%;
  height: 90%;
  overflow: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #444;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(#adffd8, #94b9ff);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e9e9e9;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
const ModalBox = () => {
  return (
    <StyledModalWrap>
      <Link to="/">
        <StyledCloseBtn>
          <MdClose style={{ fontSize: "28px" }} />
        </StyledCloseBtn>
      </Link>
      <StyledModalBox>
        <ModalDetail />
      </StyledModalBox>
    </StyledModalWrap>
  );
};

export default ModalBox;
