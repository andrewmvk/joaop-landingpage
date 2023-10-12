import React from "react";
import aboutImage from "../images/about-image.jpeg";
import BarsIcon from "./BarsIcon";

export default function AboutSection() {
   return (
      <div className="about section" id="about">
         <div className="section-body">
            <div className="section-title-container">
               <BarsIcon />
               <hgroup>
                  <p>Sobre mim</p>
                  <h3>JOÃO PAULO BORGES</h3>
               </hgroup>
            </div>
            <p>
               Olá! Me chamo João Paulo. Bacharel em Direito pela Pontifícia
               Universidade Católica de Goiás. Especialista Pós-Graduado em
               Direito e Saúde pelo Instituto Israelita de Ensino e Pesquisa
               Albert Einstein. Membro da Comissão de Direito e Saúde da OAB/GO.
               Focado nesta área desde o meu princípio na Advocacia, optei por
               me especializar em atuações voltadas a médicos e pacientes. Com o
               passar do tempo e experiências vividas, tive certeza que escolhi
               o ramo do Direito ideal para mim, pois, meu grande objetivo é
               impactar positivamente a vida das pessoas. Com ampla experiência
               e conhecimento na área, prezo pelo atendimento humanizado,
               pessoal e com atenção às particularidades inerentes a cada caso.
               Meus clientes contam com uma atuação diligente, visando efetivar
               a maior celeridade possível e contato direto com o profissional,
               possibilitando a relação necessária em demandas de saúde.
            </p>
         </div>
         <div className="about-image">
            <img src={aboutImage} alt="Advogado Joao Paulo" />
         </div>
      </div>
   );
}
