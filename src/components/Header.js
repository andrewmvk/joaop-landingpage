import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export default function Header() {
   return (
      <div className={`header-container ${poppins.className}`}>
         <a>Sobre mim</a>
         <a>Área de atuação</a>
         <a>Entre em contato</a>
      </div>
   );
}
