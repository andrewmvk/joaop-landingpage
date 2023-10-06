import React from "react";

export default function Button({ text = "Texto" }) {
   return (
      <div className="button-container">
         <p>{text}</p>
      </div>
   );
}
