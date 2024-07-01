import React, { useState, useEffect } from "react";
import { getPhotos } from "../services/Requests";
import styled from "styled-components";
import Header from "../components/Header";
import Picture from "../components/Picture";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../components/LoadingSpinner";

const StyledVerticalImgGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PictureList = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [originalImageList, setOriginalImageList] = useState([]);
  const [imageVerticalList, setImaveVerticalList] = useState([
    [],
    [],
    [],
    [],
    [],
  ]);

  const getPictures = async () => {
    try {
      setLoading(true);
      const list = await getPhotos(page); // 페이지당 12개의 이미지
      setOriginalImageList([...originalImageList, ...list]); // 기존 원래 이미지 리스트에 새로운 이미지 추가
      //console.log("origin", list);

      let verticalArray = imageVerticalList;

      // 불러온 이미지를 5열로 분리하기 위해, 2차원 배열을 위해 push사용
      // 이미지를 불러왔을 때 다음 페이지의 이미지 2개가 이전 페이지 것을 가져옴
      list.forEach((item, index) => {
        verticalArray[index % 5].push(item);
      });
      setImaveVerticalList(verticalArray);
      setLoading(false);
      //console.log(imageVerticalList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPictures();
  }, [page]); // 페이지가 변경될 때마다 새로운 이미지

  return (
    <>
      <Header />
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
            {imageVerticalList.map((imageList, index) => (
              <div key={index}>
                {imageList.map((item, idx) => (
                  <Picture
                    key={idx}
                    imageInfo={item?.image}
                    imageSize={item?.image?.imageUrl?.thumb}
                  />
                ))}
              </div>
            ))}
          </StyledVerticalImgGroup>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default PictureList;
