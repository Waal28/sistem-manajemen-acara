import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { toast } from "react-toastify";
import Spinner from "../../Spinner";
import CardFormOTP from "./CardFormOTP";

export default function CardForgetPw({ handleSetModal }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formState, setFormState] = React.useState({
    email: "",
  });
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`/api/mahasiswa/forget-password`, formState);
      setIsLoading(false);
      toast(`${res.data.message}, silahkan login kembali`, {
        type: "success",
        theme: "colored",
      });
      handleSetModal(
        "open",
        <CardFormOTP handleSetModal={handleSetModal} email={formState.email} />
      );
    } catch (error) {
      setIsLoading(false);
      toast(error.response.data.message, { type: "error", theme: "colored" });
    }
  }
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl lg:w-[40%] md:w-[50%] sm:w-[70%] w-[80%] max-h-screen overflow-auto">
      <div className="w-full mx-auto flex items-center justify-center">
        <div className="w-full bg-gray-200 dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-5 lg:py-10 sm:py-10">
          <div className="flex flex-col items-center mb-6 lg:text-2xl md:text-2xl text-lg font-semibold text-teal-800 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-12 md:w-12 w-10 mb-3"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 21q-1.85 0-3.463-.687T6.7 18.425L8.125 17q.95.925 2.2 1.463T13 19q2.9 0 4.95-2.05T20 12t-2.05-4.95T13 5T8.05 7.05T6 12v.175l1.825-1.825l1.425 1.4L5 16L.75 11.75l1.425-1.4L4 12.2V12q0-1.875.713-3.512t1.925-2.85t2.85-1.925T13 3t3.513.713t2.85 1.924t1.925 2.85T22 12q0 3.75-2.625 6.375T13 21m-2-5q-.425 0-.712-.288T10 15v-3q0-.425.288-.712T11 11v-1q0-.825.588-1.412T13 8t1.413.588T15 10v1q.425 0 .713.288T16 12v3q0 .425-.288.713T15 16zm1-5h2v-1q0-.425-.288-.712T13 9t-.712.288T12 10z"
              />
            </svg>
            Lupa Password
            <p className="lg:text-sm text-xs mt-2">
              Masukkan email yang terdaftar
            </p>
          </div>
          <div className="lg:w-[80%] md:w-[90%] w-[90%] p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="slamet@gmail.com"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-700 font-medium rounded-lg lg:text-sm md:text-sm text-xs px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-300"
                >
                  {isLoading ? (
                    <Spinner className="w-5 h-5 text-white fill-teal-600" />
                  ) : (
                    "Kirim"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
CardForgetPw.propTypes = {
  handleSetModal: PropTypes.func,
};
