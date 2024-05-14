import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { useAppState } from "@/context/AppStateContext";
import { toast } from "react-toastify";
import Spinner from "../../Spinner";
import staticData from "@/staticData";

export default function CardEditProfile({ handleClose }) {
  const { userLogin, handleSetUserLogin } = useAppState();
  const { id, nama, npm, email, prodi } = userLogin.portal;
  const [isLoading, setIsLoading] = React.useState(false);
  const [formState, setFormState] = React.useState({
    nama: nama,
    npm: npm,
    email: email,
    prodi: prodi,
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
      const res = await axios.put(`/api/mahasiswa/${id}`, formState);
      setIsLoading(false);
      toast(res.data.message, { type: "success", theme: "colored" });
      handleSetUserLogin("portal", res.data.data);
      handleClose("editProfile");
    } catch (error) {
      setIsLoading(false);
      toast(error.response.data.message, { type: "error", theme: "colored" });
    }
  }
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl lg:w-[50%] md:w-[60%] sm:w-[80%] w-[90%] max-h-screen overflow-auto">
      <div className="w-full mx-auto flex items-center justify-center">
        <div className="w-full bg-gray-200 dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-5 lg:py-10 sm:py-10">
          <div className="flex flex-col items-center mb-6 lg:text-2xl md:text-2xl text-lg font-semibold text-teal-800 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-12 md:w-12 w-10 mb-3"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z"
              />
            </svg>
            Edit Profil
          </div>
          <div className="w-full lg:w-[70%] md:w-[80%] p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nama"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  value={formState.nama}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Slamet Kopling"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="npm"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  NPM
                </label>
                <input
                  type="number"
                  name="npm"
                  id="npm"
                  value={formState.npm}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="6969696969"
                  required
                />
              </div>
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
              <div>
                <label
                  htmlFor="prodi"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Prodi
                </label>
                <select
                  id="prodi"
                  name="prodi"
                  value={formState.prodi}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-600"
                  required
                >
                  {staticData.prodi.map((prodi) => (
                    <option key={prodi.name} value={prodi.name}>
                      {prodi.name}
                    </option>
                  ))}
                </select>
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
CardEditProfile.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
