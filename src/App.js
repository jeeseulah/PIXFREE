import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import PictureList from "./pages/PictureList";
import ModalBox from "./pages/ModalBox";

function App() {
  let currentLocation = useLocation();
  let backgroundLocation = currentLocation.state?.backgroundLocation;
  // console.log("location", currentLocation);
  // console.log("backgroundLocation", backgroundLocation);
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

export default App;
