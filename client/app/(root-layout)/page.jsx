import React from "react";
import ComingSoon from "@/components/ComingSoon";
import Benefits from "@/components/Benefits";
import MainHero from "@/components/MainHero";
import FeedBack from "@/components/FeedBack";

export const metadata = {
  title:
    "Beranda - Portal Informasi Acara & Seminar Fakultas Teknik Universitas Islam Riau",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <>
      <div id="main-hero">
        <MainHero />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="coming-soon">
        <ComingSoon />
      </div>
      <div id="feedback">
        <FeedBack />
      </div>
    </>
  );
}