"use client";

import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Membuat konteks
const AppStateContext = createContext();

// Custom hook untuk menggunakan konteks
export const useAppState = () => useContext(AppStateContext);

// Provider untuk menyediakan state ke dalam aplikasi
export const AppStateProvider = ({ children }) => {
  const [modal, setModal] = useState({
    open: false,
    children: <div></div>,
  });

  const [userLogin, setUserLogin] = useState({
    portal: { isLogin: false },
    admin: { isLogin: false },
  });

  const handleModal = (opt, children) => {
    switch (opt) {
      case "open":
        setModal({ open: true, children: children });
        break;
      case "close":
        setModal({ ...modal, open: false });
        break;
    }
  };
  const handleIsLogin = (opt, value) => {
    switch (opt) {
      case "portal":
        setUserLogin({ ...userLogin, portal: value });
        break;
      case "admin":
        setUserLogin({ ...userLogin, admin: value });
        break;
    }
  };

  return (
    <AppStateContext.Provider
      value={{
        modal,
        handleModal,
        userLogin,
        handleIsLogin,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node,
};
