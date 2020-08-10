import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../Pages.css'
import ButtonLink from '../../components/ButtonLink'

function Servicos() {
  return (
    <div className="Page">
     <Header />
     <div className="Primary">
     <h2 className="Title">Serviços</h2>
     <div className='Secundary'>
     <div className="Box"><h4>Elaboração do Prontuário da NR-20</h4></div>
     <div className="Box"><h4>Assessoria e Acompanhamento as Normas para os Postos de Combustível (NR-20)</h4></div>
     <div className="Box"><h4>Direcionamento de Sinalização de Segurança (NR 26)</h4></div>
     <div className="Box"><h4>Programa de Prevenção de Riscos Ambientais (PPRA)</h4></div>
     </div>
     <div className='Secundary'>
     <div className="Box"><h4>Análise Global (NR-09)</h4></div>
     <div className="Box"><h4>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</h4></div>
     <div className="Box"><h4>Laudo Técnico das Condições Ambientais de Trabalho (LTCAT)</h4></div>
     <div className="Box"><h4>Laudo de Insalubridade</h4></div>
     </div>
     <div className='Secundary'>
     <div className="Box"><h4>Laudo de Periculosidade </h4></div>
     <div className="Box"><h4>Análise Ergonômica (NR-17)</h4></div>
     <div className="Box"><h4>Procedimento Operacional Padrão (POP)</h4></div>
     <div className="Box"><h4>Perfil Profissiográfico Previdenciário (PPP)</h4></div>
     </div>
     <div className='Secundary'>
     <div className="Box"><h4>Ordem de Serviço (OS)</h4></div>
     <div className="Box"><h4>Análise Preliminar De Riscos (APR)</h4></div>
     <div className="Box"><h4>Fichas de EPI’S (NR-6)</h4></div>
     <div className="Box"><h4>Plano de Gerenciamento De Risco (PGR)</h4></div>
     </div>
     <div className='Secundary'>
     <div className="Box"><h4>Adequação da Documentação e dos Procedimentos na Revenda de Líquidos Inflamáveis (NR-20)</h4></div>
     <div className="Box"><h4>Plano de Manutenção </h4></div>
     <div className="Box"><h4>Plano de Resposta e Emergência (PRE)</h4></div>
     <div className="Box"><h4>Atendimento ao eSocial</h4></div>
     </div>
     </div>
     <Footer />
    </div>
  )
}

export default Servicos
