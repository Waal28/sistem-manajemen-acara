import React from "react";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginForm, { Visible } from "./LoginForm";
import { useAppState } from "@/context/AppStateContext";
import { toast } from "react-toastify";
import staticData from "@/staticData";
import axios from "axios";
import Spinner from "./Spinner";

export default function RegisterForm() {
  const { handleModal } = useAppState();
  const { prodi } = staticData;
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [formState, setFormState] = React.useState({
    nama: "",
    npm: "",
    email: "",
    prodi: "Teknik Informatika",
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
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("/api/auth/portal-register", formState);

      setIsLoading(false);
      toast(`${res.data.message}, silahkan login`, {
        type: "success",
        theme: "colored",
      });
      handleModal("open", <LoginForm />);
    } catch (error) {
      setIsLoading(false);
      toast(error.response.data.message, { type: "error", theme: "colored" });
    }
    console.log(formState);
  }
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl lg:w-[50%] md:w-[60%] sm:w-[80%] w-[90%] max-h-screen overflow-auto">
      <div className="w-full mx-auto flex items-center justify-center">
        <div className="w-full bg-gray-200 dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-5 lg:py-10 sm:py-10">
          <div className="flex flex-col items-center mb-6 lg:text-2xl md:text-2xl font-semibold text-teal-800 dark:text-white">
            <AppRegistrationIcon className="lg:text-5xl md:text-5xl text-4xl" />
            Register akun Portal
          </div>
          <div className="w-full lg:w-[80%] md:w-[80%] sm:w-[80%] p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <form
              className="w-full space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <section className="w-full">
                  <label
                    htmlFor="nama"
                    className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
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
                    className="w-full bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-600"
                    placeholder="Slamet Kopling"
                    required
                  />
                </section>
                <section>
                  <label
                    htmlFor="npm"
                    className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
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
                    className="w-full bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-600"
                    placeholder="6969696969"
                    required
                  />
                </section>
                <section>
                  <label
                    htmlFor="email"
                    className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
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
                    className="w-full bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-600"
                    placeholder="slamet@gmail.com"
                    required
                  />
                </section>
                <section>
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
                    {prodi.map((prodi) => (
                      <option key={prodi.name} value={prodi.name}>
                        {prodi.name}
                      </option>
                    ))}
                  </select>
                </section>
                <section>
                  <label
                    htmlFor="password"
                    className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
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
                      className="w-full bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-600"
                      placeholder="••••••••"
                      required
                    />
                    <Visible
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                    />
                  </div>
                </section>
                <section>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 lg:text-sm md:text-sm sm:text-sm text-xs font-medium text-teal-800 dark:text-white"
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
                    className="w-full bg-gray-50 border border-gray-300 text-teal-800 lg:text-sm md:text-sm sm:text-sm text-xs rounded-lg focus:ring-teal-600 focus:border-teal-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-600"
                    placeholder="••••••••"
                    required
                  />
                </section>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-700 font-medium rounded-lg lg:text-sm md:text-sm text-xs px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-300"
              >
                {isLoading ? (
                  <Spinner className="w-5 h-5 text-white fill-teal-600" />
                ) : (
                  "Daftar"
                )}
              </button>
            </form>

            <p className="lg:text-sm md:text-sm text-xs font-light text-gray-500 dark:text-gray-400">
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
    </main>
  );
}
