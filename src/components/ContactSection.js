import React from "react";
import BarsIcon from "./BarsIcon";
import emailjs from "@emailjs/browser";
import { AiOutlineInstagram, AiOutlineCheck } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";

const FormFeedback = ({ closeFeedback }) => {
   return (
      <div className="form-feedback">
         <div className="feedback-icon">
            <AiOutlineCheck />
         </div>
         <h3>EMAIL ENVIADO</h3>
         <p>Os dados foram enviados, você será contactado(a) em breve!</p>
         <button className="button-container" onClick={closeFeedback}>
            OK
         </button>
      </div>
   );
};

const ContactForm = ({ showFeedback }) => {
   const [form, setForm] = React.useState({
      name: "",
      phone: "",
      email: "",
      message: "",
   });
   const formRef = React.useRef();

   const sendEmail = e => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_a88o88l",
            "template_skt75te",
            formRef.current,
            "aIddVbOPXHrrKWRrD"
         )
         .then(
            result => {
               console.log("message sent", result.text);
               showFeedback();
               setForm({
                  name: "",
                  phone: "",
                  email: "",
                  message: "",
               });
            },
            error => {
               console.log(error.text);
            }
         );
   };

   const formatPhoneNumber = event => {
      const removedLetters = event.target.value.replace(/[^\d]/g, "");
      let value = removedLetters;

      if (value.length < 10 && value.length > 2) {
         value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length === 10) {
         value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
            6
         )}`;
      } else if (value.length === 11) {
         value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
            7
         )}`;
      }

      setForm({ ...form, phone: value });
   };

   return (
      <form ref={formRef} onSubmit={sendEmail}>
         <input
            type="text"
            name="from_name"
            maxLength="100"
            placeholder="Nome completo"
            className="input"
            onChange={event => setForm({ ...form, name: event.target.value })}
            value={form.name}
            required
         />
         <input
            type="tel"
            name="phone"
            maxLength="15"
            placeholder="Telefone"
            className="input"
            onChange={formatPhoneNumber}
            value={form.phone}
            required
         />
         <input
            type="email"
            name="email"
            maxLength="60"
            placeholder="Email"
            onChange={event => setForm({ ...form, email: event.target.value })}
            value={form.email}
            className="input"
            required
         />
         <textarea
            type="text"
            maxLength="1000"
            name="message"
            placeholder="Mensagem"
            onChange={event =>
               setForm({ ...form, message: event.target.value })
            }
            value={form.message}
            className="input"
            required
         />
         <button className="button-container" type="submit">
            Solicitar atendimento
         </button>
      </form>
   );
};

export default function ContactSection() {
   const [showingFeedback, setShowingFeedback] = React.useState(false);

   const showFeedback = (show = true) => {
      setShowingFeedback(show);
   };

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
            <ContactForm showFeedback={showFeedback} />
            <div className="secondary-contacts">
               <div>
                  <p>Saiba mais sobre mim</p>
                  <div className="contacts-icons">
                     <a
                        href="https://www.instagram.com/advjoaopauloborges/"
                        target="_blank"
                        rel="noreferrer"
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
                     rel="noreferrer"
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
                     rel="noreferrer"
                  >
                     <RiWhatsappFill />
                     Whatsapp
                  </a>
               </div>
            </div>
         </div>
         {showingFeedback ? (
            <FormFeedback closeFeedback={() => showFeedback(false)} />
         ) : null}
      </div>
   );
}
