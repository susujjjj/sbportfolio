import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/projects" exact>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" exact>
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact>
                  About me
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
