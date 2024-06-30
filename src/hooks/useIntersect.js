import { useEffect, useRef } from "react";

const useIntersect = (callback) => {
  const options = {
    root: null, //기본값 null (브라우저 viewport)
    rootMargin: "10px", //root요소의 margin값 '10px 10px 10px 10px'
    threshold: 0.5, // 0.0 ~ 1.0 사이의 숫자들을 배열로 받음. %로 치환되어, 패당 비율만큼 교차된 경우 콜백 실행 [0, 0.5, 1]
  };

  const ref = useRef(null);

  // options에 따라 인스턴스 생성
  useEffect(() => {
    const intersectionobserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // 관찰 대상이 viewport안에 들어온 경우
          if (entry.isIntersecting) {
            console.log("실행");
            observer.unobserve(entry.target);
            callback();
          }
        });
      },
      options
    );
    // observe로 타겟 요소 관찰 시작
    intersectionobserver.observe(ref.current);
    return () => {
      intersectionobserver.disconnect();
      //intersectionobserver.unobserve(ref.current);
    };
  }, [callback, ref]);
  return ref;

  // 타겟 요소 관찰 시작
  //const target = document.querySelector("#listItem");
  //interObserver.observe(target);

  //interObserver.unobserve(target); 타겟 요소에 대한 관찰 중지
  //interObserver.disconnect(); 인스턴스의 타겟 요소들에 대한 모든 관찰을 중지
};

export default useIntersect;
