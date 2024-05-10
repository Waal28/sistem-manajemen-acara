import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import PropTypes from "prop-types";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { AppStateProvider } from "@/context/AppStateContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/engineering.png" sizes="any" />
      </head>
      <body>
        <AppStateProvider>
          <DarkModeProvider>
            {children}
            <ToastContainer />
          </DarkModeProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
