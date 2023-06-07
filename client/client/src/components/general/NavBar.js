import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="main-navbar bg-main">
        <h1>
          <a href="/">
            <i className="fas fa-store">e-Shop</i>
          </a>
        </h1>
        <ul>
          <li>
            <a href="/">Merchant</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
