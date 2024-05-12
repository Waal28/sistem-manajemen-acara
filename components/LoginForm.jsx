import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import { useAppState } from "@/context/AppStateContext";
import RegisterForm from "./RegisterForm";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

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

export default function LoginForm() {
  const { handleModal, userLogin, handleIsLogin } = useAppState();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formState, setFormState] = React.useState({
    npm: "",
    password: "",
  });
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleClickRegister() {
    handleModal("open", <RegisterForm />);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("/api/auth/portal-login", formState);
      setIsLoading(false);
      toast(res.data.message, { type: "success", theme: "colored" });
      handleModal("close");
      handleIsLogin("portal", userLogin);
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
          <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-teal-800 dark:text-white">
            <HttpsIcon className="text-5xl" />
            Login Portal
          </div>
          <div className="w-full lg:w-[70%] md:w-[80%] p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                  htmlFor="password"
                  className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formState.password}
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

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Ingat saya
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-teal-600 hover:underline dark:text-white"
                >
                  Lupa password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-300"
              >
                {isLoading ? (
                  <Spinner className="w-5 h-5 text-white fill-teal-600" />
                ) : (
                  "Masuk"
                )}
              </button>
            </form>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Belum punya akun?{" "}
              <button
                type="button"
                className="font-medium text-teal-600 hover:underline dark:text-white"
                onClick={handleClickRegister}
              >
                Daftar
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
