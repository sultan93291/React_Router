import React from "react";
import "../styles/navbar.css";
import { IoSearch } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <nav id="nav">
        <div>
          <Link className="logo" to="/">
            Logo
          </Link>{" "}
        </div>
        <div className="menu_wrapper">
          <ul>
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/blog">Blog</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/interior">Interior</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/about"> About</NavLink>{" "}
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <input id="input" placeholder="start query" type="text" />
            <IoSearch className="search" />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
