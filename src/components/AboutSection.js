import React from "react";
import Image from "next/image";
import BarsIcon from "./BarsIcon";

export default function AboutSection() {
   return (
      <div className="about-container">
         <div className="section-body">
            <div className="section-title-container">
               <BarsIcon />
               <div>
                  <p>Sobre mim</p>
                  <h3>JOÃO PAULO BORGES</h3>
               </div>
            </div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
               erat ligula, tempor sed fringilla et, aliquet ut urna. Proin ac
               risus sed dui rhoncus feugiat aliquam at velit. Quisque maximus
               urna nisl, quis dapibus arcu aliquam sed. Duis lobortis
               condimentum rutrum. Integer fermentum odio tortor, eu viverra
               ligula finibus in. Vestibulum rutrum pretium accumsan. Integer
               tristique tempus malesuada. Etiam finibus vitae dolor quis
               interdum. Duis aliquam vel magna quis porta. Vivamus lacinia
               metus ligula, et placerat augue condimentum vitae. Nam ultricies
               hendrerit ligula, non euismod purus feugiat sodales. Lorem ipsum
               dolor sit amet, consectetur adipiscing elit. Nunc erat ligula,
               tempor sed fringilla et, aliquet ut urna. Proin ac risus sed dui
               rhoncus feugiat aliquam at velit. Duis aliquam vel magna quis
               porta. Vivamus lacinia metus ligula, et placerat augue
               condimentum vitae.
            </p>
         </div>
         <div className="about-image">
            <Image
               src="/main-image.png"
               alt="Advogado Joao Paulo"
               quality={100}
               priority
               fill
            />
         </div>
      </div>
   );
}
