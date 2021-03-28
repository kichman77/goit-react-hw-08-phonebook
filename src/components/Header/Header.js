import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <h1>Phonebook</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
