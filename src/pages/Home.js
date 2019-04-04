import React from "react";

import "./styles/Home.css";
import astronauta from "../images/astronauts.SVG";
import platziLogo from "../images/platziconf-logo.SVG";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Badges">
          <div className="Home__hero">
            <div className="Home__container">
              <div className="container__conf">
                <img className="Home_conf" src={platziLogo} alt="logo" />
                <h1>
                  Badge <br /> Management <br /> System
                </h1>
                <div>
                  <Link className="btn btn-primary" to="/badges">
                    Start
                  </Link>
                </div>
              </div>
              <div className="container__astro">
                <img className="Home_astro" src={astronauta} alt="Conf Logo" />
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Home;
