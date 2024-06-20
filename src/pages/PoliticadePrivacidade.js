import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  a {
    color: #2e2e2e;
  }
`;

const PoliticadePrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header name="Política de Privacidade" />
      <ContainerInfo>
        <h1 className="titulosAboutUs">Política de Privacidade</h1>
        <p>
          No que diz respeito aos seus dados pessoais, a segurança e a
          transparência têm a máxima prioridade na Boomerang. Para ajudar a
          compreender quais as informações que recolhemos sobre si, como as que
          utilizámos e quais são os seus direitos, preparámos esta Política de
          Privacidade detalhada.<br></br>
        </p>
        <h5>1. Geral</h5>
        <p>
          Esta Política de Privacidade aplica-se à plataforma online Boomerang
          (“Website”) e à aplicação associada (“App”) (o Website e a App são
          denominadas em conjunto por “Plataforma”). <br></br>
          <br></br>O responsável pelo tratamento dos seus dados pessoais é a
          Boomerang, 3800-000 Aveiro, República Portuguesa. Daqui para a frente,
          o responsável pelo tratamento dos dados é identificado como “Nós”, “A
          nós”, “Nosso” ou “Boomerang”. Pode encontrar mais informação sobre
          como nos contactar no final desta Política de Privacidade, no número
          7. <br></br>
          <br></br>
          Quando esta Política de Privacidade se referir a destinatários de
          dados ou ações de marketing direto, o Grupo Boomerang inclui as
          seguintes entidades: Boomerang, Lda; Boomerang Limitada.<br></br>
          <br></br>
          Levamos a sua privacidade muito a sério. Todos os dados pessoais serão
          recolhidos, armazenados e utilizados por nós de acordo com o
          Regulamento Geral de Proteção de Dados n.º 2016/679 (“RGPD”) da União
          Europeia e/ou outros regulamentos legais aplicáveis.<br></br>
          <br></br>
          Os serviços oferecidos por nós através do Website e/ou da App só podem
          funcionar se recolhermos, armazenarmos, transferirmos, eliminarmos
          e/ou de outra forma utilizarmos (“recolha e utilização”) dados
          específicos relacionados consigo (“dados pessoais” ou “dados”). Dados
          pessoais significa todas as informações relacionadas com uma pessoa
          singular identificada ou identificável, como o seu nome, data de
          nascimento, morada ou endereço de e-mail.<br></br>
          <br></br>A presente Política de Privacidade descreve quais dos seus
          dados são recolhidos por nós e para que fins os recolhermos e usamos
          quando utiliza os serviços que oferecemos na Plataforma. Esta Política
          de Privacidade também contém informações importantes sobre a proteção
          dos seus dados, especialmente os direitos legais que tenha em relação
          aos mesmos.<br></br>
          <br></br>
          Determinados serviços na nossa Plataforma são oferecidos por
          fornecedores terceiros. Quando utilizar estes serviços, os
          regulamentos de proteção de dados dos fornecedores terceiros serão
          então aplicáveis juntamente com esta declaração de proteção de dados.
          Antes de utilizar esses serviços, os fornecedores terceiros podem
          exigir que forneça permissão ao abrigo da lei de proteção de dados.
          <br></br>
          <br></br>
          Ao abrigo das leis de proteção de dados aplicáveis, a Boomerang é
          obrigada a informar os utilizadores sobre o tratamento de dados e a
          Boomerang cumpre esta obrigação no âmbito desta Política de
          Privacidade. Esta Política de Privacidade e quaisquer partes da mesma
          não são entendidas como cláusulas contratuais e não se tornam parte
          dos termos e condições gerais ("GTC") como um contrato celebrado com
          utilizadores registados. Ao abrigo das leis de proteção de dados
          aplicáveis, a Boomerang pode tratar dados necessários para a execução
          de um contrato consigo ou necessários para tomar medidas a seu pedido
          antes de celebrar um contrato (art. 6.º, n.º 1, alínea b) do RGPD). As
          referências aos GTC devem ser sempre entendidas como informações sobre
          o tratamento de dados (art. 13.º e 14.º do RGPD) e nunca como
          cláusulas que se tornam parte dos GTC. Ao utilizar a Plataforma e os
          nossos serviços, celebra um contrato juridicamente vinculativo entre
          si e a Boomerang, cujas condições são descritas nos GTC.
          <br></br>
          <br></br>
        </p>

        <h5>
          2. Porquê e como recolhemos e utilizamos os seus dados pessoais?
        </h5>
        <h6>
          2.1. Para permitir que utilize a Plataforma, permitir-nos prestar os
          nossos serviços e executar os nossos GTC
        </h6>
        <p>
          Recolhemos e utilizamos os seus dados pessoais para lhe permitir
          utilizar a nossa Plataforma, para prestar os nossos serviços e para
          executar um contrato (GTC) consigo e, especialmente, para realizar
          transações comerciais através da Plataforma, para utilizar o sistema
          de pagamento eletrónico ou para deixar opiniões e comunicar com outros
          membros. Para utilizar estes serviços, necessita de uma conta
          Boomerang. Para esta finalidade, tem de se registar como membro na
          Aplicação. <br></br>
          <br></br>A maioria dos seus dados pessoais é necessária para executar
          um contrato (GTC) consigo. Caso não nos forneça estes dados pessoais,
          não poderemos concluir e celebrar um contrato (GTC) consigo. Parte dos
          seus dados é necessária para cumprir as nossas obrigações legais
          quando é membro da nossa Plataforma. Caso não nos forneça estes dados
          pessoais, não poderemos cumprir os requisitos legais e prestar os
          nossos serviços. <br></br>
          <br></br>
          Estes dados também são utilizados para melhorar a Plataforma, a fim de
          torná-la uma melhor experiência para os nossos membros (consulte a
          secção 2.2.12). <br></br>
          <br></br>
          Recolhemos e utilizamos os seus dados pessoais para estes fins até à
          desativação da sua conta Boomerang ou durante 5 anos de inatividade na
          sua conta.
        </p>

        <h6>2.2. Para melhorar a sua experiência ao utilizar a Plataforma</h6>
        <p>
          Recolhemos e utilizamos os seus dados pessoais para melhorar a sua
          experiência ao utilizar a Plataforma, permitindo-lhe personalizar o
          seu feed e resultados de pesquisa, fornecendo-lhe sugestões relevantes
          e mantendo as suas pesquisas anteriores, enviando-lhe notificações e
          tornando a utilização da Plataforma mais agradável.<br></br>
          <br></br>O fundamento jurídico específico aplicável para a recolha e
          utilização dos seus dados é descrito em cada secção abaixo.
        </p>

        <h6>2.3. Para garantir a segurança da sua conta e da Plataforma</h6>
        <p>
          A Boomerang esforça-se por garantir que as contas dos nossos membros e
          a própria Plataforma estão seguras e protegidas contra ciberataques,
          acesso não autorizado e outros riscos relacionados.
        </p>

        <h6>2.4. Para fins legais</h6>
        <p>
          <strong>
            2.4.1. Para gerir os seus pedidos relacionados com dados pessoais
          </strong>
          <br></br>
          <br></br>
          Se fizer uso dos seus direitos legais relativamente aos seus dados
          (consulte a secção 7 abaixo), iremos recolher e utilizar os dados
          contidos no seu pedido, para além de quaisquer outros dados pessoais
          detidos pela Boomerang com a finalidade de examinar o pedido,
          responder ao mesmo e, quando necessário, tomar as medidas necessárias.
          <br></br>
          <br></br>
          De forma a responder aos pedidos, a Boomerang fornece os seus dados
          aos parceiros fornecedores de serviços que nos consultam quanto a
          questões de legislação relativa a proteção de dados.<br></br>
          <br></br>
          Se interagir com um Membro Pro, o tratamento dos seus dados pessoais
          para este fim será realizado em conjunto, entre a Boomerang e o Membro
          Pro. Tanto a Boomerang como um Membro Pro são responsáveis pela
          recolha de dados pessoais e pela transferência de dados para a outra
          parte, bem como pelo tratamento de todos os outros dados necessários
          para resolver problemas em todas as fases. Consulte a secção 4 da
          presente Política de Privacidade para obter mais informações quanto à
          responsabilidade pelo tratamento conjunta.<br></br>
          <br></br>
          Isto é necessário para cumprir as obrigações legais a que Boomerang
          está sujeita (art. 6.º, n.º 1, alínea c) do RGPD).<br></br>
          <br></br>
          Os dados pessoais recolhidos e utilizados para este fim são mantidos
          durante dois anos a partir do dia em que respondemos ao seu pedido.
        </p>

        <p>
          <strong>
            2.4.2. Para fornecer informações às autoridades de aplicação da lei
            e outras instituições estatais
          </strong>
          <br></br>
          <br></br>
          Se tivermos motivos razoáveis para suspeitar que está envolvido em
          atividades ilegais ou se recebermos uma ordem de uma autoridade
          pública a este respeito (por exemplo, que nos obrigue a remover
          conteúdos ilegais publicados por ti), recolheremos e utilizaremos os
          dados necessários para notificar as autoridades de segurança e outras
          instituições públicas ou para executar a ordem recebida. <br></br>
          <br></br>A Boomerang também fornece os dados acima mencionados às
          autoridades de aplicação da lei e outras instituições estatais quando
          recebemos pedidos de informação relativos a investigações realizadas
          por estas instituições. <br></br>
          <br></br>
          Isto é necessário para cumprir as obrigações legais a que Boomerang
          está sujeita (art. 6.º, n.º 1, alínea c) do RGPD). Os da <br></br>
          <br></br>dos pessoais são necessários para cumprir as nossas
          obrigações legais quando é membro da nossa Plataforma. Caso não nos
          forneça estes dados pessoais, não poderemos cumprir os requisitos
          legais. <br></br>
          <br></br>
          Recolhemos e utilizamos os seus dados pessoais para este efeito
          durante o tempo necessário para os processos administrativos ou
          judiciais em curso, mas não por mais de 3 anos a contar da última
          resposta à autoridade competente (exceto nos casos em que o período de
          retenção seja especificado pela autoridade).
        </p>

        <p>
          <strong>
            2.4.3. Para comunicação dos seus rendimentos e informações fiscais
          </strong>
          <br></br>
          <br></br>
          Se atingires um determinado valor de vendas ou lucro, somos obrigados
          a recolher e comunicar os seus ganhos e dados de contribuinte às
          autoridades fiscais relevantes na UE. Este é um requisito legal de
          acordo com a Diretiva do Conselho (UE) 2021/514 de 22
        </p>

        <p>
          <strong>
            2.4.4. Para defendermos os nossos direitos contra devoluções
          </strong>
          <br></br>
          <br></br>
          Caso tenha transações através dos nossos prestadores de serviços de
          pagamento, iremos recolher e utilizar os seus dados pessoais detidos
          pela Boomerang na medida necessária para resolver uma situação em
          particular.<br></br>
          <br></br>
          Baseamos tal recolha e utilização dos seus dados pessoais num
          interesse legítimo de defendermos os nossos direitos caso seja
          iniciado um processo de estorno contra a Boomerang (Art. 6 (1) (f) do
          RGPD).<br></br>
          <br></br>
          Os dados pessoais recolhidos e utilizados para esta finalidade são
          mantidos durante 13 meses a partir da última transação.
        </p>

        <p>
          <strong>
            2.4.5. Para defender os direitos e interesses da Boomerang
          </strong>
          <br></br>
          <br></br>
          Se se envolver num litígio com a Boomerang ou se precisarmos de levar
          a cabo a aplicação dos nossos GTC ou, de outra forma, defender,
          aplicar, exercer e fazer valer os nossos direitos, iremos recolher e
          utilizar todos os seus dados pessoais mantidos pela Boomerang na
          medida do necessário para resolver uma situação específica. <br></br>
          <br></br>
          Baseamos essa recolha e utilização num interesse legítimo de defender
          os direitos e interesses da Boomerang (art. 6.º, n.º 1, alínea f) do
          RGPD). <br></br>
          <br></br>
          Os dados pessoais recolhidos e utilizados para esta finalidade são
          mantidos durante 5 anos após termos identificado a necessidade de
          defender os nossos direitos e interesses específicos, e, em caso de
          litígio, até à execução final da decisão vinculativa do organismo
          autorizado.
        </p>

        <h5>3. Utilização de cookies</h5>
        <p>
          A Boomerang utiliza cookies e tecnologias semelhantes na Plataforma.
          Pode obter mais informações visitando a nossa{" "}
          <Link to={"/politica-cookies-page"}>Política de Cookies</Link>.
        </p>

        <h5>4. Direito de alteração</h5>
        <p>
          Considerando que estamos constantemente a desenvolver os nossos
          serviços, reservemo-nos o direito de alterar esta Política de
          Privacidade a qualquer momento, sujeita aos regulamentos aplicáveis.
          Quaisquer alterações serão publicadas imediatamente nesta página.
          Independentemente do acima referido, deve consultar esta página
          regularmente para verificar se existem atualizações.
        </p>

        <h5>5. Os nossos dados de contacto</h5>
        <p>
          Se tiver alguma dúvida sobre a recolha e utilização dos seus dados
          como parte da sua utilização da Plataforma, ou relativamente aos seus
          direitos, contacte-nos através do endereço{" "}
          <strong>boomerang.commercial@gmail.com</strong>.<br></br> <br></br>
          Encarregado da proteção de dados da Boomerang:<br></br> <br></br>
          Boomerang, PT<br></br> <br></br>
          3800-000 Aveiro<br></br> <br></br>
          República portuguesa
        </p>
      </ContainerInfo>
    </div>
  );
};

export default PoliticadePrivacidade;
