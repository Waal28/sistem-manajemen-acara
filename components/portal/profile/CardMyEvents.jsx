import { IconButton, Tooltip } from "@mui/material";
import * as React from "react";
export default function CardMyEvents() {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg lg:col-span-3 col-span-1">
      <div className="relative border-b-2 lg:text-lg md:text-lg text-base font-medium bg-gray-200 rounded-t-xl text-gray-900 border-gray-300 dark:bg-gray-800 dark:border-white/10 dark:text-white px-8 py-4">
        Acara yang diikuti
        <Tooltip title="Edit Acara">
          <IconButton className="absolute top-[14%] right-5 text-lg text-gray-600 dark:text-white">
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
      <div className="p-8">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 overflow-auto max-h-96">
          {[...Array(10)].map((_, i) => (
            <CardItem key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardItem() {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-gray-200 dark:bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10">
      <Tooltip title="Hapus acara">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute lg:top-5 top-2 lg:right-5 right-2 z-50 lg:w-8 w-7 p-1 rounded-full bg-white text-red-500 transition-all duration-300 transform hover:text-red-400 hover:scale-105 dark:bg-gray-800"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
          />
        </svg>
      </Tooltip>
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-teal-500 transition-all duration-300 group-hover:scale-[10]" />
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-teal-500 transition-all duration-300 group-hover:bg-teal-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white transition-all"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.47 8.06L15.47 10l-4.88 4.88l-2.12-2.12l-1.06 1.06L10.59 17z"
            />
          </svg>
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>
            Perfect for learning how the framework works, prototyping a new
            idea, or creating a demo to share online.
          </p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a
              href="#"
              className="text-teal-500 transition-all duration-300 group-hover:text-white"
            >
              Selengkapnya →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
