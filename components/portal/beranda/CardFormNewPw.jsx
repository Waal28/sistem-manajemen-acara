import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { toast } from "react-toastify";
import Spinner from "../../Spinner";
import { Visible } from "@/components/LoginForm";

export default function CardFormNewPw({ handleSetModal }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [formState, setFormState] = React.useState({
    newPassword: "",
    confirmPassword: "",
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
      const res = await axios.post(
        `/api/mahasiswa/change-password/otp/new-password`,
        formState
      );
      setIsLoading(false);
      toast(`${res.data.message}, silahkan login kembali`, {
        type: "success",
        theme: "colored",
      });
      handleSetModal("close");
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
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13.5V8.25A1.25 1.25 0 0 1 8.25 7h0A1.25 1.25 0 0 1 9.5 8.25V11h2a2 2 0 0 1 2 2v.5" />
                <circle cx={1} cy={1} r=".5" />
                <circle cx={5} cy={1} r=".5" />
                <circle cx={9} cy={1} r=".5" />
                <circle cx={1} cy="4.5" r=".5" />
                <circle cx={5} cy="4.5" r=".5" />
                <circle cx={9} cy="4.5" r=".5" />
                <circle cx={1} cy={8} r=".5" />
                <path d="M5 8.5a.5.5 0 0 1 0-1Z" />
              </g>
            </svg>
            Password Baru
            <p className="lg:text-sm text-xs mt-2">Masukkan password baru</p>
          </div>
          <div className="lg:w-[80%] md:w-[90%] w-[90%] p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="newPassword"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Password Baru
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    id="newPassword"
                    value={formState.newPassword}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="slamet@gmail.com"
                    required
                  />
                  <Visible
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Konfirmasi Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formState.confirmPassword}
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
                    "Simpan"
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
CardFormNewPw.propTypes = {
  handleSetModal: PropTypes.func,
};
