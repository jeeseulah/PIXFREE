import React, { useState, useEffect } from "react";
import { getSearchImg } from "../services/Requests";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate, useSearchParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("search");

  const getPictures = async () => {
    try {
      setLoading(true);
      const list = await getSearchImg(page, searchValue); // 페이지당 12개의 이미지
      // setOriginalImageList([...originalImageList, ...list]); // 기존 원래 이미지 리스트에 새로운 이미지 추가
      console.log("origin", list);

      // let verticalArray = imageVerticalList;

      // // 불러온 이미지를 5열로 분리하기 위해, 2차원 배열을 위해 push사용
      // // 이미지를 불러왔을 때 다음 페이지의 이미지 2개가 이전 페이지 것을 가져옴
      // list.forEach((item, index) => {
      //   verticalArray[index % 5].push(item);
      // });
      // setImaveVerticalList(verticalArray);
      // setLoading(false);
      // console.log(imageVerticalList);
    } catch (error) {
      console.error(error);
    }
  };

  const searchHandler = (e) => {
    console.log("keyDown", e.target.value);
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchValue(e.target.value);
      console.log("enter를 클릭", e.target.value);
      navigate(`/?search=${e.target.value}`);
    }
  };

  useEffect(() => {
    if (query !== null) getPictures();
  }, [page, searchValue]); // 페이지가 변경될 때마다 새로운 이미지

  return (
    <>
      <StyledSearchDiv>
        <p className="open-font">
          PixFree는 저작권 문제 없이 사용할 수 있는 고품질 무료 이미지를
          제공하는 플랫폼입니다.
        </p>
        <StyledForm>
          <StyledInput
            type="text"
            placeholder="검색어를 입력해주세요"
            onKeyDown={searchHandler}
          />
          <StyledButton type="submit">
            <IoSearch />
          </StyledButton>
        </StyledForm>
      </StyledSearchDiv>
    </>
  );
};

export default SearchInput;
