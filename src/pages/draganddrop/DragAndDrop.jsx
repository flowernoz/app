import React, { memo, useState, useEffect } from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  return (
    <div className="container">
      <div className="drag_container">
        <div className="drop_cards">
          <div className="drop_header">
            <h2>Matching</h2>
            <button>restart</button>
            <button className="matching_btn">Tekshirish</button>
          </div>
          <div className="matching_container">
            <p></p>
            <ul className="matching-top">
              <b>English Words</b>
              <li></li>
            </ul>
            <b className="matching-answer"></b>
            <ul className="matching-bottom">
              <b>Uzbek words</b>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DragAndDrop);
