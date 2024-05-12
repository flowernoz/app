import React, { memo, useState, useMemo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const [words, setWords] = useState(
    JSON.parse(localStorage.getItem("words")) || []
  );

  const [engId, setEngId] = useState(null);
  const [check, setCheck] = useState(true);
  const [correctIDs, setCorrectIDs] = useState([]);
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(5);
  let [path, setPath] = useState(1);
  const data = words.slice(start, end);

  const dataUz = useMemo(() => {
    return words
      .slice(start, end)
      .map(
        (i) =>
          i && {
            ...i,
            index: Math.floor(Math.random() * +new Date().getTime()),
          }
      )
      .sort((a, b) => {
        if (a.index < b.index) return 1;
        else return -1;
      });
  }, [start, end]);

  function checkMatching(uzID) {
    engId === uzID
      ? (setCheck(true),
        setCorrectIDs((prevCorrectIDs) => [...prevCorrectIDs, engId]),
        setEngId(null))
      : (setCheck(false),
        setCorrectIDs((prevCorrectIDs) =>
          prevCorrectIDs.filter((id) => id !== engId)
        ));
  }

  const restartGame = () => {
    setCorrectIDs([]);
    setStart(0);
    setEnd(5);
    setPath(1);
  };
  const next = () => {
    setStart(start !== 10 ? (start += 5) : 0);
    setEnd(end !== 15 ? (end += 5) : 5);
    setPath(path == 3 ? 1 : path + 1);
  };
  const prev = () => {
    setStart((p) => (p <= 10 ? (p -= 5) : 0));
    setEnd((p) => (p <= 15 ? (p -= 5) : 5));
    setPath((p) => p - 1);
  };

  return (
    <div className="container">
      <div className="drag_container">
        <div className="drop_cards">
          <div className="drop_header">
            <button className="restart" onClick={restartGame}>
              Restart
            </button>
            <div className="arrows">
              <button
                disabled={path == 1}
                className="matching_btn"
                onClick={prev}
              >
                <FaArrowLeft />
              </button>
              <button
                disabled={path == 3}
                className="matching_btn"
                onClick={next}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="matching_container">
            <p>{path}/3</p>
            <ul className="matching-top">
              <b>English Words</b>
              {data?.map((englishWord, inx) => (
                <button
                  className="li"
                  disabled={correctIDs?.some((i) => i === englishWord?.order)}
                  style={{
                    background:
                      check && correctIDs?.some((i) => i === englishWord?.order)
                        ? "#008000"
                        : engId === englishWord?.order && !check
                          ? "#f01e2c"
                          : "transparent",

                    opacity: correctIDs?.length
                      ? correctIDs?.some((i) => i === englishWord.order)
                        ? "1"
                        : "1"
                      : "1",
                  }}
                  onClick={() => setEngId(englishWord.order)}
                  key={inx}
                >
                  {englishWord.eng}
                </button>
              ))}
            </ul>

            <b className="matching-answer"></b>
            <ul className="matching-bottom">
              <b>Uzbek words</b>
              {dataUz?.map((uzbekWord, inx) => (
                <button
                  className="li"
                  disabled={correctIDs?.some((i) => i === uzbekWord.order)}
                  style={{
                    background:
                      check && correctIDs?.some((i) => i === uzbekWord.order)
                        ? "#008000"
                        : "transparent",
                    opacity: correctIDs?.length
                      ? correctIDs?.some((i) => i === uzbekWord.order)
                        ? "1"
                        : "1"
                      : "1",
                  }}
                  onClick={() => checkMatching(uzbekWord.order)}
                  key={inx}
                >
                  {uzbekWord.uz}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DragAndDrop);
