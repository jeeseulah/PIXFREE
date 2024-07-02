import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import PictureList from "./pages/PictureList";
import ModalBox from "./pages/ModalBox";

function App() {
  let location = useLocation();
  let backgroundLocation = location.state?.backgroundLocation;
  console.log("location", location);
  console.log("backgroundLocation", backgroundLocation);
  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<PictureList />}>
          {/* <Route path="*" element={<NoMatch /> } /> */}
        </Route>
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

export default App;
