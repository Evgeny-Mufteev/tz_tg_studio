import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Characters from "./pages/Characters";

import "./scss/app-global.scss";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/characters" element={<Characters />} />
      </Route>
    </Routes>
  );
};

export default App;
