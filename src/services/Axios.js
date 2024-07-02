import axios from "axios";

/*axios의 인스턴스를 생성 -> API변수에 담고 API반환 */
/*반복되는 코드를 인스턴스화함으로써 코드의 가독성과 재사용성을 높임 */
const Axios = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 50000,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`, //.env파일에 access token설정 후 불러옴
  },
});

// //응답 인터셉터 (중간에서 request나 response를 가로채는 기능)
// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     console.error(error);
//     if (error.message.includes("timeout") || error?.response?.status === 504) {
//       window.alert("시간이 초과되었습니다.");
//     }
//     return Promise.reject(error); //오류 발생 시 해당 오류 객체로 Promise거부
//   }
// );

export default Axios;
