// import React, { memo, useState, useEffect } from "react";
// import "./DragAndDrop.css";

// const DragAndDrop = () => {
//   const [words, setWords] = useState(
//     JSON.parse(localStorage.getItem("words")) || []
//   );

//   const [engId, setEngId] = useState(null);
//   const [check, setCheck] = useState(1);
//   const [correctIDs, setCorrectIDs] = useState([]);

//   const data = words.slice(0, 5);
//   const dataUz = words
//     .slice(0, 5)
//     .map(
//       (i) =>
//         i && {
//           ...i,
//           index: Math.floor(Math.random() * new Date().getMilliseconds()),
//         }
//     )
//     .sort((a, b) => {
//       if (a.index < b.index) return 1;
//       else return -1;
//     });

//   console.log(dataUz);

//   function checkMatching(uzID) {
//     engId === uzID
//       ? (setCheck("true"), setCorrectIDs((e) => [...e, engId]), setEngId(null))
//       : setCheck("false");
//   }

//   console.log(correctIDs);

//   return (
//     <div className="container">
//       <div className="drag_container">
//         <div className="drop_cards">
//           <div className="drop_header">
//             <h2>Matching</h2>
//             <button>restart</button>
//             <button className="matching_btn">Tekshirish</button>
//           </div>
//           <div className="matching_container">
//             <p></p>
//             <ul className="matching-top">
//               <b>English Words</b>
//               {data.map((englishWord, inx) => (
//                 <li
//                   style={{
//                     background:
//                       check === "true" &&
//                       correctIDs?.some((i) => i === englishWord.order)
//                         ? "greenyellow"
//                         : check === "false"
//                         ? "crimson"
//                         : "transparent",

//                     opacity: correctIDs.length
//                       ? correctIDs?.some((i) => i === englishWord.order)
//                         ? "0.2"
//                         : "1"
//                       : "1",
//                   }}
//                   onClick={() => setEngId(englishWord.order)}
//                   key={inx}
//                 >
//                   {englishWord.eng}
//                 </li>
//               ))}
//             </ul>

//             <b className="matching-answer"></b>
//             <ul className="matching-bottom">
//               <b>Uzbek words</b>
//               {dataUz.map((uzbekWord, inx) => (
//                 <li
//                   style={{
//                     background:
//                       check === "true" &&
//                       correctIDs?.some((i) => i === uzbekWord.order)
//                         ? "greenyellow"
//                         : check === "false"
//                         ? "crimson"
//                         : "transparent",
//                     opacity: correctIDs.length
//                       ? correctIDs?.some((i) => i === uzbekWord.order)
//                         ? "0.2"
//                         : "1"
//                       : "1",
//                   }}
//                   onClick={() => checkMatching(uzbekWord.order)}
//                   key={inx}
//                 >
//                   {uzbekWord.uz}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(DragAndDrop);

import React, { memo, useState } from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const [words, setWords] = useState(
    JSON.parse(localStorage.getItem("words")) || []
  );

  const [engId, setEngId] = useState(null);
  const [check, setCheck] = useState(true);
  const [correctIDs, setCorrectIDs] = useState([]);

  const data = words.slice(0, 5);
  const dataUz = words
    .slice(0, 5)
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

  console.log(dataUz);

  // function checkMatching(uzID) {
  //   engId === uzID
  //     ? (setCheck(true),
  //       setCorrectIDs((prevCorrectIDs) => [...prevCorrectIDs, engId]),
  //       setEngId(null))
  //     : setCheck(false);
  // }

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
    setWords([]);
    setCorrectIDs([]);
  };

  return (
    <div className="container">
      <div className="drag_container">
        <div className="drop_cards">
          <div className="drop_header">
            <h2>Matching</h2>
            <button onClick={restartGame}>restart</button>
            <button className="matching_btn" onClick={() => setCheck(true)}>
              Tekshirish
            </button>
          </div>
          <div className="matching_container">
            <p></p>
            <ul className="matching-top">
              <b>English Words</b>
              {data.map((englishWord, inx) => (
                <button
                  className="li"
                  disabled={correctIDs?.some((i) => i === englishWord.order)}
                  style={{
                    background:
                      check && correctIDs?.some((i) => i === englishWord.order)
                        ? "greenyellow"
                        : !check
                        ? "transparent"
                        : "transparent",

                    opacity: correctIDs.length
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
              {dataUz.map((uzbekWord, inx) => (
                <button
                  className="li"
                  disabled={correctIDs?.some((i) => i === uzbekWord.order)}
                  style={{
                    background:
                      check && correctIDs?.some((i) => i === uzbekWord.order)
                        ? "greenyellow"
                        : !check
                        ? "transparent"
                        : "transparent",
                    opacity: correctIDs.length
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
