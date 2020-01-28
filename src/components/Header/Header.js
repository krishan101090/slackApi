import React from "react";
import { NavLink } from "react-router-dom";

// import "./Header.css";
const Header = () => {
  return (
    <header>
      <div>
        <div className="logoWrap">
          {" "}
          <NavLink to="/">
            <img
              src="https://a.slack-edge.com/4f28/img/slack_logo.svg"
              alt="site-logo"
            />
          </NavLink>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Product</a>
          </li>

          <li>
            <a href="/">Pricing</a>
          </li>

          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a className="btnWithIcon" href="/">
              Your Workspaces
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
