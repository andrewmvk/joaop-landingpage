import React from "react";
import BarsIcon from "./BarsIcon";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiWhatsappFill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";

const ContactForm = () => {
   return (
      <form>
         <input type="text" placeholder="Nome completo" className="input" />
         <input type="tel" placeholder="Telefone" className="input" />
         <input type="email" placeholder="Email" className="input" />
         <textarea type="text" placeholder="Mensagem" className="input" />
         <button className="button-container">Solicitar atendimento</button>
      </form>
   );
};

export default function ContactSection() {
   return (
      <div className="contact section">
         <div className="section-title-container">
            <BarsIcon />
            <hgroup>
               <p>Entre em contato</p>
               <h3>CONVERSE COMIGO</h3>
            </hgroup>
         </div>
         <div className="contact-body">
            <ContactForm />
            <div className="secondary-contacts">
               <div>
                  <p>Saiba mais sobre mim</p>
                  <div className="contacts-icons">
                     <AiOutlineInstagram className="icon" />
                     <TiSocialLinkedin className="icon" />
                  </div>
               </div>
               <div>
                  <p>Faça uma ligação</p>
                  <button className="button-container">
                     <BiSolidPhone />
                     (62) 4002-8922
                  </button>
               </div>
               <div>
                  <p>Mande uma mensagem</p>
                  <button className="button-container">
                     <RiWhatsappFill />
                     Whatsapp
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
