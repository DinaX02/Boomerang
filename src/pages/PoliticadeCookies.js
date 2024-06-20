import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.4em;
  padding-right: 1.4em;

  .titulosAboutUs {
    margin-top: 1em;
    font-size: xx-large;
  }

  h5 {
    margin-bottom: 1em;
  }

  h6 {
    margin-bottom: 1em;
  }
  li {
    margin-bottom: 1em;
  }
    a{
    color: #2e2e2e;
    }
`;

const PoliticadeCookies = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header name="Política de Cookies" />
      <ContainerInfo>
        <h1 className="titulosAboutUs">Política de Cookies</h1>
        <p>
          Quando use o Website ou a App da Boomerang (em conjunto “Plataforma”),
          nós e os nossos parceiros poderemos guardar e/ou aceder a informações
          no seu dispositivo, através de cookies ou de tecnologias semelhantes,
          para tratar dados pessoais. Esta Política de Cookies tem por
          objetivo explicar o que são os cookies, como são usados na nossa
          Plataforma e como pode geri-los.<br></br>
        </p>
        <p>
          Para informações gerais sobre as práticas da Boomerang relativamente a
          dados, leia a nossa Política de Privacidade. Os termos iniciados em
          maiúscula, utilizados na presente Política de Cookies, possuem o mesmo
          significado que na Política de Privacidade.
        </p>

        <h5>1. O que são os cookies?</h5>
        <p>
          Os cookies são pequenos ficheiros de texto que são armazenados pelo
          navegador no seu dispositivo (por exemplo, computador, telemóvel,
          tablet) quando navega em websites. Outras tecnologias, incluindo
          quaisquer meios para armazenar dados no seu navegador ou dispositivo,
          identificadores associados ao seu dispositivo e outro software, são
          utilizadas para fins semelhantes. São amplamente usados para que os
          websites funcionem de forma melhor e mais eficiente. Nesta Política de
          Cookies, referimo-nos a todas estas tecnologias como “cookies”.
          <br></br>
          <br></br>
          Salvo indicação em contrário, os cookies que utilizamos são
          necessários para o funcionamento e o desempenho da Plataforma
          Boomerang. Isto inclui cookies que lhe permitam registar-se nas áreas
          protegidas da nossa plataforma, comprar um artigo ou utilizar o
          sistema de pagamento eletrónico. Alguns cookies são eliminados do seu
          dispositivo após o final da sessão do navegador (cookies de sessão).
          As informações guardadas nos cookies necessários serão utilizadas por
          nós apenas para fornecer os serviços e funções solicitados.
        </p>

        <h5>2. Por que motivo utilizam cookies?</h5>
        <p>
          Utilizamos cookies para:
          <br></br>
          <br></br>
          <ul>
            <li>
              Fazer com que a nossa Plataforma funcione como esperado por si{" "}
            </li>
            <li>Melhorar a velocidade/segurança da plataforma</li>

            <li>
              Reconhecer os utilizadores quando voltam a visitar a nossa
              plataforma. Isto ajuda-nos a personalizar o nosso conteúdo para si
              e a anotar as suas preferências (os chamados “cookies de
              funcionamento”)
            </li>

            <li>
              Reconhecer quantos visitantes visitam a nossa plataforma e como se
              comportam quando estão aqui. Isto ajuda-nos a melhorar a
              funcionalidade da nossa Plataforma, por exemplo, garantindo que os
              utilizadores podem encontrar o que procuram (os chamados “cookies
              de desempenho”).
            </li>

            <li>
              Registar a sua visita à nossa Plataforma, que páginas visita e
              quais as ligações em que clica. Utilizamos estas informações para
              adaptar a nossa plataforma e a publicidade que lhe apresentamos
              aos seus interesses. Se nos der a sua permissão para lhe enviarmos
              e-mails de marketing, também utilizaremos estas informações para
              lhe enviar e-mails de marketing personalizados (os chamados
              “cookies de segmentação”)
            </li>

            <li>
              Permitir-lhe partilhar páginas em redes sociais como o Facebook ou
              o Instagram (os chamados “cookies de partilha e rastreamento de
              conteúdo em plugins de redes sociais”, que, em última instância,
              recaem na categoria de cookies direcionados).
            </li>
          </ul>
        </p>

        <h5>3. Como posso gerir cookies?</h5>
        <p>
          Ao visitar a Plataforma pela primeira vez, ou se a visitar depois de
          ter passado muito tempo, ou se navegar no nosso Website em modo
          privado (anónimo), irá ver uma notificação de cookies na parte
          inferior da janela e poderá aceitar todos os cookies ou configurar as
          preferências de cookies, escolhendo os tipos de cookies que gostaria
          de ter no seu dispositivo. Também poderá, a qualquer momento, alterar
          as definições de cookies na App clicando em Perfil ▸Definições de
          Cookies ou, se estiver a navegar no nosso Website, clicando em
          Definições de Cookies na parte inferior da página.
          <br></br>
          <br></br>
          Pode configurar o navegador para recusar alguns ou todos os cookies ou
          para solicitar a sua permissão antes de os aceitar. Tenha em atenção
          que, ao eliminar cookies ou ao desativar futuros cookies, poderá não
          ser possível aceder a determinadas áreas ou funcionalidades da nossa
          aplicação. Para mais informações sobre como ajustar ou alterar as
          definições do seu navegador, visite:</p>
          <ul>
            <li>
          <a
            href="http://www.aboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutcookies.org
          </a></li>
          <li>
          <a
            href="http://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.allaboutcookies.org
          </a></li>
          </ul>


        <h5>4. Que cookies são utilizados?</h5>
        <h6>Lista de cookies</h6>
        <p>
          Um cookie é um pequeno pedaço de dados (ficheiro de texto) que um site
          - quando visitado por um utilizador - pede ao seu navegador para
          armazenar no seu dispositivo, a fim de lembrar informações sobre si,
          tais como a sua preferência de idioma ou informações de login. Esses
          cookies são definidos por nós e são chamados de cookies primários.
          Também usamos cookies de terceiros - que são cookies de um domínio
          diferente do domínio do site que está a visitar - para as nossas
          iniciativas de publicidade e marketing. Mais especificamente,
          utilizamos cookies e outras tecnologias de localização para os
          seguintes fins:
          <br></br>
          <br></br>
        </p>
        <h6>Cookies estritamente necessários</h6>
        <p>
          Estes cookies são necessários para que o website funcione e não podem
          ser desligados nos nossos sistemas. Normalmente, eles só são
          configurados em resposta a ações levadas a cabo por si e que
          correspondem a uma solicitação de serviços, tais como definir as suas
          preferências de privacidade, iniciar sessão ou preencher formulários.
          Pode configurar o seu navegador para bloquear ou alertá-lo(a) sobre
          esses cookies, mas algumas partes do website não funcionarão. Estes
          cookies não armazenam qualquer informação pessoal identificável.
        </p>

        <h6>Armazenar e/ou aceder a informações num dispositivo</h6>
        <p>
          Cookies, identificadores de dispositivos ou identificadores online
          semelhantes (por exemplo, identificadores baseados em início de
          sessão, identificadores atribuídos aleatoriamente, identificadores
          baseados na rede) juntamente com outras informações (por exemplo, tipo
          de navegador e informações, idioma, tamanho do ecrã, tecnologias
          suportadas, etc.) podem ser armazenados ou lidos no seu dispositivo
          para reconhecê-lo sempre que se ligar a uma aplicação ou a um site,
          para uma ou várias das finalidades aqui apresentadas.
        </p>

        <h6>
          Garantir a segurança, evitar e detetar a fraude, e corrigir erros
        </h6>
        <p>
          Os seus dados podem ser utilizados para monitorizar e prevenir
          atividades incomuns e possivelmente fraudulentas (por exemplo, no que
          se refere à publicidade, cliques em anúncios por “bots”) e garantir
          que os sistemas e processos funcionam de forma adequada e segura.
          Também podem ser utilizados para corrigir quaisquer problemas que o
          utilizador, o editor ou o anunciante possam encontrar no âmbito da
          disponibilização de conteúdos e anúncios e na sua interação com os
          mesmos.
        </p>

        <h6>Fazer corresponder e combinar dados de outras fontes de dados</h6>
        <p>
          As informações sobre a sua atividade neste serviço podem ser
          comparadas e combinadas com outras informações relacionadas consigo e
          provenientes de várias fontes (por exemplo, a sua atividade num
          serviço online separado, a sua utilização de um cartão de fidelização
          na loja ou as suas respostas a um inquérito), para apoiar as
          finalidades explicadas neste aviso.
        </p>

        <h6>Ligar dispositivos diferentes</h6>
        <p style={{marginBottom: "2em"}}>
          Para apoiar as finalidades explicadas neste aviso, o seu dispositivo
          pode ser considerado como provavelmente ligado a outros dispositivos
          que lhe pertencem ou ao seu agregado familiar (por exemplo, porque
          tenha sessão iniciada no mesmo serviço no telefone e no computador, ou
          porque pode usar a mesma ligação à Internet em ambos os dispositivos).
        </p>
      </ContainerInfo>
    </div>
  );
};

export default PoliticadeCookies;
