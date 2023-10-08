import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export default function Header() {
   return (
      <nav className={`header-container ${poppins.className}`}>
         <a href="#about">Sobre mim</a>
         <a href="#occupation">Área de atuação</a>
         <a href="#contact">Entre em contato</a>
      </nav>
   );
}
