import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaList } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav">
      <FaHome />
      <FaCalendarDay />
      <FaList />
    </nav>
  );
};

export default Nav;
