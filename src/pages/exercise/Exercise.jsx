import React, { memo } from "react";
import "./Exercise.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Exercise = () => {
  return (
    <div className="exercise_page">
      <div className="container">
        <motion.div
          className="exercise_container"
          initial={{ x: "80vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 80,
          }}
        >
          <div className="exercise_ul_container">
            {/* <ul>
              {exerciseData?.map((item, inx) => (
                <Link to={`${item.link}`}>
                
                <motion.li
                  key={inx}
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.7,
                    times: 0.1,
                  }}
                >
                  <span>
                    <b>{inx + 1}</b>
                  </span>
                  <p>{item?.title}</p>
                </motion.li>
                </Link>
              ))}
            </ul> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Exercise);
