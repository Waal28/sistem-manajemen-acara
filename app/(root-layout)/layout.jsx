import React from "react";
import PropTypes from "prop-types";

import LayoutPortal from "@/components/LayoutPortal";

import { SECRET_KEY } from "@/config/env.mjs";

export const metadata = {
  link: {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css",
  },
  scripts: ["https://cdn.tailwindcss.com/3.3.0"],
};

export default function RootLayout({ children }) {
  return <LayoutPortal SECRET_KEY={SECRET_KEY}>{children}</LayoutPortal>;
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
