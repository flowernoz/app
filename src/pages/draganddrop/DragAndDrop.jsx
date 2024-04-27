import React, { memo, useState, useEffect } from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const [words, setWords] = useState(
    JSON.parse(localStorage.getItem("words")) || []
  );

  function handleDrop(event) {
    event.preventDefault();

    const droppedEnglishWord = event.dataTransfer.getData("text");
    const targetUzbekWord = event.target.innerText;
    displayed;

    setWords((prevWords) =>
      prevWords.map((word) => {
        if (word.order === droppedEnglishWord) {
          return { ...word, matchedUzbekWord: targetUzbekWord };
        } else {
          return word;
        }
      })
    );
  }

  function handleDragStart(event, englishWord) {
    event.dataTransfer.setData("text", englishWord.order);
  }

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
              {words.map((englishWord, inx) => (
                <li
                  key={inx}
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, englishWord)}
                >
                  {englishWord.eng}
                </li>
              ))}
            </ul>
            <b className="matching-answer"></b>
            <ul className="matching-bottom">
              <b>Uzbek words</b>
              {words.map((uzbekWord, inx) => (
                <li key={inx} onDrop={(e) => handleDrop(e, uzbekWord.uz)}>
                  {uzbekWord.uz}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DragAndDrop);
