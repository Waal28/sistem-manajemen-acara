"use client";
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "@/data";
import { useDarkMode } from "@/context/DarkModeContext";
import TransitionsModal from "./TransitionsModal";

export default function Layout({ children }) {
  const { navbarMenu, navSettings } = data();
  const { darkMode } = useDarkMode();
  const isDarkMode = darkMode ? "dark" : "";

  return (
    <div className={isDarkMode}>
      <div className="bg-white dark:bg-custom-tertiary">
        <Navbar pages={navbarMenu} settings={navSettings}>
          {children}
          <TransitionsModal />
        </Navbar>
        <Footer />
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};