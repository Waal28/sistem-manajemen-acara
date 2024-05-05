import Link from "next/link";
import React from "react";
import CarauselComp from "./CarauselComp";
import { Box } from "@mui/material";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="bg-emerald-200 dark:bg-custom-tertiary">
      {/* Jumbotron */}
      <div className="px-6 py-12 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 dark:shadow-none relative">
              <Box
                sx={{
                  clipPath: {
                    xl: "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 0 0%)",
                    lg: "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 0 0%)",
                    md: "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 0 0%)",
                    sm: "polygon(100% 0%, 100% 70%, 50% 100%, 0% 70%, 0 0%)",
                    xs: "polygon(100% 0%, 100% 75%, 50% 100%, 0% 75%, 0 0%)",
                  },
                }}
                className="rounded-lg px-6 py-14 bg-white dark:bg-gradient-to-r from-teal-900 from-1% via-teal-700 via-50% to-teal-900 to-99% dark:shadow-black/20 md:px-12 lg:-mr-14"
              >
                <h1 className="lg:mb-16 md:mb-16 mb-8 xl:text-6xl text-5xl font-bold tracking-tight text-teal-900 dark:text-white">
                  Jelajahi acara
                  <br />
                  <span className="text-teal-600 dark:text-emerald-400">
                    yang akan datang
                  </span>
                </h1>
                <Link
                  className="lg:mb-0 md:mb-0 mb-10 inline-block rounded-full bg-teal-900 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white dark:text-white dark:hover:text-emerald-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-600 dark:hover:bg-teal-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-600 focus:shadow-[0_8px_9px_-4px_rgba(74, 222, 128, 0.3),0_4px_18px_0_rgba(74, 222, 128, 0.2)] focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(255,255,255,1)] dark:hover:shadow-[0_4px_9px_-4px_rgba(52,211,153,1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  href="/all-events"
                >
                  Lihat Semua Acara
                </Link>
              </Box>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <CarauselComp>
                <Items />
              </CarauselComp>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
  );
}

function Items() {
  const items = [
    {
      id: 1,
      fakultas: "Teknik Informatika",
      link: "/all-events/Acara bla bla bla bla bla",
      title: "Acara bla bla bla bla bla",
      imgsrc:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      imgalt: "image1",
    },
    {
      id: 2,
      fakultas: "Teknik Mesin",
      link: "/all-events/Webinar blablabla blablabla",
      title: "Webinar blablabla blablabla",
      imgsrc:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      imgalt: "image2",
    },
    {
      id: 3,
      fakultas: "Teknik PWK",
      link: "/all-events/Workshop blablablablablabla",
      title: "Workshop blablablablablabla",
      imgsrc:
        "https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      imgalt: "image3",
    },
    {
      id: 4,
      fakultas: "Teknik Geologi",
      link: "/all-events/Workshop lorem lorem lorem",
      title: "Workshop lorem lorem lorem",
      imgsrc: "/images/4.jpg",
      imgalt: "image4",
    },
    {
      id: 5,
      fakultas: "Teknik Perminyakan",
      link: "/all-events/Acara lorem ipsum lorem ipsum lorem bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      title:
        "Acara lorem ipsum lorem ipsum lorem bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      imgsrc: "/images/5.jpg",
      imgalt: "image5",
    },
  ];

  return items.map((item) => (
    <div key={item.id} className="flex justify-center items-center py-2">
      <div className="max-w-sm h-[574px] bg-white dark:bg-teal-800 px-6 pt-6 pb-2 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ">
        <main className="h-full flex flex-col justify-between">
          <section>
            <h3 className="mb-3 w-max text-xl font-semibold text-teal-900 dark:text-white">
              {item.fakultas}
            </h3>
            <div className="relative">
              <Image
                width={500}
                height={300}
                className="w-full h-60 rounded-xl"
                src={item.imgsrc}
                alt={item.imgalt}
              />
              {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                $12
              </p>
              <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
                %20 Discount
              </p> */}
            </div>
            <Link
              className="mt-4 text-gray-800 dark:text-white text-2xl font-bold line-clamp-2 hover:underline hover:underline-offset-4"
              href={item.link}
            >
              {item.title}
            </Link>
          </section>
          <section className="my-4">
            <div className="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-600 dark:text-teal-300 mb-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="dark:text-white">1:34:23 Minutes</p>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-600 dark:text-teal-300 mb-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <p className="dark:text-white">3 Parts</p>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-600 dark:text-teal-300 mb-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </span>
              <p className="dark:text-white">TypeScript</p>
            </div>
            <Link
              className="block text-center mt-4 text-xl w-full text-white bg-teal-900 dark:bg-teal-600 py-2 rounded-xl shadow-lg hover:bg-teal-600 dark:hover:bg-teal-950"
              href={item.link}
            >
              Selengkapnya
            </Link>
          </section>
        </main>
      </div>
    </div>
  ));
}
