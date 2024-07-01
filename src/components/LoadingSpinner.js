import React from "react";
import Spinner from "../assets/Spinner1.gif";

const LoadingSpinner = () => {
  return (
    <div>
      <h3>잠시만 기다려 주세요.</h3>
      <img src={Spinner} alt="로딩중" width="10%" />
    </div>
  );
};

export default LoadingSpinner;
