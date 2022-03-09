import React from "react";
import { Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/PlanetsScreen";

const ScreenRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<PlanetsScreen />}/>
    </Routes>
  )
};

export default ScreenRoutes;
