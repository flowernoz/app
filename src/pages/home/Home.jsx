import React, { memo } from "react";
import "./Home.css";
import book from "../../assets/cover.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const homeContainerTextVariants = {
  hidden: {
    opacity: 0,
  },
  visable: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const imgContainerVariants = {
  hidden: {
    scale: 0,
  },
  visable: {
    scale: 1.1,
    transition: {
      delay: 1,
      duration: 1.3,
      type: "spring",
      stiffness: 80,
    },
  },
};

const buttonOneVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visable: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const buttonTwoVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visable: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};


const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home_page">
      <div className="container">
        <motion.div
          className="home_container"
          variants={homeContainerTextVariants}
          initial="hidden"
          animate="visable"
        >
          <p className="book_name">Grade  9  Vocabulary</p>
          <motion.div
            className="img_container"
            variants={imgContainerVariants}
            initial="hidden"
            animate="visable"
            style={{ width: "200px" }}
          >
            <img src={book} alt="" />
          </motion.div>
          <div className="buttons_container">
            <motion.button
              onClick={() => navigate("/units")}
              className="start"
              variants={buttonOneVariants}
              initial="hidden"
              animate="visable"
            >
              Start
            </motion.button>
            <motion.button
              onClick={() => navigate("/appinfo")}
              className="btn_next"
              variants={buttonTwoVariants}
              initial="hidden"
              animate="visable"
            >
              App Info
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
