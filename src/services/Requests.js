import axios from "./Axios";

// page : 검색할 페이지 번호 (def:1)
// per_page : 페이지당 항목 수 (def:10)
const getPhotos = async (page = 1, per_page = 10) => {
  try {
    const response = await axios.get(
      `/photos?page=${page}&per_page=${per_page}`
    );
    return response.data.map((imageInfo) => ({
      image: {
        id: imageInfo.id,
        title: imageInfo?.alternative_slugs?.ko,
        imageUrl: imageInfo?.urls,
        user: {
          userName: imageInfo.user.name,
          userLink: imageInfo.user.links.html,
          profileImage: imageInfo.user.profile_image.medium, //large, medium, small
        },
      },
    }));
  } catch (error) {
    console.error("getPhotos에러 : ", error);
    return [];
  }
};

const getSearchImg = async (page = 1, per_page = 10, searchValue) => {
  try {
    const response = await axios.get(
      `/search/photos?page=${page}&per_page=${per_page}&query=${searchValue}`
    );
    return response.data.results.map((imageInfo) => ({
      image: {
        id: imageInfo.id,
        title: imageInfo?.alternative_slugs?.ko,
        imageUrl: imageInfo?.urls,
        user: {
          userName: imageInfo.user.name,
          userLink: imageInfo.user.links.html,
          profileImage: imageInfo.user.profile_image.medium, //large, medium, small
        },
      },
    }));
  } catch (error) {
    console.error("getSearchImg에러 : ", error);
    return null;
  }
};

const getPhotoDetail = async (id) => {
  try {
    const response = await axios.get(`/photos/${id}`);

    const responseRelated = await axios.get(`/photos/${id}/related`);
    // console.log("responseRelated", responseRelated.data);

    const verticalArray = [[], []];
    responseRelated.data.results.forEach((item, index) => {
      verticalArray[index % 2].push({
        image: {
          id: item.id,
          title: item?.alternative_slugs?.ko,
          imageUrl: item?.urls,
          user: {
            userName: item.user.username,
            userLink: item.user.links.html,
            profileImage: item.user.profile_image?.large,
          },
        },
      });
    });

    return { response: response.data, responseRelated: verticalArray };
  } catch (error) {
    console.error("getPhotoDetail에러 : ", error);
    return null;
  }
};

const getPhotoDownload = async (id) => {
  try {
    const response = await axios.get(`/photos/${id}/download`);
    return response.data;
  } catch (error) {
    console.error("getPhotoDownload에러 : ", error);
    return null;
  }
};

// const getRandomImg = async () => {
//   try {
//     const response = await axios.get(`/photos/random`);
//     return response.data.urls.regular;
//   } catch (error) {
//     console.error("getRandomImg에러 : ", error);
//     return null;
//   }
// };

export {
  getPhotos,
  // getRandomImg,
  getSearchImg,
  getPhotoDetail,
  getPhotoDownload,
};
