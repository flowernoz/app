import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Exercise from "./pages/exercise/Exercise";
import Learn from "./pages/learn/Learn";
import Units from "./pages/units/Units";
import UnitExercise from "./pages/unitexercise/UnitExercise";
import DragAndDrop from "./pages/draganddrop/DragAndDrop";
import GapFill from "./pages/gapFill/GapFill";
import AppInfo from "./pages/appInfo/AppInfo";

const Router = () => {
  return (
    <div className="router_page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/learntext" element={<Learn />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:unit" element={<UnitExercise />} />
          <Route path="/matchingwords" element={<DragAndDrop />} />
          <Route path="/gapfill" element={<GapFill />} />
          <Route path="/appinfo" element={<AppInfo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default memo(Router);
