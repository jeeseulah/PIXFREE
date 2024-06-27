import { useEffect, useState } from "react";
import "./App.scss";
import { getPhotos } from "./api/Requests";
import PictureList from "./components/PictureList";

function App() {
  const [randomImg, setRandomImg] = useState();
  // const getData = async () => {
  //   let response = await axios.get(requests.requestsRandom);
  //   //return response.data;
  //   console.log(response);
  //   //setRandomImg(response);
  // };

  const requests = {
    requestsRandom: `/photos/random`,
    requestsPhotos: `/photos`,
  };

  useEffect(() => {
    //getPhotos(requests.requestsPhotos);
    setRandomImg(getPhotos(requests.requestsPhotos));
  }, []);

  return (
    <>
      <PictureList />
    </>
  );
}

export default App;
