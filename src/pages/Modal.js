import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { getPhotoDetail } from "../services/Requests";

const StyledModalWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
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
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #444;
`;

const Modal = () => {
  const params = useParams();
  //console.log("결과 : ", params);

  const getPictures = async () => {
    try {
      const picture = await getPhotoDetail(params.id);
      console.log("picture", picture);
      //setRandomImg(picture);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <StyledModalWrap>
      <Link to="/">
        <StyledCloseBtn>
          <MdClose />
        </StyledCloseBtn>
      </Link>
      <StyledModalBox>
        <h3>Modal</h3>
      </StyledModalBox>
    </StyledModalWrap>
  );
};

export default Modal;
