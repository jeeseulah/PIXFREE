import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import { getPhotoDetail, getPhotoDownload } from "../services/Requests";
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { IoCamera } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";
import Picture from "../components/Picture";
import LoadingSpinner from "./LoadingSpinner";

const flexWrapStyle = css`
  display: flex;
  flex-wrap: wrap;
`;

const StyledImgDetail = styled.div`
  padding: 20px;
  .imgDetail {
    text-align: center;
    img {
      max-width: 100%;
    }
  }
`;
const StyledImgHeader = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
      border-radius: 50%;
    }
    p {
      margin: 0;
      margin-left: 1rem;
      width: 100%;
    }
  }
  button {
    margin-left: auto;
    color: white;
    background-color: #0d6efd;
    padding: 6px 12px;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
    &:hover {
      background-color: #0a58ca;
    }
  }
`;
const StyledImgInfo1 = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 576px) {
    display: inline-flex;
    flex-direction: column;
  }
  div {
    width: 20%;
    margin: 5px 0;
    text-align: center;
    p {
      vertical-align: middle;
      margin: 0;
      font-size: 1.3rem;
      color: gray;
    }
    h2 {
      margin: 0;
    }
  }
`;
const StyledImgInfo2 = styled.div`
  padding: 20px 0;
  line-height: 1.5rem;
`;
const StyledVerticalImgGroup = styled.div`
  ${flexWrapStyle}
  justify-content: center;
`;
const StyledRelatedTags = styled.div`
  ${flexWrapStyle}
  padding-bottom: 20px;
  & > span {
    padding: 5px 10px;
    margin: 5px;
    background-color: #e0e0e0;
    border-radius: 10px;
    &:hover {
      background-color: #b0b0b0;
      cursor: pointer;
    }
  }
`;

const ModalDetail = () => {
  const [imgDetail, setImgDetail] = useState([]);
  const [imgRelated, setImgRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  //console.log("결과 : ", params);

  const getPictures = async () => {
    try {
      setLoading(true);
      const picture = await getPhotoDetail(params.id);
      // console.log("picture", picture);
      setImgDetail(picture.response);
      setImgRelated(picture.responseRelated);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getImgDownload = async () => {
    const filename = imgDetail?.alternative_slugs?.ko + ".jpg";
    try {
      const url = await getPhotoDownload(params.id);
      // console.log("url", url);
      fetch(url, { method: "GET" })
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          const downURL = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = downURL;
          a.download = filename || "downloaded-file";
          document.body.appendChild(a);

          a.click();
          a.remove();

          window.URL.revokeObjectURL(url);
          //   document.body.removeChild(a);
          // setTimeout((_) => {
          //   window.URL.revokeObjectURL(url);
          // }, 60000);
          // a.remove();
        })
        .catch((err) => {
          console.error("파일 다운로드 오류: ", err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const addComma = (value) => {
    let returnString = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  useEffect(() => {
    getPictures();
  }, [params]);

  const iconsStyle = {
    verticalAlign: "middle",
    paddingRight: "8px",
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "20%",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <StyledImgDetail>
          <StyledImgHeader>
            <div
              onClick={() =>
                window.open(`${imgDetail?.user?.links?.html}`, "_blank")
              }
            >
              <img
                src={imgDetail?.user?.profile_image.medium}
                alt="유저프로필이미지"
              />
              <p>{imgDetail?.user?.name}</p>
            </div>
            <button onClick={getImgDownload}>다운로드</button>
          </StyledImgHeader>
          <div className="imgDetail">
            <img src={imgDetail?.urls?.small_s3} alt="상세이미지" />
          </div>
          <div>
            <StyledImgInfo1>
              {imgDetail?.views && (
                <div>
                  <p>view</p>
                  <h2>{addComma(imgDetail?.views)}</h2>
                </div>
              )}
              {imgDetail?.downloads && (
                <div>
                  <p>downloads</p>
                  <h2>{addComma(imgDetail?.downloads)}</h2>
                </div>
              )}
              {imgDetail?.likes && (
                <div>
                  <p>likes</p>
                  <h2>{addComma(imgDetail?.likes)}</h2>
                </div>
              )}
            </StyledImgInfo1>
            <StyledImgInfo2>
              {imgDetail?.updated_at && (
                <div>
                  <MdOutlineUpdate style={iconsStyle} />
                  {imgDetail?.updated_at}
                </div>
              )}
              {imgDetail?.location?.name && (
                <div>
                  <MdLocationOn style={iconsStyle} />
                  {imgDetail?.location?.name}
                </div>
              )}
              {imgDetail?.exif?.name && (
                <div>
                  <IoCamera style={iconsStyle} />
                  {imgDetail?.exif?.name}
                </div>
              )}
            </StyledImgInfo2>
          </div>
          {imgDetail?.tags.length > 0 && (
            <div>
              <h2>Related tags</h2>
              <StyledRelatedTags>
                {imgDetail?.tags?.map((item, index) => (
                  <span
                    key={index}
                    onClick={() =>
                      window.open(
                        `https://unsplash.com/s/photos/${item.title}`,
                        "_blank"
                      )
                    }
                  >
                    {item.title}
                  </span>
                ))}
              </StyledRelatedTags>
            </div>
          )}
          {imgRelated[0].length > 0 && (
            <div>
              <h2>Related photos</h2>
              <StyledVerticalImgGroup>
                {imgRelated?.map((verticalPicList, index) => (
                  <div key={index}>
                    {verticalPicList?.map((item, idx) => (
                      <Picture
                        key={idx}
                        imageInfo={item?.image}
                        imageSize={item?.image.imageUrl.small}
                      />
                    ))}
                  </div>
                ))}
              </StyledVerticalImgGroup>
            </div>
          )}
          {/* <div>
          <h2>Related collections</h2>
          <StyledRelatedCollections>
          {imgDetail?.related_collections?.results.map((item, index) => (
              <span key={index}>{item.title}</span>
            ))}
          </StyledRelatedCollections>
        </div> */}
        </StyledImgDetail>
      )}
    </>
  );
};

export default ModalDetail;
