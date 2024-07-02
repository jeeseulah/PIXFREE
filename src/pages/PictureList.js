import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoSearch } from "react-icons/io5";

import { getPhotos, getSearchImg } from "../services/Requests";
import LogoImg from "../assets/logo.png";
import HeaderBg from "../assets/header_bg.jpg";
import Picture from "../components/Picture";
import LoadingSpinner from "../components/LoadingSpinner";

const StyledLogoImg = styled.img`
  position: absolute;
  width: 11rem;
`;

const StyledHeaderDiv = styled.div`
  background-size: cover;
  background-position: center center;
  height: 60vh;
  min-height: 440px;
  margin-bottom: 10px;
  position: relative;
`;

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

const StyledVerticalImgGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PER_PAGE_SIZE = 10; // 페이지당 10개의 이미지

const PictureList = () => {
  const isDesktop = useMediaQuery({ query: "(min-width:1260px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:840px) and (max-width:1260px)",
  });
  // const initArray = [[], [], []];
  // const responsiveDivValue = 3;

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [originalImageList, setOriginalImageList] = useState([]);
  const [imageVerticalList3, setImageVerticalList3] = useState([[], [], []]);
  const [imageVerticalList2, setImageVerticalList2] = useState([[], []]);
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get("search");
  const [searchQuery, setSearchQuery] = useState("");

  // 메인화면 이미지
  const getPictures = async (onInit) => {
    try {
      setLoading(true);
      const list = await getPhotos(page, PER_PAGE_SIZE);
      VerticalImg(list, onInit);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getSearchPictures = async (onInit) => {
    try {
      setLoading(true);
      const list = await getSearchImg(page, PER_PAGE_SIZE, searchQuery);
      //console.log(list);
      VerticalImg(list, onInit);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const VerticalImg = (list, onInit) => {
    setOriginalImageList([...originalImageList, ...list]); // 기존 원래 이미지 리스트에 새로운 이미지 추가
    // console.log(originalImageList);

    let verticalArray3 = onInit ? [[], [], []] : [...imageVerticalList3];
    let verticalArray2 = onInit ? [[], []] : [...imageVerticalList2];

    // 불러온 이미지를 3열로 분리하기 위해, 2차원 배열을 위해 push사용
    // 이미지를 불러왔을 때 다음 페이지의 이미지 2개가 이전 페이지 것을 가져옴
    list.forEach((item, index) => {
      verticalArray3[index % 3].push(item);
      verticalArray2[index % 2].push(item);
    });
    setImageVerticalList3(verticalArray3);
    setImageVerticalList2(verticalArray2);
  };

  const logoHandler = () => {
    resetState();
    setSearchQuery("");
    getPictures(true);
  };
  const searchFormHandler = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchQuery}`);
    resetState();
    getSearchPictures(true);
  };
  const searchInputChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  const searchKeyHandler = (e) => {
    // console.log("keyDown", e.target.value);
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/?search=${searchQuery}`);
      resetState();
      getSearchPictures(true);
      // console.log("enter를 클릭", e.target.value);
    }
  };
  const resetState = () => {
    setImageVerticalList3([[], [], []]);
    setOriginalImageList([]);
    setPage(1);
  };

  useEffect(() => {
    query?.length > 0 ? getSearchPictures(false) : getPictures(false);
  }, [page]); // 페이지가 변경될 때마다 새로운 이미지

  return (
    <>
      <StyledHeaderDiv
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${HeaderBg})`,
        }}
      >
        <Link to="/">
          <StyledLogoImg src={LogoImg} alt="로고" onClick={logoHandler} />
        </Link>
        <StyledSearchDiv>
          <p className="open-font">
            PixFree는 저작권 문제 없이 사용할 수 있는 고품질 무료 이미지를
            제공하는 플랫폼입니다.
          </p>
          <StyledForm onSubmit={searchFormHandler}>
            <StyledInput
              type="text"
              placeholder="검색어를 입력해주세요"
              value={searchQuery}
              onKeyDown={searchKeyHandler}
              onChange={searchInputChangeHandler}
            />
            <StyledButton type="submit">
              <IoSearch />
            </StyledButton>
          </StyledForm>
        </StyledSearchDiv>
      </StyledHeaderDiv>
      <div>
        <InfiniteScroll
          dataLength={originalImageList.length} //반복되는 컴포넌트의 개수
          next={() => setPage(page + 1)} //스크롤이 화면 맨 아래에 닿았을 때 부르는 함수
          hasMore={true} //추가 데이터가 있는지 여부
          loader={
            loading && (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20%",
                }}
              >
                <LoadingSpinner />
              </div>
            )
          } //로딩바
        >
          <StyledVerticalImgGroup>
            {isDesktop
              ? imageVerticalList3.map((imageList, index) => (
                  <div key={index}>
                    {imageList.map((item, idx) => (
                      <Picture
                        key={idx}
                        imageInfo={item?.image}
                        imageSize={item?.image?.imageUrl?.small}
                      />
                    ))}
                  </div>
                ))
              : isTablet
              ? imageVerticalList2.map((imageList, index) => (
                  <div key={index}>
                    {imageList.map((item, idx) => (
                      <Picture
                        key={idx}
                        imageInfo={item?.image}
                        imageSize={item?.image?.imageUrl?.small}
                      />
                    ))}
                  </div>
                ))
              : originalImageList.map((item, idx) => (
                  <Picture
                    key={idx}
                    imageInfo={item?.image}
                    imageSize={item?.image?.imageUrl?.small}
                  />
                ))}
          </StyledVerticalImgGroup>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default PictureList;
