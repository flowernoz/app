import React, { memo, useState, useEffect } from "react";
import "./gapfill.css";

const GapFill = () => {
  return (
    <div className="container">
      <div className="drag_container">
        <div className="drop_cards">
          <div className="drop_header">
            <h2>gap fill</h2>
            <button>restart</button>
            <button className="matching_btn">Tekshirish</button>
          </div>
          <div className="matching_container">
            <p></p>
            <ul className="matching-top">
              <b>gap fill</b>
              {/* {.map((id) => (
                <li key={id} onClick={() => setTextEnId(id)}>
                  {texts.find((text) => text.id === id).gapfill}
                </li>
              ))} */}
            </ul>
            <b className="matching-answer"></b>
            <ul className="matching-bottom">
              <b> words</b>
              {/* {.map((id) => (
                <li >
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(GapFill);
