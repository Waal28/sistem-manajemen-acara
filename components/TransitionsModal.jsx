"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useAppState } from "@/context/AppStateContext";
import { useDarkMode } from "@/context/DarkModeContext";

export default function TransitionsModal() {
  const { modal, handleModal } = useAppState();
  const { darkMode } = useDarkMode();
  const isDarkMode = darkMode ? "dark" : "";
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal.open}
        onClose={() => handleModal("close")}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modal.open}>
          <div className={isDarkMode}>{modal.children}</div>
        </Fade>
      </Modal>
    </>
  );
}
