import React, { memo, useState, useEffect } from "react";
import { FaArrowRight, FaRandom } from "react-icons/fa";
import "./gapfill.css";

const GapFill = () => {
  let sentences = JSON.parse(localStorage.getItem("sentences")) || [];
  let [sentence, setSentence] = useState(sentences[0]);
  let [index, setIndex] = useState(1);
  let [msg, setMsg] = useState("");
  let [correct, setCorrect] = useState(0);
  let [error, setError] = useState(0);

  function next() {
    setTimeout(() => {
      if (!sentences || sentences.length === 0) {
        return;
      }
      if (index === sentences.length) {
        setMsg("You've completed all 15 sentences!");
        clearTimeout(timeoutId);
        return;
      }
      setIndex(index + 1);
      setMsg("");
      setSentence(sentences[index]);
    }, 2500);
  }

  function restart() {
    setIndex(1);
    setCorrect(0);
    setError(0);
    setMsg("");
    setSentence(sentences[0]);
  }

  function check(word) {
    setSentence({ ...sentence, gap: sentence?.fullText });
    console.log(word);
    if (sentence.fullText.includes(word)) {
      setMsg("Correct");
      setCorrect((p) => p + 1);
      next();
    } else {
      setMsg("Incorrect");
      setError((p) => p + 1);
      next();
    }
  }

  return (
    <div className="container">
      <div className="drag_container">
        <div className="drop_cards">
          <div className="drop_header">
            <h2>gap fill</h2>
            <button onClick={restart} className="restart">
              restart
            </button>
            <div style={{ display: "flex", gap: "12px" }}>
              <span
                style={{ color: "#08f26e", borderColor: "#08f26e" }}
                className="matching_btn"
              >
                {correct}
              </span>
              <span
                style={{ color: "#f01e2c", borderColor: "#f01e2c" }}
                className="matching_btn"
              >
                {error}
              </span>
            </div>
          </div>
          <div className="matching_container">
            <p>{sentence?.order + "/" + sentences?.length}</p>
            <ul className="matching-top">
              <b>gap fill</b>
              <li
                className="li"
                style={{
                  background:
                    msg === "Correct"
                      ? "#08f26e"
                      : msg === "Incorrect"
                      ? "#f01e2c"
                      : "transparent",
                }}
              >
                {sentence?.gap}
              </li>
            </ul>
            <b
              style={{
                color:
                  msg === "Correct"
                    ? "#08f26e"
                    : msg === "Incorrect"
                    ? "#f01e2c"
                    : "#003d80",
              }}
              className="matching-answer"
            >
              {msg}
            </b>
            <ul className="matching-bottom">
              <b> words</b>
              {sentence?.answers.map((item, id) => (
                <button
                  disabled={msg.length}
                  className="li options"
                  onClick={() => check(item?.trim())}
                  key={id}
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(GapFill);
