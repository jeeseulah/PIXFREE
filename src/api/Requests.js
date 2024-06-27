import axios from "./Axios";

// const requests = {
//   requestsRandom: `/photos/random`,
//   requestsPhotos: `/photos`,
// };

const getPhotos = async (request) => {
  try {
    const response = await axios.get(request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("getRandomImg에러 : ", error);
  }
};

export { getPhotos };
