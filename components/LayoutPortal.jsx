"use client";
import React from "react";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";
import axios from "axios";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDarkMode } from "@/context/DarkModeContext";
import TransitionsModal from "./TransitionsModal";
import staticData from "@/staticData";
import { useAppState } from "@/context/AppStateContext";
import Cookies from "js-cookie";

export default function LayoutPortal(props) {
  const { children, SECRET_KEY } = props;
  const { navbarMenu, navSettings } = staticData;
  const { darkMode } = useDarkMode();
  const { handleIsLogin, handleSetUserLogin } = useAppState();
  const isDarkMode = darkMode ? "dark" : "";
  const cookieToken = Cookies.get("token");

  async function checkLogin() {
    if (cookieToken) {
      const decode = verifyToken(cookieToken, SECRET_KEY);
      if (decode) {
        console.log("DECODE ERRRRRRRRR: ", decode);
        const res = await axios.get(`/api/mahasiswa/${decode.id}`);
        const data = res.data.data;
        handleIsLogin("portal", true);
        handleSetUserLogin("portal", data);
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
  SECRET_KEY: PropTypes.string,
};

function verifyToken(token, secret_key) {
  if (!token) {
    return false;
  }
  try {
    const verifyToken = jwt.verify(token, secret_key);
    return verifyToken;
  } catch (error) {
    console.log("INI ERRORRR", error);
    return error;
  }
}
