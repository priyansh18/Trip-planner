import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/add">
        <FaCalendarDay />
      </Link>
      <Link to="/list">
        <FaList />
      </Link>
    </nav>
  );
};

export default Nav;
