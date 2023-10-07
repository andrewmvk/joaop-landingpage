import React from "react";
import BarsIcon from "./BarsIcon";
import { FaBalanceScale } from "react-icons/fa";

const OccupationContainer = ({ title, text }) => {
   return (
      <div className="occupation-container">
         <div>
            <FaBalanceScale className="occupation-icon" />
            <h4>Direito Médico</h4>
         </div>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat
            ligula, tempor sed fringilla et, aliquet ut urna. Proin ac risus sed
            dui rhoncus feugiat aliquam at velit. Duis aliquam vel magna quis
            porta.
         </p>
      </div>
   );
};

export default function OcuppationSection() {
   return (
      <div className="occupation section">
         <div className="section-title-container">
            <BarsIcon />
            <hgroup>
               <p>Áreas de atuação</p>
               <h3>EM QUE POSSO TE AJUDAR?</h3>
            </hgroup>
         </div>
         <div className="occupation-outer-con">
            <OccupationContainer />
            <OccupationContainer />
            <OccupationContainer />
            <OccupationContainer />
            <OccupationContainer />
            <OccupationContainer />
         </div>
      </div>
   );
}
