import React from "react";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginForm, { Visible } from "./LoginForm";
import { useAppState } from "@/context/AppStateContext";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const { handleModal } = useAppState();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formState, setFormState] = React.useState({
    nama: "",
    npm: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  const handleClickLogin = () => {
    handleModal("open", <LoginForm />);
  };
  function handleSubmit(e) {
    e.preventDefault();
    toast("Register berhasil");
    console.log(formState);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-gray-200 dark:bg-gray-900 rounded-2xl w-full flex flex-col items-center justify-center p-5 lg:py-10 sm:py-10">
          <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-teal-800 dark:text-white">
            <AppRegistrationIcon className="text-5xl" />
            Register akun Portal
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div>
                  <label
                    htmlFor="nama"
                    className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
                  >
                    Nama
                  </label>
                  <input
                    autoComplete="off"
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
                    autoComplete="off"
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
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="slamet@gmail.com"
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
                      autoComplete="off"
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
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
                  >
                    Konfirmasi Password
                  </label>
                  <input
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formState.confirmPassword}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-300"
                >
                  Buat akun
                </button>
              </form>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Sudah punya akun?{" "}
                <button
                  type="button"
                  onClick={handleClickLogin}
                  className="font-medium text-teal-600 hover:underline dark:text-white"
                >
                  Masuk
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
