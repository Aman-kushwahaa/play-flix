import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}></Navbar>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
      </Routes>
      {/* <Route path="/video/:categoryId/:videoId" element={<Video />} /> */}
    </div>
  );
};

export default App;
