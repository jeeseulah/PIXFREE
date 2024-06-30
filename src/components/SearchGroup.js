import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const StyledSearchDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  p {
    color: white;
  }
`;
const StyledForm = styled.form`
  display: flex;
  width: 50vw;
  @media (max-width: 576px) {
    width: 95vw;
  }
`;

const StyledInput = styled.input`
  border: none;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  width: 100%;
  height: 3rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  font-size: 1.1rem;
  position: relative;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 3rem;
  position: absolute;
  right: 1.2rem;
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  color: gray;
  cursor: pointer;
`;

const SearchInput = () => {
  return (
    <>
      <StyledSearchDiv>
        <p className="open-font">
          PixFree는 저작권 문제 없이 사용할 수 있는 고품질 무료 이미지를
          제공하는 플랫폼입니다.
        </p>
        <StyledForm>
          <StyledInput type="search" placeholder="검색어를 입력해주세요" />
          <StyledButton>
            <IoSearch />
          </StyledButton>
        </StyledForm>
      </StyledSearchDiv>
    </>
  );
};

export default SearchInput;
