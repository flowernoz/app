import React, { memo } from "react";
import "./Exercise.css";
import { motion } from "framer-motion";

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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Exercise);
