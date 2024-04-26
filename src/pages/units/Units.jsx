import React, { memo } from "react";
import "./Units.css";
import { useNavigate } from "react-router-dom";
import axios from "../../api";
import { useEffect } from "react";
import { useState } from "react";
const Units = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/data/alldata")
      .then((res) => {
        setData(res.data.innerData);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleLead(i) {
    localStorage.setItem("words", JSON.stringify(data[i]?.unitWords));
    navigate(`/units/${i}`);
    console.log(data[i]?.unitWords);
  }
  console.log(data);
  return (
    <div className="units_page">
      <div className="container">
        {data.map((i, inx) => (
          <div
            key={inx}
            className="unit_exercise"
            onClick={() => {
              handleLead(inx);
            }}
          >
            <b className="unit_exercise_number">{i?.unit}</b>
            <b className="unit_exercise_title">{i?.title} Theme</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Units);
