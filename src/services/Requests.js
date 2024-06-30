import axios from "./Axios";

// page : 검색할 페이지 번호 (def:1)
// per_page : 페이지당 항목 수 (def:10)
const getPhotos = async (page = 1, per_page = 10) => {
  try {
    const response = await axios.get(
      `/photos?page=${page}&per_page=${per_page}`
    );
    const imageItems = response.data;
    //console.log(imageItems);
    return imageItems?.map((imageInfo) => ({
      image: {
        id: imageInfo.id,
        title: imageInfo.alternative_slugs.ko,
        imageUrl: imageInfo.urls,
        user: {
          userName: imageInfo.user.name,
          userLink: imageInfo.user.links.html,
          profileImage: imageInfo.user.profile_image?.medium, //large, medium, small
        },
      },
    }));
  } catch (error) {
    console.error("getPhotos에러 : ", error);
    return [];
  }
};

const getRandomImg = async () => {
  try {
    const response = await axios.get(`/photos/random`);
    const imageItem = response.data;
    return imageItem.urls.regular;
  } catch (error) {
    console.error("getRandomImg에러 : ", error);
    return [];
  }
};
const getPhotoDetail = async (id) => {
  try {
    const response = await axios.get(`/photos/${id}`);
    const imageItem = response.data;
    return imageItem;
  } catch (error) {
    console.error("getPhotoDetail에러 : ", error);
    return [];
  }
};

const getSearchImg = async () => {
  try {
    const response = await axios.get(`/search/photos`);
    const imageItem = response.data;
    return imageItem;
  } catch (error) {
    console.error("getSearchImg에러 : ", error);
    return [];
  }
};

export { getPhotos, getRandomImg, getSearchImg, getPhotoDetail };
