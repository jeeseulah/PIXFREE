import "./App.scss";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import PictureList from "./pages/PictureList";
import Modal from "./pages/Modal";

function App() {
  let location = useLocation();
  let backgroundLocation = location.state?.backgroundLocation;
  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<PictureList />}>
          {/* <Route path="*" element={<NoMatch /> } /> */}
        </Route>
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path="/photos/:id" element={<Modal />} />
        </Routes>
      )}
      <Outlet />
    </>
  );
}

export default App;
