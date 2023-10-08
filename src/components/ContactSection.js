import React from "react";
import BarsIcon from "./BarsIcon";
import { AiOutlineInstagram } from "react-icons/ai";
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
      <div className="contact section" id="contact">
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
                     <a
                        href="https://www.instagram.com/advjoaopauloborges/"
                        target="_blank"
                     >
                        <AiOutlineInstagram className="icon" />
                     </a>
                  </div>
               </div>
               <div>
                  <p>Faça uma ligação</p>
                  <a
                     className="button-container"
                     href="tel:+5562993474628"
                     target="_blank"
                  >
                     <BiSolidPhone />
                     (62) 99347-4628
                  </a>
               </div>
               <div>
                  <p>Mande uma mensagem</p>
                  <a
                     target="_blank"
                     className="button-container"
                     href="https://whatsa.me/5562993474628"
                  >
                     <RiWhatsappFill />
                     Whatsapp
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
