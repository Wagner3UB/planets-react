import React from "react";
import { Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/PlanetsScreen";
import PlanetScreen from "./screens/PlanetScreen";

const ScreenRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PlanetsScreen />} />
      <Route path="/planet/:id" element={<PlanetScreen />} />
    </Routes>
  );
};

export default ScreenRoutes;
