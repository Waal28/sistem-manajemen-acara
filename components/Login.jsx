import React from "react";
import PropTypes from "prop-types";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import { useAppState } from "@/context/AppStateContext";
import Register from "./Register";
import { toast } from "react-toastify";

export const Visible = ({ showPassword, setShowPassword }) => {
  return (
    <div className="absolute top-3 right-3 cursor-pointer dark:text-grey-200 text-gray-400">
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

export default function Login() {
  const { handleModal } = useAppState();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formState, setFormState] = React.useState({
    nama: "",
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
    handleModal("open", <Register />);
  }
  function handleSubmit(e) {
    e.preventDefault();
    toast("Login berhasil!", { type: "success", theme: "colored" });
    console.log(formState);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-gray-200 dark:bg-gray-900 rounded-2xl w-full flex flex-col items-center justify-center p-5 lg:py-10 sm:py-10">
          <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-teal-800 dark:text-white">
            <HttpsIcon className="text-5xl" />
            Login Portal
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="nama"
                    className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
                  >
                    Nama
                  </label>
                  <input
                    type="name"
                    name="nama"
                    id="nama"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Slamet Kopling"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="npm"
                    className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
                  >
                    NPM
                  </label>
                  <input
                    type="number"
                    name="npm"
                    id="npm"
                    value={formState.npm}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="6969696969"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
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
                      className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-teal-600 hover:underline dark:text-white"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                  Sign in
                </button>
              </form>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <button
                  type="button"
                  className="font-medium text-teal-600 hover:underline dark:text-white"
                  onClick={handleClickRegister}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
