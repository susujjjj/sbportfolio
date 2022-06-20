import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span> front-end developer</span>
            </div>
            <div className="line">
              <span>Chloe Jeong</span>
            </div>
          </h2>
          <div className="btn-row">
            <NavLink to="/about" exact>
              More About me<RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
