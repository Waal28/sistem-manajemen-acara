"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import SwitchDarkMode from "./SwitchDarkMode";
import staticData from "@/staticData";
import { useAppState } from "@/context/AppStateContext";
import Cookies from "js-cookie";
import Profile from "./portal/profile/Profile";

// Fungsi untuk menambahkan efek naik ketika digulir
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// Komponen Navbar
export default function Navbar({ pages, settings, children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logo, fakultas, universitas } = staticData;
  const { isLogin, handleIsLogin, handleModal } = useAppState();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Handler untuk membuka menu navigasi
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Handler untuk membuka menu pengguna
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Handler untuk menutup menu navigasi
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Handler untuk menutup menu pengguna
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Handler untuk menu navigasi
  const handleNavigate = (route) => {
    handleCloseUserMenu();

    if (route === "/logout") {
      Cookies.remove("token");
      handleIsLogin("portal", false);
      router.push("/");
    } else if (route === "/profile") {
      handleModal("open", <Profile />);
    } else {
      router.push(route);
    }
  };
  return (
    <>
      <CssBaseline />
      {/* Menerapkan efek naik ketika digulir */}
      <ElevationScroll>
        <AppBar className="py-3 bg-gradient-to-r from-teal-900 from-2% via-teal-700 via-50% to-teal-900 to-98%">
          <Toolbar>
            {/* Logo */}
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
              <Image
                src={logo}
                alt="Logo UIR"
                width={0}
                height={0}
                className="w-12 h-auto"
              />
            </Box>

            {/* Nama Fakultas */}
            <Box sx={{ display: { xs: "none", md: "block" }, mr: 5 }}>
              <p className="text-xs tracking-wider font-medium text-white">
                Portal Informasi Acara
              </p>
              <Link
                href="/"
                className="text-white text-2xl font-extrabold no-underline font-georgia"
              >
                {fakultas}
              </Link>
              <p className="text-xs tracking-widest font-semibold text-white font-georgia">
                {universitas}
              </p>
            </Box>

            {/* Tombol Menu untuk Tampilan Mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon className="text-white" />
              </IconButton>

              {/* Menu Navigasi untuk Tampilan Mobile */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" }, mt: "10px" }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link
                      href={page.link}
                      className="text-custom-secondary text-center"
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo dan Nama Fakultas untuk Tampilan Mobile */}
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box className="mr-3">
                <Image
                  src={logo}
                  alt="Logo UIR"
                  width={0}
                  height={0}
                  className="w-10 h-auto"
                />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <p className="text-xs tracking-wider font-medium text-white">
                  Portal Informasi Acara
                </p>
                <Link
                  href="/"
                  className="text-base font-semibold no-underline text-white font-georgia"
                >
                  {fakultas}
                </Link>
                <p className="text-xs tracking-widest font-medium text-white font-georgia">
                  {universitas}
                </p>
              </Box>
            </Box>

            {/* Tombol Menu Navigasi untuk Tampilan Desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  href={page.link}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  className={`py-2 px-3 tracking-tight font-medium uppercase block my-2 text-white hover:underline hover:underline-offset-8 ${
                    pathname === page.link && "underline underline-offset-8"
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </Box>

            {/* Tombol Dark Mode dan Avatar Pengguna */}
            <Box sx={{ flexGrow: 0 }}>
              <Stack direction="row">
                {isLogin.portal ? (
                  <>
                    <Box
                      sx={{
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <SwitchDarkMode />
                    </Box>
                    <Tooltip title="Menu Pengguna">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                        />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <SwitchDarkMode />
                )}
              </Stack>

              {/* Menu Pengguna */}
              <Menu
                sx={{ mt: "54px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem sx={{ display: { xs: "block", md: "none" } }}>
                  <SwitchDarkMode />
                </MenuItem>
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => handleNavigate(setting.link)}
                  >
                    <button className="text-custom-secondary text-center">
                      {setting.name}
                    </button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box sx={{ mt: 5, mb: 2 }} className="min-h-screen">
        {children}
      </Box>
    </>
  );
}

Navbar.propTypes = {
  pages: PropTypes.array,
  settings: PropTypes.array,
  children: PropTypes.node,
};
