import React from "react";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";

import LayoutPortal from "@/components/LayoutPortal";
import { cookies } from "next/headers";
import { SECRET_KEY } from "@/config/env.mjs";

export const metadata = {
  link: {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css",
  },
  scripts: ["https://cdn.tailwindcss.com/3.3.0"],
};

export default function RootLayout({ children }) {
  const cookieToken = cookies().get("token");

  if (cookieToken) {
    const decode = verifyToken(cookieToken.value);
    return <LayoutPortal userLogin={decode}>{children}</LayoutPortal>;
  } else return <LayoutPortal>{children}</LayoutPortal>;
}

RootLayout.propTypes = {
  children: PropTypes.node,
};

function verifyToken(token) {
  if (!token) {
    return false;
  }

  const verifyToken = jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) {
      return false;
    }
    return decode;
  });

  return verifyToken;
}
