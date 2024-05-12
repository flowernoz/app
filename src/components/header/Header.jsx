import React, { memo } from "react";
import "./Header.css";
import logo from "../../assets/logo_3.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const headerTextVariants = {
  hidden: {
    y: -250,
  },
  visable: {
    y: -10,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 110,
    },
  },
};

const textVariants = {
  hidden: {
    scale: 0,
  },
  visable: {
    scale: 0.9,
    transition: {
      delay: 1.3,
      duration: 1.3,
      type: "spring",
      stiffness: 50,
    },
  },
};

const Header = () => {
  let { pathname } = useLocation();
  return (
    <header className="navbar_page">
      <div className="container">
        <div className="navbar">
          <Link to={"/"} className="header_logo">
            <img src={logo} alt="" />
          </Link>

          <motion.div
            className="header_text"
            variants={headerTextVariants}
            initial="hidden"
            animate="visable"
          >
            <motion.span 
              variants={textVariants}
              initial="hidden"
              animate="visable"
              className="header_logo_mobile_app"
              style={{ fontSize: 25 }}
            >
              {pathname === "/unit" ? " Welcome to practice" : "Welcome to app"}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
