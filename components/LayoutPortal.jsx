"use client";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Cookies from "js-cookie";

import Navbar from "./Navbar";
import Footer from "./Footer";
import TransitionsModal from "./TransitionsModal";
import staticData from "@/staticData";
import { useDarkMode } from "@/context/DarkModeContext";
import { useAppState } from "@/context/AppStateContext";
import { verifyToken } from "@/middleware/verifyToken.mjs";

export default function LayoutPortal(props) {
  const { children } = props;
  const { navbarMenu, navSettings } = staticData;
  const { darkMode } = useDarkMode();
  const { handleIsLogin, handleSetUserLogin } = useAppState();
  const isDarkMode = darkMode ? "dark" : "";
  const cookieToken = Cookies.get("token");

  async function checkLogin() {
    if (cookieToken) {
      try {
        const decode = await verifyToken(cookieToken);
        if (decode) {
          const res = await axios.get(`/api/mahasiswa/${decode.data.id}`);
          const data = res.data.data;
          handleIsLogin("portal", true);
          handleSetUserLogin("portal", data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  React.useEffect(() => {
    checkLogin();
    // eslint-disable-next-line
  }, []);

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
};
