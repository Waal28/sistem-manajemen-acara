import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAppState } from "@/context/AppStateContext";
import { toast } from "react-toastify";
import Spinner from "../../Spinner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const Visible = ({ showPassword, setShowPassword }) => {
  return (
    <div className="absolute top-[20%] right-3 cursor-pointer dark:text-grey-200 text-gray-400">
      {showPassword ? (
        <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} />
      ) : (
        <VisibilityIcon onClick={() => setShowPassword(!showPassword)} />
      )}
    </div>
  );
};
Visible.propTypes = {
  showPassword: PropTypes.bool,
  setShowPassword: PropTypes.func,
};

export default function CardChangePW() {
  const { userLogin } = useAppState();
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formState, setFormState] = React.useState({
    oldPassword: "",
    newPassword: "",
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
      const res = await axios.put(
        `/api/mahasiswa/${userLogin.portal.id}/change-password`,
        formState
      );
      setIsLoading(false);
      toast(`${res.data.message}, silahkan login kembali`, {
        type: "success",
        theme: "colored",
      });
      Cookies.remove("token");
      router.push("/");
      window.location.reload();
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
              viewBox="0 0 15 15"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="M12.5 8.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1m0-4h-4a2 2 0 1 0 0 4h4m0-4a2 2 0 1 1 0 4m-9-6v-3a3 3 0 0 1 6 0v3m2.5 4h1m-3 0h1m-3 0h1"
              />
            </svg>
            Ubah Password
          </div>
          <div className="w-full lg:w-[70%] md:w-[80%] p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="oldPassword"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Password Lama
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="oldPassword"
                    id="oldPassword"
                    value={formState.oldPassword}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
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
                  htmlFor="newPassword"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Password Baru
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  id="newPassword"
                  value={formState.newPassword}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-700 font-medium rounded-lg lg:text-sm md:text-sm text-xs px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-300"
              >
                {isLoading ? (
                  <Spinner className="w-5 h-5 text-white fill-teal-600" />
                ) : (
                  "Ubah"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
