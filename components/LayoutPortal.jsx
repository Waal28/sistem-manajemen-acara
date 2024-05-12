"use client";
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDarkMode } from "@/context/DarkModeContext";
import TransitionsModal from "./TransitionsModal";
import staticData from "@/staticData";
import { useAppState } from "@/context/AppStateContext";

export default function LayoutPortal(props) {
  const { children, userLogin } = props;
  const { navbarMenu, navSettings } = staticData;
  const { darkMode } = useDarkMode();
  const { handleIsLogin } = useAppState();
  const isDarkMode = darkMode ? "dark" : "";

  React.useEffect(() => {
    if (userLogin) {
      handleIsLogin("portal", userLogin);
    }

    // eslint-disable-next-line
  }, [userLogin]);
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
LayoutPortal.propTypes = {
  children: PropTypes.node,
  userLogin: PropTypes.object,
};
