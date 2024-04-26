import React from "react";
import "./UnitExercise.css";
import { useNavigate } from "react-router-dom";
const UnitExercise = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="unit_exercise" onClick={() => navigate("/learntext")}>
        <b className="unit_exercise_number">1</b>
        <b className="unit_exercise_title">Learn the meaning</b>
      </div>
      <div className="unit_exercise" onClick={() => navigate("/matchingwords")}>
        <b className="unit_exercise_number">2</b>
        <b className="unit_exercise_title">Matching words</b>
      </div>
      <div className="unit_exercise" onClick={() => navigate("/gapfill")}>
        <b className="unit_exercise_number">3</b>
        <b className="unit_exercise_title">Fill the gaps</b>
      </div>
    </>
  );
};

export default UnitExercise;
