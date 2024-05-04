export default function data() {
  const navbarMenu = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Acara",
      link: "/all-events",
    },
    {
      name: "Seminar",
      link: "/all-seminars",
    },
    {
      name: "Galeri",
      link: "/gallery",
    },
    {
      name: "Kontak",
      link: "/contact-us",
    },
  ];
  const navSettings = [
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Account",
      link: "/account",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Logout",
      link: "/logout",
    },
  ];
  const prodi = [
    {
      name: "Teknik Sipil",
      link: "/prodi/teknik-sipil",
    },
    { name: "Teknik Perminyakan", link: "/prodi/teknik-perminyakan" },
    { name: "Teknik Mesin", link: "/prodi/teknik-mesin" },
    { name: "Teknik PWK", link: "/prodi/teknik-pwk" },
    { name: "Teknik Informatika", link: "/prodi/teknik-informatika" },
    { name: "Teknik Geologi", link: "/prodi/teknik-geologi" },
  ];
  const layanan = [
    {
      name: "Universitas Islam Riau",
      link: "/pendaftaran",
    },
    {
      name: "Fakultas Teknik",
      link: "/pendaftaran",
    },
    {
      name: "Biro Administrasi dan Akademik Kemahasiswaan",
      link: "/pendaftaran",
    },
    {
      name: "Biro Sistem Informasi dan Komputasi",
      link: "/pendaftaran",
    },
  ];
  const logo = "/Logo_UIR.svg";
  const fakultas = "Fakultas Teknik";
  const universitas = "Universitas Islam Riau";
  return {
    navbarMenu,
    navSettings,
    logo,
    fakultas,
    universitas,
    prodi,
    layanan,
  };
}
