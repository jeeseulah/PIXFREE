import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledImgCard = styled.div`
  margin: 10px;
  display: block;
  position: relative;
  &:hover .imageInfo {
    filter: brightness(0.5);
    transition: 0.5s;
    cursor: zoom-in;
  }
  &:hover .userInfo {
    opacity: 1;
    transition: 0.5s;
  }
`;
const StyledUserInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  img {
    margin-left: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.7rem;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
    &:hover {
      opacity: 0.7;
    }
  }
  p {
    margin: 0;
    margin-bottom: 1rem;
    margin-right: 1rem;
    color: #cccccc;
    width: 100%;
    &:hover {
      color: white;
    }
  }
`;
//full, raw, regular, small, thumb
const Picture = ({ imageInfo, imageSize }) => {
  const location = useLocation();
  return (
    <StyledImgCard>
      <Link
        key={imageInfo?.id}
        to={`/photos/${imageInfo?.id}`}
        state={{ backgroundLocation: location }} //state props으로 location객체 전달
      >
        <img
          className="imageInfo"
          src={imageSize}
          alt="이미지"
          title={imageInfo?.title}
        />
      </Link>
      <StyledUserInfo
        className="userInfo"
        onClick={() => window.open(`${imageInfo?.user?.userLink}`, "_blank")}
      >
        <img src={imageInfo?.user?.profileImage} alt="프로필 이미지" />
        <p>{imageInfo?.user?.userName}</p>
      </StyledUserInfo>
    </StyledImgCard>
  );
};

export default Picture;
