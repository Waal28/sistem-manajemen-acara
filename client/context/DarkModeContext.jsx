"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

// Membuat konteks
const DarkModeContext = createContext();

// Custom hook untuk menggunakan konteks
export const useDarkMode = () => useContext(DarkModeContext);

// Provider untuk menyediakan state ke dalam aplikasi
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = (value) => {
    const newMode = value;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node,
};
