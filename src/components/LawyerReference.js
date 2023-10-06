import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { PiShootingStarBold } from "react-icons/pi";

const InnerContainer = ({ title, description, children }) => {
   return (
      <div className="lawyer-innercontainer">
         <div className="icon">{children}</div>
         <h4>{title}</h4>
         <p>{description}</p>
      </div>
   );
};

export default function LawyerReference() {
   return (
      <div className="lawyer-container">
         <h2>Referência Nacional em Direito</h2>
         <div className="icon-container">
            <div className="vertical-line" />
            <IoIosArrowForward className="arrow-right" />
         </div>

         <InnerContainer
            title="Disponibilidade imediata"
            description="A agilidade e conforto que você precisa em um só lugar;"
         >
            <AiOutlineClockCircle />
         </InnerContainer>
         <InnerContainer
            title="Experiência"
            description="Confiança de ter sua ação conduzida por um profissional experiente;"
         >
            <FaBalanceScale />
         </InnerContainer>
         <InnerContainer
            title="Advocacia de referência"
            description="Garantia de estar com um profissional exemplar no mercado jurídico."
         >
            <PiShootingStarBold />
         </InnerContainer>
      </div>
   );
}
