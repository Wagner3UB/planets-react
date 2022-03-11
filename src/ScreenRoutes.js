import React from "react";
import { Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/PlanetsScreen";
import PlanetScreen from "./screens/PlanetScreen";
import NotFound404 from "./404";

const ScreenRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PlanetsScreen />} />
      <Route path="/planet/:id" element={<PlanetScreen />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default ScreenRoutes;
