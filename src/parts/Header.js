import React, { useState } from "react";
import Button from "../elements/Button";
import BrandIcon from "./IconText";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Header = (props) => {
  const location = useLocation();

  const { isActive, setActive } = useState(false);
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };
  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span style={{ color: "#152C5B" }}>cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setActive((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={[
                "collapse navbar-collapse",
                isActive ? "show" : " "
              ].join(" ")}
            >
              <ul className="navbar-nav ms-auto">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="">
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
