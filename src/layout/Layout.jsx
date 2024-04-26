import React, { memo } from "react";
import "./Layout.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import { FaArrowLeft } from "react-icons/fa";
const Layout = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="layout_page">
      <Header />
      <main className="main_layout">
        <div className="container">
          {location.pathname !== "/" && (
            <button className="back" onClick={goBack}>
              <FaArrowLeft />{" "}
            </button>
          )}
          <div className="main_container">{<Outlet />}</div>
        </div>
      </main>
    </div>
  );
};

export default memo(Layout);
