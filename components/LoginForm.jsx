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
import { Modal } from "@mui/material";
import CardForgetPw from "./portal/beranda/CardForgetPw";
import { useDarkMode } from "@/context/DarkModeContext";

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
  const { handleModal } = useAppState();
  const { darkMode } = useDarkMode();
  const isDarkMode = darkMode ? "dark" : "";
  const [showPassword, setShowPassword] = React.useState(false);
  const [modal, setmodal] = React.useState({
    open: false,
    children: <div></div>,
  });
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
  function handleSetModal(opt, children) {
    switch (opt) {
      case "open":
        setmodal({ open: true, children: children });
        break;
      case "close":
        setmodal({ ...modal, open: false });
        break;
    }
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
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast(error.response.data.message, { type: "error", theme: "colored" });
    }
  }
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl lg:w-[50%] md:w-[60%] sm:w-[80%] w-[90%] max-h-screen overflow-auto">
      <div className="w-full mx-auto flex items-center justify-center">
        <div className="w-full bg-gray-200 dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-5 lg:py-10 sm:py-10">
          <div className="flex flex-col items-center mb-6 lg:text-2xl md:text-2xl font-semibold text-teal-800 dark:text-white">
            <HttpsIcon className="lg:text-5xl md:text-5xl text-4xl" />
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
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-700 font-medium rounded-lg lg:text-sm md:text-sm text-xs px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-300"
                >
                  {isLoading ? (
                    <Spinner className="w-5 h-5 text-white fill-teal-600" />
                  ) : (
                    "Masuk"
                  )}
                </button>
              </div>
            </form>
            <div className="flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-between justify-start gap-3">
              <p className="lg:text-sm md:text-sm text-xs font-light text-gray-500 dark:text-gray-400">
                Belum punya akun?{" "}
                <button
                  type="button"
                  className="font-medium text-teal-600 hover:underline dark:text-white"
                  onClick={handleClickRegister}
                >
                  Daftar
                </button>
              </p>
              <button
                className="lg:text-sm md:text-sm text-xs font-medium text-teal-600 hover:underline dark:text-white"
                onClick={() =>
                  handleSetModal(
                    "open",
                    <CardForgetPw handleSetModal={handleSetModal} />
                  )
                }
              >
                Lupa password?
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <ModalForm
        modal={modal}
        handleSetModal={handleSetModal}
        isDarkMode={isDarkMode}
      />
    </main>
  );
}

function ModalForm(porps) {
  const { modal, handleSetModal, isDarkMode } = porps;
  return (
    <Modal
      open={modal.open}
      onClose={() => handleSetModal("close")}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <div className={isDarkMode + " my-10"}>{modal.children}</div>
    </Modal>
  );
}
ModalForm.propTypes = {
  modal: PropTypes.object,
  handleSetModal: PropTypes.func,
  isDarkMode: PropTypes.string,
};
