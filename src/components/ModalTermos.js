import React from 'react'
import styled from 'styled-components'
import IconClose from '../assets/icons/close2.svg'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  max-height: 82vh;
  overflow-y: auto;
  position: relative;
  width: 90%;
`;

const CloseButton = styled.button`
background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const TermsText = styled.div`
  margin-top: 30px;
  font-size: 14px;

  h1{
  font-weight: 700;
  margin-bottom: 1em;
  }
`;

const ModalTermos = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <ModalOverlay>
        <ModalContent>
          <CloseButton onClick={onClose}><img src={IconClose}/></CloseButton>
          <TermsText>
          <h1 className="titulosAboutUs">Termos e Condições</h1>
        <h6>
          Damos-lhe as boas-vindas à Boomerang! Vamos começar com os princípios
          básicos
        </h6>

        <h5 style={{marginTop:"1em"}}>1. Tornar-se nosso Utilizador</h5>
        <h6>Como criar uma Conta:</h6>
        <p>
          Para criar a sua Conta e mantê-la em segurança, terá de nos fornecer o
          seu e-mail e escolher um nome de utilizador e palavra-passe únicos.
          Não é possível utilizar e-mails de uso único ou mascarados para criar
          a sua Conta.{" "}
        </p>

        <h6>Ações de verificação e segurança:</h6>
        <p>
          Durante o processo de registo da Conta e a qualquer momento durante a
          utilização dos nossos Serviços, poderemos pedir-lhe que:
          <br></br>
          <br></br>
          <ul>
            <li>
              nos ajude a verificar as informações da sua Conta (como o seu
              número de telefone, e-mail ou método de pagamento);
            </li>
            <li>forneça informações relevantes adicionais;</li>
            <li>
              corrija quaisquer informações incorretas ou incompletas na sua
              Conta.
            </li>
          </ul>
          <br></br>
          Desta forma, verificamos se é a pessoa que aceda à sua Conta e/ou faz
          transações na plataforma. Estes pedidos serão proporcionais à preocupação de
          segurança que estamos a tentar resolver. Se as informações fornecidas
          estiverem incompletas ou incorretas, ou se não cooperar com os nossos
          pedidos, poderemos bloquear a sua Conta conforme descrito mais
          adiante.
        </p>

        <h6>Restrições da Conta:</h6>
        <p>
          Só tenha permissão para ter uma Conta. Mas, se bloquearmos a sua Conta
          original porque alguém assumiu ilegalmente o respetivo controlo, pode
          criar uma nova conta para si.
        </p>

        <h6>Websites e conteúdos de terceiros:</h6>
        <p>
          Algumas funcionalidades na nossa plataforma utilizam ferramentas e serviços
          fornecidos por terceiros e são regidas pelos respetivos termos e
          condições. Forneceremos uma ligação para os termos e condições desse
          terceiro, para que possa rever e aceitar o respetivo acordo antes de
          utilizar estas funcionalidades.
        </p>

        <h5>2. Utilização das informações que partilha connosco</h5>
        <h6>Como utilizamos os seus dados pessoais:</h6>
        <p>
          Trataremos os seus dados pessoais para cumprir as nossas obrigações e
          exercer os nossos direitos ao abrigo destes Termos e para lhe
          prestarmos os nossos Serviços. Leia a nossa Política de Privacidade
          para obter mais informações sobre como recolhemos, armazenamos,
          utilizamos e protegemos os seus dados pessoais. Esforçamo-nos por
          proteger os seus dados pessoais, mas, mesmo as medidas de segurança
          mais eficazes nem sempre podem proteger contra ciberataques e garantir
          que terceiros não autorizados não encontrarão uma forma de aceder ou
          afetar os seus dados pessoais. Por isso, pondere que dados pessoais ou
          outras informações nos fornece, uma vez que esse fornecimento é da sua
          responsabilidade.
        </p>

        <h6>Como podemos utilizar os seus Conteúdos:</h6>
        <p>
          Na medida do permitido por lei, permite que nós e as Afiliadas da
          Boomerang tenham um direito não exclusivo de utilizar os seus
          Conteúdos em todo o mundo, sem contrapartida financeira, pela duração
          dos direitos aplicáveis. Isto significa que podemos copiar, apresentar
          e adaptar Conteúdos para fins operacionais, comerciais, publicitários
          ou outros fins empresariais internos e em qualquer tipo de plataforma
          ou meio de comunicação, incluindo televisão, imprensa, Internet (em
          faixas e artigos e noutros websites) e redes sociais (Facebook,
          Twitter, Instagram, etc.). Pode interromper a nossa utilização dos
          seus Conteúdos para fins publicitários a qualquer momento,
          excluindo-se desta utilização nas definições da sua Conta.
        </p>

        <h5>3. Os nossos direitos de resolver preocupações</h5>
        <h6>Tomar medidas corretivas:</h6>
        <p>
          Se descobrimos que está a fazer algo que não está de acordo com as
          regras descritas nestes Termos ou, claro, que é ilegal, poderemos
          aplicar qualquer uma das medidas corretivas indicadas abaixo:<br></br>
          <br></br>
          <ul>
            <li>
              enviar-lhe uma mensagem de aviso para lembrar que tenha de seguir
              estes Termos;
            </li>
            <li>
              retirar ou corrigir automaticamente os seus Artigos no Catálogo;
            </li>
            <li>despromover, ocultar ou retirar os seus Conteúdos da plataforma;</li>
            <li>
              ocultar mensagens privadas que tenha enviado, para que o
              destinatário pretendido não as possa ver;
            </li>
            <li>
              restringir a sua Conta, bloqueando o seu acesso a determinadas
              funcionalidades (como o envio de mensagens privadas ou a limitação
              da visibilidade dos seus Artigos para outros Utilizadores), ou
            </li>
            <li>
              notificar as autoridades locais da sua atividade se houver uma
              ameaça para a vida ou segurança de alguém.
            </li>
          </ul>
        </p>

        <h6>Bloquear a sua Conta:</h6>
        <p>
          Poderemos bloquear a sua Conta de forma temporária ou definitiva se:
        </p>
        <ul>
          <li>
            tivermos tomado uma medida corretiva indicada acima e continuar a
            violar repetidamente estes Termos,
          </li>
          <li>
            cometer uma violação grave destes Termos, o que significa:
            <ul>
              <li>
                fornecer-nos informações incorretas, falsas ou enganosas na sua
                Conta ou não manter as suas informações atualizadas,
              </li>
              <li>
                não cooperar connosco quando tentamos verificar as informações
                que nos fornece na sua Conta,
              </li>
              <li>abusar das funcionalidades da plataforma, ou</li>
            </ul>
          </li>
          <li>
            um dos cenários descritos abaixo: Ocorrência de suspeitas
            identificadas por um Fornecedor do Saldo Boomerang ou Processador de
            Pagamentos, problemas com Transações, preocupações de segurança e
            jurídicas ou ameaças a menores ou à segurança.
          </li>
        </ul>
        <p>
          E quando dizemos que “bloquearemos” a sua Conta, isto significa que:
        </p>
        <ul>
          <li>
            não poderá utilizar a plataforma, exceto para contactar a nossa equipa de
            suporte <strong>(Equipa de Suporte)</strong>;
          </li>
          <li>os seus Artigos serão retirados da plataforma e do Catálogo;</li>
          <li>
            não lhe reembolsaremos quaisquer Serviços de Vendedor que tenha
            comprado e que ainda possa estar a utilizar;
          </li>
          <li>
            pode concluir quaisquer Transações e Transferências de Fundos
            pendentes, mas, se a sua Conta for bloqueada devido a preocupações
            de segurança ou fraude suscitadas por um Fornecedor do Saldo
            Boomerang, porque a sua Conta foi comprometida ou porque é
            objetivamente necessário para proteger os interesses e direitos
            legítimos de todos os envolvidos numa Transação, podem ocorrer as
            seguintes consequências:
            <ul>
              <li>
                as suas Transações pendentes podem ser canceladas e todas as
                taxas pagas pelos Compradores serão reembolsadas aos
                Compradores, e/ou
              </li>
              <li>
                a sua capacidade de efetuar uma Transferência de Fundos poderá
                ser restringida;
              </li>
            </ul>
          </li>
          <li>poderemos impedir que crie uma nova Conta na plataforma.</li>
        </ul>

        <h6>
          Utilizar meios automatizados e agir mediante notificação das
          autoridades:
        </h6>
        <p>
          Por vezes, poderemos utilizar software ou algoritmos automatizados
          para detetar e tomar as medidas corretivas indicadas acima ou bloquear
          a sua Conta, e poderemos também agir depois de sermos devidamente
          notificados pelas Autoridades competentes.
        </p>

        <h6>As medidas corretivas ou o bloqueio serão proporcionais:</h6>
        <p>
          Apenas para esclarecer, qualquer uma das medidas descritas acima será
          proporcional à sua violação e terá em conta os seus interesses.
        </p>

        <h6>Exposição de motivos:</h6>
        <p>
          Se tomarmos uma medida corretiva indicada acima ou bloquearmos a sua
          Conta, vamos enviar-lhe uma notificação com:
        </p>
        <ul>
          <li>os motivos para o fazer;</li>
          <li>
            a restrição que aplicaremos aos seus Conteúdos ou à sua Conta;
          </li>
          <li>
            os factos e fundamentos legais em que nos baseámos para tomar a
            nossa decisão;
          </li>
          <li>
            informações sobre a utilização de meios automatizados para tomar a
            nossa decisão e
          </li>
          <li>
            informações sobre os recursos que tenha disponíveis (descritos mais
            detalhadamente na secção abaixo “As suas opções de recurso”).
          </li>
        </ul>
        <br></br>
        <p>
          No entanto, não lhe forneceremos estas informações se isso violar a
          lei ou as instruções de uma autoridade legal, perturbar uma
          investigação de fraude ou permitir que a fraude continue, ou se esta
          for considerada uma violação grave destes Termos ou dos termos e
          condições de um Fornecedor do Saldo Boomerang.
        </p>

        <h6>Tomar medidas corretivas ou bloquear sem aviso prévio:</h6>
        <p>
          Podemos tomar medidas corretivas ou bloquear o acesso à sua Conta sem
          lhe enviar uma notificação com antecedência razoável se ocorrer um dos
          cenários abaixo. Apenas lhe forneceremos uma exposição de motivos no
          momento em que tomarmos medidas:
        </p>
        <ul>
          <li>
            Suspeitas identificadas por um Fornecedor do Saldo Boomerang ou
            Processador de Pagamentos: um Fornecedor do Saldo Boomerang ou
            Processador de Pagamentos comunica-nos uma suspeita de que violou a
            lei, violou os respetivos termos e condições ou utilizou
            indevidamente a plataforma ao utilizar os respetivos serviços de pagamento
            e/ou saldo (incluindo vendas ilegais na plataforma, branqueamento de
            capitais, financiamento do terrorismo, fraude, roubo de identidade
            ou utilização de documentos falsos).
          </li>
          <li>
            Problemas com Transações: inicia um procedimento de resolução de
            litígios relativamente a uma Transação através de um Processador de
            Pagamentos e existam razões objetivas e legítimas para acreditar
            que, neste contexto, violou a lei, violou estes termos ou utilizou
            indevidamente a plataforma.
          </li>
          <li>
            Preocupações de segurança e legais: os seus Conteúdos ou utilização
            dos Serviços violam a lei, os regulamentos ou as regras de segurança
            pública ou é provável que tenham consequências graves para a saúde,
            a segurança ou os nossos interesses económicos legítimos, bem como
            os de outros Utilizadores ou terceiros. Isto pode corresponder a:
            <br></br>
            <br></br>
            <ul>
              <li>
                carregar Conteúdos que aprovem crimes contra a humanidade,
                incitem ao ódio ou à violência raciais, estejam relacionados com
                pornografia infantil ou outro assédio sexual ou ameacem
                seriamente outros Utilizadores,
              </li>
              <li>
                cometer roubo de identidade ou qualquer outro tipo de fraude ou
              </li>
              <li>
                utilizar indevidamente a plataforma de uma forma que coloque em risco
                a segurança de outros Utilizadores ou a segurança da plataforma (como
                iniciar sessão a partir de endereços IP suspeitos, praticar
                fraude ou enviar mensagens de spam a outros Utilizadores).
                Realizaremos uma investigação de fraude e avaliaremos com
                seriedade quaisquer reclamações que tenha feito.
              </li>
            </ul>
          </li>
          <li>
            Menores: se estiver a utilizar a Conta e tiver menos de 18 anos de
            idade.
          </li>
          <li>
            A lei proíbe-nos: enviar-lhe uma notificação com antecedência
            violaria uma lei, regulamento ou instrução de uma autoridade de
            aplicação da lei ou poderia colocar-nos a nós ou às Afiliadas da
            Boomerang em risco.
          </li>
          <li>
            Ameaças à segurança: existe uma ameaça à segurança ou ao
            funcionamento sem problemas do nosso sistema de TI.
          </li>
          <li>
            Violações repetidas ou graves: cometeu uma violação grave ou
            repetida destes Termos.
          </li>
        </ul>

        <h6>As suas opções de recurso:</h6>
        <p>
          Pode contestar a nossa decisão de tomar qualquer medida corretiva:
        </p>
        <ul>
          <li>
            apresentando uma reclamação através do nosso sistema. Para tal,
            clique na ligação na exposição de motivos que lhe enviámos (se
            tivermos bloqueado a sua Conta ou tomado uma medida corretiva
            indicada acima) ou noutra comunicação que lhe tenhamos enviado (se
            nos tiver notificado de Conteúdos ou de uma Conta não em
            conformidade). Analisaremos a sua reclamação assim que possível, sob
            a supervisão de pessoal qualificado,
          </li>
          <li>
            apresentando um pedido a um dos órgãos de resolução extrajudicial de
            litígios certificados ou
          </li>
          <li>
            intentando uma ação perante os tribunais nacionais ao abrigo das
            leis aplicáveis.
          </li>
        </ul>

        <h5>4. Enviar mensagens e deixar comentários</h5>
        <h6>Mensagens privadas:</h6>
        <p>
          Pode enviar uma mensagem privada a outros Utilizadores para trocar
          informações sobre um Artigo. Não pode enviar uma mensagem privada a
          outro Utilizador por qualquer outro motivo, especialmente:<br></br>
          <ul>
            <li>anúncios;</li>
            <li>
              <i>malware</i>
            </li>
            <li>
              mensagens não solicitadas ou em massa enviadas a 5 ou mais
              utilizadores e
            </li>
            <li>
              mensagens que sejam ou possam ser consideradas ilegais, obscenas,
              prejudiciais, antiéticas, ameaçadoras da segurança pública,
              impróprias ou de qualquer forma incompatíveis com os melhores
              interesses da Boomerang e dos nossos Utilizadores.
            </li>
          </ul>
        </p>
        <h6>Deixar uma avaliação:</h6>
        <p>
          Após a conclusão de uma Transação, pode optar por escrever e publicar
          uma avaliação da Transação e do outro Utilizador na nossa plataforma. Todas
          as avaliações que publicar devem ser justas e honestas. Tenha também
          em atenção que não receberá qualquer forma de compensação por deixar
          uma avaliação e não revemos nem verificamos as avaliações antes de
          serem publicadas na nossa plataforma.
        </p>

        <h5>5. Terminar a nossa relação</h5>
        <h6>Pode terminar a nossa relação:</h6>
        <p>
          Pode terminar a sua relação com a Boomerang e interromper a sua
          utilização dos nossos Serviços a qualquer momento e gratuitamente,
          eliminando a sua Conta.
        </p>

        <h6>Nós também podemos:</h6>
        <p>
          Também podemos cessar estes termos a qualquer momento e por qualquer
          motivo, enviando-lhe uma notificação por escrito com 30 dias de
          antecedência.
        </p>

        <h6>O que acontece então:</h6>
        <p>
          Estes Termos serão aplicáveis até que quaisquer Transações e
          Transferências de Fundos pendentes sejam concluídas.
        </p>

<h5>6. Publicar um Artigo na Boomerang</h5>
<h6>O que pode colocar a alugar: </h6>
<p> 
O Artigo que pretende alugar tem de:<br></br>
<ul>
<li>cumprir as Regras de Aluguer: garantir que a peça volte com as mesmas condições com que foi alugada e se o utilizador escolher a lavagem da peça por conta própria terá que cumprir com essa escolha;</li>
<li>cumprir as restrições e os requisitos de artigos proibidos do Processador de Pagamentos, se aplicável;</li>
<li>não ser algo que comprou originalmente a granel ou como produto para venda direta (ou seja, não tenha fisicamente o Artigo) com um valor de revenda baixo. </li>
</ul>
</p>

<h6>Anunciar um Artigo:</h6>
<p>Para anunciar um Artigo na nossa plataforma, o utilizador tem de tirar e carregar uma fotografia e escrever uma descrição (nenhuma das duas pode ser retirada da Internet) do Artigo que reflitam com precisão a sua qualidade e aparência (incluindo quaisquer defeitos ou alterações). Assim que o seu Artigo estiver anunciado no Catálogo e publicado na Boomerang, significa que apresentou oficialmente uma oferta que pode ser aceite por outro utilizador.</p>

<h6>Retirar o seu anúncio:</h6>
<p>Pode retirar um anúncio a qualquer momento a não ser que a peça estiver a ser alugada.</p>

<h5>7. Alugar um Artigo</h5>

        <h6>Como alugar um Artigo:</h6>
        <p>Para alugar um Artigo do Catálogo, tem de:</p>
        <ul>
            <li>clicar no botão de aluguer;</li>
            <li>selecionar um método de pagamento e uma opção de entrega, e</li>
            <li>clicar no botão de pagamento na página de finalização da compra.</li>
        </ul>

        <h6>Quanto pagará:</h6>
        <p>Por cada Transação, irá pagar as seguintes taxas que serão retidas no Depósito de Garantia:</p>
        <ul>
            <li>Preço do Artigo;</li>
            <li>Taxa de Envio;</li>
            <li>Taxa de Proteção do Comprador;</li>
            <li>Opções Sustentáveis, se aplicável.</li>
        </ul>

        <h6>O que acontece a seguir?</h6>
        <p>Receberemos atualizações da transportadora e comunicar-lhe-emos a data em que o Artigo deveria ter sido entregue (ou se parecer que o Artigo foi perdido). Leia mais sobre o processo no capítulo abaixo.</p>

        <h6>Acompanhamento da encomenda e transportadoras:</h6>
        <p>Você pode acompanhar o estado do percurso do Artigo na plataforma, que se baseia nas informações fornecidas pela transportadora. Na medida do permitido por lei, nós e a Boomerang Go rejeitamos qualquer responsabilidade se a transportadora fornecer informação de envio imprecisa, incompleta ou desatualizada. O tempo de entrega do Artigo dependerá da transportadora utilizada. As transportadoras efetuarão a entrega do Artigo. Não somos uma transportadora e/ou um fornecedor de serviços postais e não lidamos fisicamente, fazemos a triagem, entregamos ou processamos de outra forma um Artigo alugado na Boomerang.</p>


<hr/>
        <h1>EM RESUMO - Termos Finais Importantes</h1>
        <h5>8. O que verá na nossa plataforma</h5>
        <h6>Somos proprietários da nossa plataforma:</h6>
        <p>Nós, as Afiliadas da Boomerang e/ou os nossos licenciantes detemos todos os direitos de propriedade intelectual sobre a plataforma, incluindo o respetivo sistema, esquema, software, marcas comerciais e nomes de domínio.</p>

        <h6>Garantia de conformidade:</h6>
        <p>Se residir na União Europeia, beneficia de uma garantia legal de conformidade para os nossos serviços digitais. Isto significa que somos responsáveis perante si se o serviço digital não estiver em conformidade quando lhe é fornecido e se detetar essa situação num prazo de 2 anos, ou se essa não conformidade se tornar evidente ao longo do tempo durante o fornecimento contínuo do serviço digital. Para fazer uma reclamação, siga o processo descrito abaixo em “Como serão tratados os litígios”.</p>

        <h6>Disponibilidade da Plataforma:</h6>
        <p>Não somos responsáveis por interrupções na disponibilidade da nossa plataforma devido a manutenção ou quaisquer eventos que estejam fora do nosso controlo razoável. Tendo em conta os interesses legítimos dos Utilizadores e, se possível, com base em fatores relevantes (como a segurança da plataforma), tentaremos:</p>
        <ul>
            <li>enviar-lhe informações sobre restrições de disponibilidade planeadas ou existentes;</li>
            <li>planear o tempo de inatividade fora das horas de utilização de pico, e</li>
            <li>limitar o tempo de inatividade para manutenção regular a um período de tempo razoável, de acordo com as normas do mercado.</li>
        </ul>
        <h5>9. As suas e as nossas responsabilidades</h5>
        <h6>As suas responsabilidades:</h6>
        <p>Ao utilizar a nossa plataforma e os nossos Serviços, é responsável:</p>
        <ul>
            <li>pelos seus Conteúdos e quaisquer ações na plataforma que ocorram na sua Conta;</li>
            <li>por todos os Artigos anunciados, vendidos e transferidos por si para os Compradores (incluindo quaisquer declarações que faça sobre os Artigos);</li>
            <li>pelas avaliações publicadas e</li>
            <li>por quaisquer litígios resultantes das suas ações.</li>
        </ul>
          </TermsText>
        </ModalContent>
      </ModalOverlay>
    );
  };
export default ModalTermos