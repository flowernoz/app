import React, { memo, useState, useEffect } from "react";
import { FaArrowRight, FaRandom } from "react-icons/fa";
import "./gapfill.css";

const GapFill = () => {
  let sentences = JSON.parse(localStorage.getItem("sentences")) || [];
  let [sentence, setSentence] = useState(sentences[0]);
  let [index, setIndex] = useState(0);
  let [msg, setMsg] = useState("");

  function next() {
    setTimeout(() => {
      setIndex(index + 1);
      setSentence(sentences[index]);
      if (index == sentences.length - 1) {
        setIndex(0);
      }
    }, 2500);
  }

  function check(word) {
    const filledSentence = sentence.gap.replace("...", word);
    console.log(filledSentence);
    const newObject = {
      ...sentence,
      gap: filledSentence,
    };
    setSentence(newObject);
    if (sentence.fullText.includes(word)) {
      setMsg("Correct");
      next();
    } else {
      setMsg("Incorrect");
      next();
    }
  }

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
            <p>{sentence.order + "/" + sentences.length}</p>
            <ul className="matching-top">
              <b>gap fill</b>
              <li>{sentence.gap}</li>
            </ul>
            <b
              style={{ color: msg === "Correct" ? "green" : "red" }}
              className="matching-answer"
            >
              {msg}
            </b>
            <ul className="matching-bottom">
              <b> words</b>
              {sentence.answers.map((item, id) => (
                <li onClick={() => check(item)} key={id}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(GapFill);
