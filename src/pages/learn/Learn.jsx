import React, { useState } from "react";
import { GiSpeaker } from "react-icons/gi";
import { FaArrowRight, FaRandom } from "react-icons/fa";
import "./learn.css";

const Learn = () => {
  let words = JSON.parse(localStorage.getItem("words")) || [];
  let [text, setText] = useState(words[0]);
  let [index, setIndex] = useState(0);

  function read(value) {
    var soz = new SpeechSynthesisUtterance();
    soz.text = value;
    window.speechSynthesis.speak(soz);
  }

  const random = () => {
    let n = Math.floor(Math.random() * words.length);
    setText(words.find((i, inx) => inx === n));
  };
  function next() {
    setIndex(index + 1);
    setText(words[index]);
    if (index == words.length - 1) {
      setIndex(0);
    }
  }
  return (
    <div>
      <div className="text_lists">
        <h1 className="learn_words">{text?.eng}</h1>
        <GiSpeaker className="play_voice" onClick={() => read(text?.eng)} />
        <h1 className="learn_words">{text?.uz}</h1>
        <button onClick={random} className="text_lists_btn random_btn">
          <FaRandom />
        </button>
        <button onClick={next} className="text_lists_btn next_btn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Learn;
