import React, { memo, useEffect, useState } from "react";
import "./Units.css";
import { useNavigate } from "react-router-dom";
import axios from "../../api";
import loading from "../../assets/loader.gif";

const Units = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("/data/alldata")
      .then((res) => {
        setData(res.data.innerData);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, []);
  function handleLead(i) {
    localStorage.setItem("words", JSON.stringify(data[i]?.unitWords));
    localStorage.setItem("sentences", JSON.stringify(data[i]?.sentences));
    navigate(`/units/${i}`);
  }
  return (
    <div className="units_page">
      {loader ? (
        <img className="loading" src={loading} alt="alter" />
      ) : (
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
      )}
    </div>
  );
};

export default memo(Units);
