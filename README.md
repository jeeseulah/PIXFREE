<div align='center'>
  <h1><b>📷PIXFREE</b></h1>
</div>

> 🗝️ **PIXFREE 배포 링크**

👉 [PIXFREE 시작하기](https://pixfree-jee.netlify.app)

> 🗝️ **PIXFREE 접속 QR**

![1pUCh](https://github.com/jeeseulah/PIXFREE/assets/165135312/b480d875-34d6-47e8-9a41-1ac40a590eea)

<br/>

## 0. 📅 서비스 소개

![logo](https://github.com/jeeseulah/PIXFREE/assets/165135312/affb2f41-593d-4cf5-a3a5-f9399d827fcf)
<br/>

<h3>무료로 고화질 이미지를 제공하는 온라인 플랫폼 "PixFree"</h3>

"PixFree"는 Unsplash 사이트를 모방한 프로젝트입니다. <br />
**이미지**를 뜻하는 "Picture"과 **무료**를 뜻하는 "free"를 합쳐 만들어진 이름입니다. <br />
뛰어난 화질의 이미지를 무료로 제공하고, 사용자들은 다양한 주제와 스타일의 고품질 이미지를 검색하고 다운로드 할 수 있습니다.

<br/>

## 0-1. 📅 개인프로젝트 진행 기간

2024.06.25 ~ 2024.07.02 (7일) <br/><br/>

## 0-2. ⚙️ 개발 환경 및 기술 스택

<h3>Frontend</h3>
<p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Styled%20Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>&nbsp 
</p>
<h3>Development Tools</h3>
<p>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>&nbsp 
</p>
<h3>Version Control</h3>
<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/>
</p>
<br/>

## 0-3. ✴️사용한 외부 API

Unsplash 개발자 [Unsplash API](https://unsplash.com/developers)의 Open API 활용

<br/>

## 0-4. 📂프로젝트 폴더 구조

```
📷 PIXFREE
│  App.js
│  App.test.js
│  index.js
│  index.scss       ──────────────────────── scss 파일
│  reportWebVitals.js
│  setupTests.js
│
├─📂assets
│      header_bg.jpg    ──────────────────── main header backgound image
│      logo.png     ──────────────────────── logo image
│      Spinner1.gif     ──────────────────── spinner gif파일
│
├─📂components
│      LoadingSpinner.js    ──────────────── spinner 적용
│      ModalDetail.js   ──────────────────── 사진 Detail 페이지
│      Picture.js   ──────────────────────── 단일 사진에 대한 파일
│
├─📂pages
│      ModalBox.js  ──────────────────────── Detail페이지 modal창으로 구현
│      PictureList.js   ──────────────────── main 페이지, 검색 페이지
│
└─📂services
        Axios.js    ──────────────────────── axios 인스턴스 파일
        Requests.js ──────────────────────── api 요청
```

<br/>

## 1. 🤗 주요 기능 소개

### 1) 반응형 웹 페이지

| 메인 페이지                                                                                            | 이미지 상세 페이지                                                                                     |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![반응형1](https://github.com/jeeseulah/PIXFREE/assets/165135312/5342bbf8-d07f-4900-bd75-3c6d52c60179) | ![반응형2](https://github.com/jeeseulah/PIXFREE/assets/165135312/ebbf9aef-0aeb-4d31-b56b-a87d8cd65a69) |

- PIXFREE는 반응형 웹 페이지로 제작 되어 어떤 디바이스를 사용하든지, 화면에 맞춰 자동으로 최적화 되어 있습니다.
- 데스크톱 컴퓨터, 테블릿, 스마트폰 등 다양한 환경에서 이용가능 합니다.

### 2) 무한 스크롤

![무한스크롤](https://github.com/jeeseulah/PIXFREE/assets/165135312/3ebb7c9f-cf72-42f5-b556-529462d763d5)

- 무한 스크롤을 구현하기 위하여 react-infinite-scroll-component 라이브러리를 설치하여 사용했습니다.
- 초반에 IntersectionObserver를 사용하여 무한 스크롤을 구현하려 했지만, Observer를 생성하고 사용하는 방법에 아직 이해가 부족하여, 결국 다른 방법으로 구현하게 되었습니다.
- 이번 프로젝트에서 무한 스크롤 기능을 구현했기 때문에 스크롤 바에 background color 설정을 해주었습니다.

### 3) 검색 기능

| 검색 버튼 클릭                                                                                       | 엔터키로 검색                                                                                        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![검색1](https://github.com/jeeseulah/PIXFREE/assets/165135312/37940842-8014-4418-b766-0c1f1e63a6ef) | ![검색2](https://github.com/jeeseulah/PIXFREE/assets/165135312/8a50efdf-31c7-47e0-926c-19e63afbaec2) |

- 검색창은 form태그로 구현하고 onSubmit 이벤트를 활용하여 검색 기능을 실행하도록 했습니다.
- <code>useNavigate</code> Hook을 사용하여 검색 버튼 클릭 또는 enter키를 눌렀을 때 URL에 검색어가 표시되도록 했습니다.
- <code>Link</code> component를 사용하여 로고를 클릭하면 메인 화면으로 돌아가도록 설정했습니다.
- 메인화면으로 이동하면 입력한 검색어가 초기화 됩니다.

### 4) 로딩 화면 구현

| 적용된 spinner 모양                                                                                     | 구현 화면                                                                                              |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![Spinner1](https://github.com/jeeseulah/PIXFREE/assets/165135312/6153ebc1-1a2c-42ba-b135-767280f6f2e9) | ![spinner](https://github.com/jeeseulah/PIXFREE/assets/165135312/2807d78d-878d-48bd-a448-a19dd4d9aebe) |

- 다운받은 spinner gif 파일을 import하여 사용했습니다.
- <code>useState</code>를 사용하여 Loading상태를 관리했습니다. default값을 'false'로 설정하고, loading중일 때 상태를 'true'로 변경하여 loading화면을 구현했습니다.

### 5) 상세 페이지

| 유저 정보 페이지                                                                                          | 이미지 상세 페이지                                                                                          |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![유저디테일](https://github.com/jeeseulah/PIXFREE/assets/165135312/b33396ab-20cc-41c6-b2af-c5de368f658e) | ![이미지디테일](https://github.com/jeeseulah/PIXFREE/assets/165135312/08fcc6ac-8f33-4fba-b1a6-b183cdad1627) |

- image에 mouse over시 사진 창에서는 cursor가 'zoom-in'모양으로 변하도록 설정했고, user profile과 user name에서는 cursor가 'pointer'모양으로 변하도록 했습니다.
- user profile 클릭 시에는 <code>window.open</code>을 사용하여 unsplash user profile 링크의 새창으로 이동합니다.

### 6) 다른 이미지로 이동

| 모달 창 화면                                                                                                | 다른 이미지 클릭 시                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![이미지디테일](https://github.com/jeeseulah/PIXFREE/assets/165135312/08fcc6ac-8f33-4fba-b1a6-b183cdad1627) | ![다른모달변경](https://github.com/jeeseulah/PIXFREE/assets/165135312/cbf74302-1eeb-4537-89e7-0b52dbb8ea65) |

- react router를 사용하여 뒤 배경이 살아 있지만, URL이 변경되는 모달을 구현했습니다.
- <code>Link to</code> component를 사용하여 이미지 클릭 시 해당 이미지의 id값과 추가적인 state객체를 전달합니다.
- <code>useLocation</code>을 사용하여 현재 페이지의 URL정보를 가지고 와서, 이 정보를 기반으로 URL경로가 존재할 경우 모달 창이 열리도록 구현했습니다.

## 2. ✴️ 핵심 코드

<details>
    <summary><b>2-(1) axios활용 API에서 데이터 가져오기</b></summary>

- '.env'파일을 생성하여 API 키에 대한 환경변수를 설정한 뒤 <code>axios.create()</code> 메서드를 사용하여 요청에 포함시켰습니다.
- API 요청에 'fetch'이외에도 'axios'라는 라이브러리가 있다는 것을 알게되어 처음 사용해 보았습니다.
- 'axios'의 interceptor기능에 대해서는 아직 공부 중입니다.
- '.env'파일을 생성하고, 그 안에 중요한 설정 정보를 저장 한 뒤 <code>process.env.REACT*APP*변수명</code>과 같은 방식으로 해당 환경변수에 접근 할 수 있다는 것을 알았습니다.

```jsx
const Axios = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 50000,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
});
```

</details>

<details>
    <summary><b>2-(2) 메인 이미지 리스트 출력 </b></summary>

![화면 캡처 2024-07-02 214824](https://github.com/jeeseulah/PIXFREE/assets/165135312/aa0c107d-d2df-41ed-81cf-9b0d4c0b2e16)

- Unsplash 이미지들은 각기 다른 사이즈를 가지고 있습니다. 위와 같이 이러한 다양한 사이즈의 이미지들을 일정한 간격으로 정렬하여 보여주기 위해, 이미지들을 vertical 방향으로 정렬한 'div'태그가 있습니다. (위의 이미지로 예를들면, 세로로 정렬된 'div'가 5개 있습니다)
- 2차원 배열을 구현하기 위해 push를 사용하여 배열에 요소를 추가했습니다.

```jsx
// PictureList.js ------------------------------------------------------
const VerticalImg = (list, onInit) => {
  setOriginalImageList([...originalImageList, ...list]);
  // 기존 원래 이미지 리스트에 새로운 이미지 추가

  let verticalArray3 = onInit ? [[], [], []] : [...imageVerticalList3];

  // 불러온 이미지를 3열로 분리하기 위해, 2차원 배열을 위해 push사용
  list.forEach((item, index) => {
    verticalArray3[index % 3].push(item);
  });
  setImageVerticalList3(verticalArray3);
};
```

```jsx
// PictureList.js ------------------------------------------------------
imageVerticalList3.map((imageList, index) => (
  <div key={index}>
    {imageList.map((item, idx) => (
      <Picture
        key={idx}
        imageInfo={item?.image}
        imageSize={item?.image?.imageUrl?.small}
      />
    ))}
  </div>
));
```

</details>

<details>
<summary><b>2-(3) 검색 form 구현 </b></summary>

- onSubmit : form 태그를 사용하여 구현하고, button을 click했을 경우 `onChange` 이벤트를 통해 입력된 검색어(searchQuery) 값을 가져와 `useNavigate`를 사용하여 URL에 검색어를 표시하도록 구현했습니다.
- onKeyDown : enter 키를 눌렀을 경우에도 URL에 검색어가 표시되며 해당 검색어로 이미지를 search하여 가져옵니다.
- onChange : searchQuery값을 받기 위해 사용했습니다.
- value : 검색기능을 사용하다가 main페이지로 이동할 때 input창을 초기화 하기위해 searchQuery를 할당했습니다. (searchQuery는 Logo 버튼 클릭 시 초기화 됩니다.)

```jsx
// PictureList.js ------------------------------------------------------
<StyledForm onSubmit={searchFormHandler}>
  <StyledInput
    type="text"
    placeholder="검색어를 입력해주세요"
    value={searchQuery}
    onKeyDown={searchKeyHandler}
    onChange={searchInputChangeHandler}
  />
  <StyledButton type="submit">
    <IoSearch />
  </StyledButton>
</StyledForm>
```

- `resetState()`함수는 검색 후 하단에 이미지가 update되어야 하기 때문에, 기존에 배열에 저장되어 있는 값을 초기화해야 했습니다.
- `form`태그를 사용했기 때문에 submit event발생 시 브라우저가 페이지를 다시 로드하는 것을 막기 위해 사용했습니다.

```jsx
// PictureList.js ------------------------------------------------------
const searchInputChangeHandler = (e) => {
  setSearchQuery(e.target.value);
};
const searchFormHandler = (e) => {
  e.preventDefault();
  navigate(`/?search=${searchQuery}`);
  resetState();
  getSearchPictures(true);
};
const searchKeyHandler = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    navigate(`/?search=${searchQuery}`);
    resetState();
    getSearchPictures(true);
  }
};
const resetState = () => {
  setImageVerticalList3([[], [], []]);
  setOriginalImageList([]);
  setPage(1);
};
```

- URL에 검색된 값이 있을 경우 Search하여 이미지를 가져오고, 아닐 경우 일반 이미지를 가져옵니다.

```jsx
// PictureList.js ------------------------------------------------------
useEffect(() => {
  query?.length > 0 ? getSearchPictures(false) : getPictures(false);
}, [page]); // 페이지가 변경될 때마다 새로운 이미지
```

</details>

<details>
<summary><b>2-(4) 이미지 상세페이지 모달창 구현 </b></summary>

- react router를 사용하여 뒤 배경이 살아 있지만, URL이 변경되는 모달을 구현했습니다.
- `useLocation` 훅을 사용하여 현재 URL경로 정보를 `location`변수에 할당합니다.
- `Link to` component를 사용하여 이미지 클릭 시 해당 이미지의 id값과 추가적인 state객체를 전달하여 이미지의 상세 페이지로 이동합니다.
- `Link` component에 `key`속성을 사용하여 각 이미지의 고유 ID를 지정합니다.

```jsx
// Picture.js ---------------------------------------------------------
const location = useLocation();
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
</Link>;
```

- `useLocation`을 사용하여 현재 페이지의 URL정보를 가지고 와서, 이 정보를 기반으로 URL경로가 존재할 경우 모달 창이 열리도록 구현했습니다.
- `location={backgroundLocation || currentLocation}`을 사용하여, `backgroundLocation`이 존재하면 그 값을 기반으로 라우팅을 처리하고, 그렇지 않으면 현재 `location` 값을 기반으로 라우팅을 처리합니다.
- `<Route path="/" element={<PictureList />} />`와 `<Route path="/photos/:id" element={<PictureList />} />`부분은 첫번째 모달을 띄울 때는 background의 주소값이 "/"이지만 모달창이 열린 상태에서 다른 이미지로 이동 할 경우 background의 주소값이 이전 모달창의 id값을 가지게 되므로 이와 같이 구현했습니다.

```jsx
// App.js --------------------------------------------------------------
function App() {
  let currentLocation = useLocation();
  let backgroundLocation = currentLocation.state?.backgroundLocation;
  return (
    <>
      <Routes location={backgroundLocation || currentLocation}>
        <Route path="/" element={<PictureList />} />
        <Route path="/photos/:id" element={<PictureList />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path="/photos/:id" element={<ModalBox />} />
        </Routes>
      )}
      <Outlet />
    </>
  );
}
```

- URL에 표시된 이미지의 ID값을 가져오기 위해서 useParams를 사용했습니다.
- params값이 변경될 때마다 재렌더링 됩니다.

```jsx
// ModalDetail.js ------------------------------------------------------
const params = useParams();

const getPictures = async () => {
  try {
    setLoading(true);
    const picture = await getPhotoDetail(params.id);
    setImgDetail(picture.response);
    setImgRelated(picture.responseRelated);
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getPictures();
}, [params]);
```

</details>

## 3. ✴️ 보완해야할 부분

- 메인 페이지에서 스크롤한 후 반응형으로 페이지의 width사이즈를 변경할 때, 이미지가 열에 맞춰 제대로 보이지 않는 문제가 있습니다.
- 다운로드 기능이 아직 구현 안되었습니다. blob에 대한 이해가 더 필요해 보입니다.
- 검색 후 뒤로가기 버튼을 클릭하면 update가 되지 않습니다.

## 4. ✴️ 느낀점

이번에 처음으로 React 프로젝트를 진행하면서 새로운 기능을 추가할 때마다, React Hook들의 다양함에 대해 크게 인식하게 되었습니다. <br/>
블로그를 찾아보면 사용했던 Hook이 최신 버전이나 업데이트 되거나 새로운 기능이 추가된 경우가 많았습니다.
하나의 기능을 구현하는 데도 여러 가지 방법으로 존재하며, 이에 따라 어떤 Hook을 선택하여 구현해야 할지 많은 고민이 필요했습니다.<br/>
React Hook들의 사용 방법과 각 Hook의 차이점을 정확히 이해하고, 어떤 상황에서 어떤 Hook을 사용해야 하는지에 대한 학습이 필요하다는 생각이 들었습니다.<br/>
기능을 가져와서 사용할 때에도 이해가 부족하여 사용하지 못하는 경우도 있었습니다.<br/>
이러한 과정에서 부족한 점을 많이 느끼고, 지속적으로 공부를 열심히 해야겠다는 다짐을 하게 되었습니다.

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />
