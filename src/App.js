import logo from "./images/logo.png";
import Header from "./components/Header";
import LawyerReference from "./components/LawyerReference";
import AboutSection from "./components/AboutSection";
import OccupationSection from "./components/OccupationSection";
import ContactSection from "./components/ContactSection";
import mainImage from "./images/main-image.png";
import "./App.css";

function App() {
   return (
      <main className="inter">
         <div className="headerCon">
            <img
               src={logo}
               alt="Logo: O Direito de Viver Bem"
               className="logo"
               width={100}
               height={100}
            />
            <Header />
            <div className="mainImgCon">
               <img src={mainImage} alt="Advogado Joao Paulo" />
            </div>
            <div className="mainDetails">
               <h1>João Paulo Borges</h1>
               <h2>
                  Especialista em <span>DIREITO MÉDICO</span> e da{" "}
                  <span>SAÚDE</span>
               </h2>
               <a href="#contact" className="button-container">
                  Entre em contato
               </a>
            </div>
         </div>
         <LawyerReference />
         <AboutSection />
         <OccupationSection />
         <ContactSection />
      </main>
   );
}

export default App;
