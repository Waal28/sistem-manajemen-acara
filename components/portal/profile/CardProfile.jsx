"use client";
import { useAppState } from "@/context/AppStateContext";
import Image from "next/image";
import React from "react";
import { IconButton, Modal, Tooltip } from "@mui/material";
import { useDarkMode } from "@/context/DarkModeContext";
import CardChangePW from "./CardChangePW";
import CardEditProfile from "./CardEditProfile";

export default function CardProfile() {
  const { userLogin } = useAppState();
  const { darkMode } = useDarkMode();
  const isDarkMode = darkMode ? "dark" : "";
  const { nama, npm, email, prodi } = userLogin.portal;
  const [open, setOpen] = React.useState({
    editProfile: false,
    changePassword: false,
  });
  const handleOpen = (key) => {
    setOpen({ ...open, [key]: true });
  };
  const handleClose = (key) => {
    setOpen({ ...open, [key]: false });
  };
  return (
    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg lg:col-span-2 col-span-1">
      <div className="relative border-b-2 lg:text-lg md:text-lg text-base font-medium bg-gray-200 rounded-t-xl text-gray-900 border-gray-300 dark:bg-gray-800 dark:border-white/10 dark:text-white px-8 py-4">
        Profil
        <Tooltip title="Edit Profil">
          <IconButton
            className="absolute top-[14%] right-5 text-lg text-gray-600 dark:text-white"
            onClick={() => handleOpen("editProfile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-6 md:w-6 w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12l5.3 5.31l2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11l2.56.28l.18 2.29l2.28.17l.29 2.56l8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79l-.24-2.16l-2.31-.17l-.18-2.32"
              />
            </svg>
          </IconButton>
        </Tooltip>
      </div>
      <div className="m-8 px-8 pt-10 pb-3 rounded-lg dark:bg-gray-800">
        <button className="block photo-wrapper p-2 w-full transform hover:scale-105 duration-300">
          <Image
            className="rounded-full mx-auto border-2 border-teal-500"
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            alt={nama}
            width={128}
            height={128}
          />
        </button>
        <div className="p-2">
          <div className="flex flex-col items-center">
            <h3 className="block lg:text-xl text-sm text-gray-900 dark:text-white font-medium leading-8">
              {nama}
            </h3>
            <p className="block text-gray-400 lg:text-sm text-xs font-medium">
              {prodi}
            </p>
          </div>
          <table className="lg:text-sm text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-400 font-medium">NPM</td>
                <td className="px-2 py-2 dark:text-white">: {npm}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-400 font-medium">Email</td>
                <td className="px-2 py-2 dark:text-white">: {email}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-3">
            <button
              className="py-2 px-4 rounded-md lg:text-sm text-xs text-teal-500 hover:bg-gray-300 hover:text-teal-600 dark:hover:bg-gray-800 font-semibold"
              onClick={() => handleOpen("changePassword")}
            >
              Ubah Password
            </button>
            {/* Modal */}
            <Modal
              open={open.editProfile}
              onClose={() => handleClose("editProfile")}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <div className={isDarkMode + " my-10"}>
                <CardEditProfile handleClose={handleClose} />
              </div>
            </Modal>
            <Modal
              open={open.changePassword}
              onClose={() => handleClose("changePassword")}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <div className={isDarkMode + " my-10"}>
                <CardChangePW handleClose={handleClose} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
