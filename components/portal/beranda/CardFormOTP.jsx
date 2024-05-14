import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { toast } from "react-toastify";
import Spinner from "../../Spinner";
import CardFormNewPw from "./CardFormNewPw";

export default function CardFormOTP({ handleSetModal, email }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formState, setFormState] = React.useState({
    otp: "",
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
        `/api/mahasiswa/change-password/otp`,
        formState
      );
      setIsLoading(false);
      toast(`${res.data.message}, silahkan login kembali`, {
        type: "success",
        theme: "colored",
      });
      handleSetModal("open", <CardFormNewPw handleSetModal={handleSetModal} />);
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
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0m0 3a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" />
              </g>
            </svg>
            OTP
            <p className="lg:text-sm text-xs mt-2">
              Masukkan OTP yang dikirimkan ke email {email}
            </p>
          </div>
          <div className="lg:w-[80%] md:w-[90%] w-[90%] p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  otp
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  value={formState.otp}
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
CardFormOTP.propTypes = {
  handleSetModal: PropTypes.func,
  email: PropTypes.string,
};
