import React from "react";
import PropTypes from "prop-types";

import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  link: {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css",
  },
  scripts: ["https://cdn.tailwindcss.com/3.3.0"],
};

export default function RootLayout({ children }) {
  return (
    <>
      <Layout>
        {children}
        <ToastContainer />
      </Layout>
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
