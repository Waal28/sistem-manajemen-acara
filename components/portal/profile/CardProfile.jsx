"use client";
import { useAppState } from "@/context/AppStateContext";
import Image from "next/image";
import React from "react";
import MyEvents from "./MyEvents";
import { IconButton, Modal, Tooltip } from "@mui/material";
import LoginForm from "@/components/LoginForm";

export default function CardProfile() {
  const { userLogin } = useAppState();
  const { nama, npm, email, prodi } = userLogin.portal;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl lg:w-[90%] md:w-[90%] w-[70%] max-h-screen overflow-auto">
        {/* card profile */}
        <main className="my-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg px-8 pt-10 pb-3 lg:col-span-2 col-span-1">
            <div className="relative photo-wrapper p-2">
              <Image
                className="rounded-full mx-auto border-2 border-teal-500"
                src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                alt="John Doe"
                width={128}
                height={128}
              />
              <Tooltip title="Edit Profil">
                <IconButton className="absolute top-0 right-0 text-lg text-gray-600 dark:text-teal-400">
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
                    <td className="px-2 py-2 text-gray-400 font-medium">
                      Email
                    </td>
                    <td className="px-2 py-2 dark:text-white">: {email}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <button
                  className="py-2 px-4 rounded-md lg:text-sm text-xs text-teal-500 hover:bg-gray-300 hover:text-teal-600 dark:hover:bg-gray-800 font-semibold"
                  onClick={handleOpen}
                >
                  Ubah Password
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <LoginForm />
                </Modal>
              </div>
            </div>
          </div>
          {/* end card profile */}
          {/* my events */}
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 lg:col-span-3 md:col-span-2 grid-cols-1">
            <h3 className="lg:text-xl text-base text-gray-900 dark:text-white font-medium leading-8 mb-5">
              Acara yang diikuti
            </h3>
            <MyEvents />
          </div>
          {/*  */}
        </main>
      </div>
    </>
  );
}
