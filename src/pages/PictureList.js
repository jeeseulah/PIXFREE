import React, { useState, useEffect } from "react";
import { getPhotos } from "../services/Requests";
import styled from "styled-components";
import Header from "../components/Header";
import Picture from "../components/Picture";
//import InfiniteScroll from "react-infinite-scroll-component";
import useIntersect from "../hooks/useIntersect";

const StyledContainer = styled.div`
  /* margin-inline: auto; */
`;
const StyledVerticalImgGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PictureList = () => {
  const [page, setPage] = useState(1);
  const [originPicLists, setOriginPicLists] = useState([]);
  const [verticalPicLists, setVerticalPicLists] = useState([
    [],
    [],
    [],
    [],
    [],
  ]);

  const ref = useIntersect(() => {
    setPage(page + 1);
  });
  const getPictures = async () => {
    try {
      const picList = await getPhotos(page, 12); // 페이지당 12개의 이미지
      //console.log("이미지리스트", picList);

      // 기존 이미지 리스트에 새로운 이미지 추가
      setOriginPicLists([...originPicLists, ...picList]);
      //console.log("originPicLists", originPicLists);

      let verticalPicArray = verticalPicLists;
      // 불러온 이미지를 5열로 분리하기 위해
      picList.forEach((item, index) => {
        let arrayIndex = index % 5;
        // 2차원 배열을 위해 push사용
        verticalPicArray[arrayIndex].push(item);
      });
      //console.log("정렬된이미지", verticalPicArray);

      setVerticalPicLists(verticalPicArray);
    } catch (error) {
      console.error(error);
    }
  };

  //console.log("정렬 후 이미지", verticalPicLists);

  useEffect(() => {
    getPictures();
  }, [page]); // 페이지가 변경될 때마다 새로운 이미지

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledVerticalImgGroup>
          {verticalPicLists.map((verticalPicList, index) => (
            <div key={index}>
              {verticalPicList.map((item, idx) => (
                <Picture key={idx} imageInfo={item.image} />
              ))}
            </div>
          ))}
        </StyledVerticalImgGroup>
        <div ref={ref}></div>
        {/* <InfiniteScroll
          dataLength={originPicLists.length} //반복되는 컴포넌트의 개수
          next={() => setPage(page + 1)} //스크롤이 화면 맨 아래에 닿았을 때 부르는 함수
          hasMore={true} //추가 데이터가 있는지 여부
          loader={<h4>Loading...</h4>} //로딩바
          // endMessage={
          //   <p style={{ textAlign: "center" }}>
          //     <b>Yay! You have seen it all</b>
          //   </p>
          // }
        >
          {verticalPicLists.map((verticalPicList, index) => (
            <VerticalImg key={index}>
              {verticalPicList.map((item, idx) => (
                <Picture key={idx} imageURL={item.image.imageUrl} />
              ))}
            </VerticalImg>
          ))}
        </InfiniteScroll> */}
      </StyledContainer>
    </>
  );
};

export default PictureList;
