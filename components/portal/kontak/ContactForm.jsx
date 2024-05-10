"use client";
import { Container } from "@mui/material";
import React from "react";

export default function ContactForm() {
  return (
    <Container>
      <section className="relative">
        {/*  */}
        <div className="absolute inset-0 z-0 bg-contact-texture bg-repeat rounded-xl"></div>
        {/*  */}
        <main className="relative z-10 bg-opacity-70 dark:bg-opacity-85 bg-emerald-300 dark:bg-custom-secondary rounded-xl">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-teal-900 dark:text-white">
              Hubungi Kami
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-teal-900 dark:text-white sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              incidunt nulla dicta optio reiciendis eaque praesentium pariatur
              molestias? Aspernatur voluptatum labore iste facere natus aperiam
              sint et consectetur repudiandae nulla?
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-teal-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-teal-700 dark:border-teal-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-teal-900 dark:text-white"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-teal-900 bg-teal-50 rounded-lg border border-teal-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-teal-700 dark:border-teal-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Perihal apa yang bisa kami bantu?"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-teal-900 dark:text-white"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-teal-900 bg-teal-50 rounded-lg shadow-sm border border-teal-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-teal-700 dark:border-teal-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tinggalkan pesan anda..."
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 rounded-full border border-teal-300 dark:border-teal-300 text-sm font-medium text-center text-white hover:bg-opacity-80 dark:hover:bg-opacity-50 bg-teal-800 dark:bg-teal-600 bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Kirim
              </button>
            </form>
          </div>
        </main>
      </section>
    </Container>
  );
}
