import React from "react";
import BarsIcon from "./BarsIcon";
import { FaBalanceScale } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { LiaFileContractSolid } from "react-icons/lia";

const OccupationContainer = ({
   title = "TITLE",
   children = "TEXT TEXT",
   Icon = FaBalanceScale,
}) => {
   return (
      <div className="occupation-container">
         <div>
            <Icon className="occupation-icon" />
            <h4>{title}</h4>
         </div>
         <p>{children}</p>
      </div>
   );
};

export default function OcuppationSection() {
   return (
      <div className="occupation section" id="occupation">
         <div className="section-title-container">
            <BarsIcon />
            <hgroup>
               <p>Áreas de atuação</p>
               <h3>EM QUE POSSO TE AJUDAR?</h3>
            </hgroup>
         </div>
         <div className="occupation-outer-con">
            <OccupationContainer
               title="Direito dos Profissionais de Saúde"
               Icon={GiHealthNormal}
            >
               Atividade voltada para atuação junto aos Conselhos de Classe
               (Sindicâncias, Processos Éticos, Denúncias, etc) e Demandas
               Judiciais, enfatizando aspectos técnicos e científicos do
               profissional contratante.
            </OccupationContainer>
            <OccupationContainer
               title="Assessoria Jurídica na Área da Saúde"
               Icon={FaBalanceScale}
            >
               Atuação preventiva e consultiva. A atuação do advogado nesse
               sentido visa diminuir chances futuras de embates judiciais e
               auxiliar o contratante a executar suas atividades em conformidade
               com as legislações vigentes.
            </OccupationContainer>
            <OccupationContainer
               title="Judicialização de Medicamentos, Cirurgias e Tratamentos em Geral"
               Icon={AiOutlineMedicineBox}
            >
               Seja contra as Operadoras de Saúde ou o Poder Público, auxilio na
               garantia de seus direitos constitucionais e contratuais de acesso
               às terapias que melhor se enquadram à sua realidade, respeitando
               a indicação e autonomia médica.
            </OccupationContainer>
            <OccupationContainer
               title="Elaboração e Revisão de Contratos"
               Icon={LiaFileContractSolid}
            >
               As relações contratuais, principalmente aquelas envolvendo
               agentes da saúde, são regidas por normas e critérios específicos
               da legislação. A atuação do advogado nesse segmento objetiva
               elaborar e revisar contratos sob a tríade ética, direitos e
               deveres.
            </OccupationContainer>
         </div>
      </div>
   );
}
