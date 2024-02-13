import './App.css';
// import NavBar from "./views/NavBar";
import Homepage from "./views/Homepage";
// import Player from "./views/Player";
// import Info from "./views/Info";
// import Footer from "./views/Footer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <div className="container">
        {/* <NavBar />  */}
          <Routes>
            <Route path="/" element={<Homepage />} />
          {/* //   <Route path="/name/"name"" element={<Player />}/> */}
          {/* //   <Route path="/:id" element={<Info />} /> */}
          </Routes>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App;
