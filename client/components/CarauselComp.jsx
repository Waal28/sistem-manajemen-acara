"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import PropTypes from "prop-types";

export default function CarauselComp({ children }) {
  return (
    <Carousel
      animation="slide"
      indicators={true}
      navButtonsAlwaysVisible={true}
    >
      {children}
    </Carousel>
  );
}

CarauselComp.propTypes = {
  children: PropTypes.node,
};
