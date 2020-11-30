import React from "react";
import "./style.css";
import "./root.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <label for="menu-control" class="hamburger">
        <i class="hamburger__icon"></i>
        <i class="hamburger__icon"></i>
        <i class="hamburger__icon"></i>
      </label>
      <input type="checkbox" id="menu-control" className="menu-control"></input>
      <aside className="sidebar">
        <ul className="nav-links sidebar__menu">
          <h3 className="logo">Recipe</h3>
          <img
            className="gif-two"
            src="https://media.giphy.com/media/3ohzdYBwEDAe0dPhx6/giphy.gif"
            alt=""
          />
          <Link className="link-style nav-link-grow-up" to="/">
            <li>Home</li>
          </Link>
          <Link className="link-style nav-link-grow-up" to="/explore">
            <li>Explore</li>
          </Link>
          <Link className="link-style nav-link-grow-up" to="/about">
            <li>About</li>
          </Link>
          <Link className="link-style nav-link-grow-up" to="/contact">
            <li>Contact</li>
          </Link>
          <img
            className="gif-two"
            src="https://media.giphy.com/media/3ohzdYBwEDAe0dPhx6/giphy.gif"
            alt=""
          />
        </ul>
        <label for="menu-control" className="sidebar__close"></label>
      </aside>
    </nav>
  );
}

export default Nav;
