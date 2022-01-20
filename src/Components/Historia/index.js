/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  HistoriaContainer,
  HistoriaContent,
  BlackContent,
  WhiteContent,
  TextContainer,
  ImgContainer,
} from './HistoriaElements';

//images
import alanImg from '../../Assets/00.png';
import caImg from '../../Assets/01.bmp';
import guiImg from '../../Assets/02.jpeg';
import caImg02 from '../../Assets/03.jpg';
import catImg03 from '../../Assets/04.jpg';
import catImg04 from '../../Assets/05.jpg';
import catImg05 from '../../Assets/06.jpg';
import catImg06 from '../../Assets/07.jpg';
import catImg07 from '../../Assets/08.jpg';
import catImg08 from '../../Assets/09.jpg';
import catImg09 from '../../Assets/10.jpg';

function Historia() {
  const [toggleImg, setToggleImg] = React.useState(false);

  const toggle = () => {
    setToggleImg(!toggleImg);
  };

  //console.log(toggleImg);

  return (
    <HistoriaContainer id="historia">
      <HistoriaContent>
        <BlackContent>
          <TextContainer>
            <h1>Inicio da rodada</h1>
            <p>
              Em 2010, meu melhor amigo <b>Alan "Flyggon" Pinheiros</b> me falou
              sobre esse FPS que era de graça, leve pro meu PC da positivo e
              divertido pra cacete, o famigerado <b>"CA"</b> ou{' '}
              <b>Combat Arms</b> para os menos chegados. <br />
              Mesmo ele ja tendo me falado sobre o jogo diversas vezes e eu até
              ter experimentado o jogo no pc dele, eu demorei um pouco pra
              instalar no meu, creio que na época o jogo não tinha me cativado
              tanto ainda.
              <br />
              <br />
              Até que no natal do mesmo ano <b>TUDO MUDOU FI</b>.
              <br />
              <br /> Eu tava sem muito o que jogar além do famoso{' '}
              <b>Habbo Hotel</b> ou o <b>Grand Chase</b> que eu jogava até com
              próprio o Alan as vezes. Afim de jogar algo novo, eu decidi
              finalmente criar minha conta no Combat Arms e instalar.
              <br />
              <br />O jogo em si não tinha tantos diferenciais comparado com{' '}
              <b>Cross Fire</b> ou <b>Point Blank</b> por exemplo e
              sinceramente, eu não faço a menor ideia de como o jogo conseguiu
              competir bem com esses outros FPS que eram também de graça.
              Inclusive alcançando uma galera de outros FPS pagos ou com uma
              comunidade bem mais consolidada como a do <b>Counter-Strike</b>.
            </p>
          </TextContainer>

          <ImgContainer>
            <img
              src={alanImg}
              alt="Alan na esquerda e eu na direita."
              onClick={toggle}
            />
            <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Meu amigo Alan na esquerda e eu na direita.
            </figcaption>
          </ImgContainer>
        </BlackContent>

        <WhiteContent>
          <ImgContainer>
            <img src={caImg} alt="Minha primeira print dentro do jogo" />
            <figcaption
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                color: 'black',
              }}
            >
              Minha primeira print dentro do jogo com o jogador JuPanteraBR
            </figcaption>
          </ImgContainer>
          <TextContainer>
            <h1>O Grande "igornj"</h1>
            <p>
              No inicio de 2011 eu ja estava completamente entregue ao jogo.
              Usando o nick{' '}
              <b>
                "igornj" que é basicamente meu nome com as iniciais dos meus
                sobrenomes
              </b>
              , eu vagava por praticamente todos os servidores, jogando igual um
              maluco mas se divertindo pra cacete. Eu jogava tanto sozinho
              quanto com o Alan as vezes, mas ele diferentemente de mim não tava
              tão viciado, então ele dava atenção pra outros jogos também.
              <br />
              <br />O diferencial maior nessa época dentro do jogo eram as{' '}
              <b>Pantentes</b> que funcionavam como seu nivel dentro do jogo.
              Quanto maior a sua patente mais <b>"brabo"</b> você era. Inclusive
              foi o motivo de eu tirar a primeira print minha dentro do jogo. O
              lendário <b>"JuPanteraBR"</b> jogador(a) com a maior patente do
              jogo até então estava dentro do mesmo lobby que eu.
            </p>
          </TextContainer>
        </WhiteContent>

        <BlackContent>
          <TextContainer>
            <h1>Um novo viciadinho</h1>
            <p>
              Conforme eu ia entrando cada vez mais de cabeça dentro do jogo,
              qualquer oportunidade que surgia pra falar sobre o "CA" eu incluia
              ele na conversa, Inclusive virou quase que um padrão eu falar com
              o Alan sobre quando a gente se encontrava na rua.
              <br />
              <br />
              Até esse momento, eu ainda jogava mais sozinho ou com pessoas que
              eu adicionava dentro do jogo mesmo.
              <br />
              <br />
              Isso mudaria quando ainda em 2011, um outro amigo de infância
              chamado <b>Guilherme "gzk" Anacleto</b> comentasse que também
              estava jogando o Combat Arms em uma conversa aleátoria comigo e
              com o Alan.
              <br />
              <br />
              Ali eu tinha descoberto um{' '}
              <b>maluco mais viciado que eu no jogo.</b>
              <br />
              <br />A gente jogava bola ou brincava na ruas as vezes, mas eu não
              tinha tanto contato com ele ainda como ja tinha com o Alan.
              Logicamente depois que a gente começou a <b>comer o jogo junto</b>
              , não tinha um dia que não nos encontravamos pra jogar ou pra
              ficar enfiado na casa do outro jogando.
              <br />
              <br />O jogo fez esses 3 nerdolas ficarem mais juntos do que
              nunca, compartilhando os acontecimentos da vida e descobrindo
              outros jogos novos também conforme o tempo passava.
            </p>
          </TextContainer>

          <ImgContainer>
            <img
              src={guiImg}
              alt="Eu, Guilherme e o Alan em alguma estação de trem pelo mundão"
              onClick={toggle}
            />
            <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Eu, Guilherme e o Alan em alguma estação de trem pelo mundão
            </figcaption>
          </ImgContainer>
        </BlackContent>

        <WhiteContent>
          <ImgContainer>
            <img
              src={catImg09}
              alt="Alan na esquerda e eu na direita."
              onClick={toggle}
            />
            <figcaption
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                color: 'black',
              }}
            >
              (Imagem da internet) Salas com as regras LB7
            </figcaption>
          </ImgContainer>

          <TextContainer>
            <h1>Buldogue 2 e Charlie 3</h1>
            <p>
              Não demorou muito pra tanto eu quanto o Guilherme começarmos a
              ficar bom no jogo. Obviamente um jogador considerado bom pra mim
              pode ser diferente de bom pra você mas{' '}
              <b>A BALA COMIA, A GENTE ERA MUITO FORTE NÃO TINHA COMO.</b>
              <br />
              <br />
              Enfim..
              <br />
              <br />
              Os lobbys comuns de <b>Mata Mata</b>, <b>Capturar bandeira</b> ou
              até o <b>Quarentena</b> que era com certeza o modo mais divertido
              pra mim de longe, começaram a perder a graça e não ter um desafio
              muito grande. Assim, na busca de novos desafios fora dos
              servidores casuais, encontramos duas ligas que organizavam
              campeonatos e utlizavam de regras pra deixar o jogo mais voltado{' '}
              <b>para as competições.</b>
              <br />
              <br />
              Essas ligas eram a <b>WGB</b> e <b>LB7</b>, apesar dos nomes
              diferentes elas tinham o mesmo propósito:{' '}
              <b>Tentar balanciar o confronto entre times,</b> criando regras
              onde somente algumas armas eram permitidas, deixando o jogo bem
              mais competitivo e menos irritante eu diria, porque o Combat Arms
              era bem conhecido pelo seu{' '}
              <b>arsenal exótico de armas e itens super roubados.</b>
              <br />
              <br />O mais legal dessas ligas era suas salas <b>"privadas" </b>
              onde se podia jogar nessas regras, ou seja a gente não precisava
              realmente entrar nos campeonatos pra jogar nesse modelo deles.
              Basicamente, eles separavam um servidor especifico{' '}
              <b>"Charlie 3" </b>
              onde as pessoas poderiam criar salas e jogar nesse modelo. Todo o
              santo dia era disponibilizado uma senha no server do{' '}
              <b>TeamSpeak</b> deles, bastava entrar la pegar a senha do dia,
              entrar ou criar sua sala no servidor nas regras e no modo{' '}
              <b>"Buscar e Destruir"</b> ou o famoso modo de{' '}
              <b>"CT e Terrorista" </b> e dale.
              <br />
              <br />
              Outra ideia genial dessas ligas foi pegar um outro servidor
              especifico de confronto entre clans 5 vs 5 <b>"Buldogue 2"</b> pra
              aplicar as regras também nas partidas entre times. O legal é que
              agora era também possivel jogar contra outros times no{' '}
              <b>
                formato exato utilizado pelas ligas que faziam os campeonatos
              </b>
              , ou seja otimo para treinar. Além disso tinha <b>mix</b> e outros
              campeonatos sasionais, era bem bacana, principalmente por ser a
              primeira vez que eu tava tendo uma visão do competitivo de um
              jogo.
              <br />
              <br />
              Não preciso nem dizer que a gente <b>VIVIA</b> nesses servidores,
              a gente parou completamente de jogar qualquer um dos outros modos
              do jogo que não fosse esse. Alias não só a gente como os outros
              servidores diminuiram consideravelmente a quantidade de players
              casuais,{' '}
              <b>
                todo mundo queria descobrir porque tinham tantas salas com
                senhas e lotadas.
              </b>{' '}
              <br />
              <br />A e não posso esquecer que a gente metia uma mala, entrando
              nas salas dentro do <b>TeamSpeak das ligas ficando mutado</b>.
              Isso aqui era só pra mostrar que tu tava la jogando e era ativo na
              comunidade, kkk doideira.
            </p>
          </TextContainer>
        </WhiteContent>

        <BlackContent>
          <TextContainer>
            <h1>A dupla musical</h1>
            <p>
              Nessa mesma época, o Guilherme teve a ideia meio doidera mas
              também genial de <b>mudar nossos nicks.</b> O engraçado é que o
              maldito nem me avisou, um dia eu loguei na minha conta todo
              inocente e já estava trocado porque ele tinha acesso.
              <br />
              <br />
              Os nicks novos eram <b>"-BlacK___S2"</b> e <b>"-FunK___S2"</b>,
              toda vez que eu lembro disso eu começo a rir igual um besta não
              tem como. Basicamente a ideia dele foi colocar dois estilos
              músicais que a gente escutava na época nos nomes. Na época eu
              fiquei <b>PUTO</b> porque não tinha curtido tanto, mas conforme os
              dias iam passando eu começava a gostar mais do nick,
              principalmente porque nos lobbys da <b>WGB</b> e <b>LB7 </b>a
              gente sempre jogava junto e destruia, acabou criando uma fama
              nessa duplinha.
              <br />
              <br />
              Até hoje eu sou conhecido como <b>"Black"</b> por todos os amigos
              que fiz dentro do jogo que tenho contato até hoje, porque mudei de
              nick depois disso só uma vez, que foi pra <b>"bllk-"</b> que é
              Black só que encurtado e mantive isso em todos os outros jogos que
              joguei, inclusive quando migramos para outros jogos. O engraçado é
              que o Guilherme trocou de nick diversas vezes, como eu mantive o
              meu as pessoas achavam que meu nick era uma referencia a cor{' '}
              <b>"Preta"</b> quando na verdade era um estilo músical pra fazer
              duplinha com o <b>Funk do "-FunK___S2".</b>
            </p>
          </TextContainer>

          <ImgContainer>
            <img
              src={caImg02}
              alt=" X1 vs o Guilherme, aqui ela ja tinha feito a primeira troca de
              nick para Over2G"
              onClick={toggle}
            />
            <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
              X1 vs o Guilherme, aqui ela ja tinha feito a primeira troca de
              nick para "Over2G"
            </figcaption>
          </ImgContainer>
        </BlackContent>

        <WhiteContent>
          <ImgContainer>
            <img src={catImg03} alt="Clan AttractionZ" onClick={toggle} />
            <figcaption
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                color: 'black',
              }}
            >
              No menu do jogo, ainda fazendo parte do Clan AttractionZ-
            </figcaption>
          </ImgContainer>

          <TextContainer>
            <h1>Na procura de um time</h1>
            <p>
              Apartir daqui tem <b>muita historia pra contar</b>, vou ter que
              resumir o máximo se não eu nunca vou terminar isso daqui.
              <br />
              <br />
              Por volta do final do ano de 2011, a gente tava na busca de criar
              um time pra começar a disputar os campeonatos, um deles foi a
              <b>"AttractionZ"</b>. Nesse clan nós iamos nas salas LB7 e WGB
              tentar recrutar uns malandros, era até engraçado porque a gente
              ficava realmente como <b>"olheiros"</b> vendo os cara jogar.
              <br />
              <br />
              Infelizmente o Combat Arms tinha a maldita fama de ser infestado
              por <b>Hackers</b>, o que era bem verdade, mesmo os campeonatos
              tendo alguns <b>anti-cheats</b> melhores que o da <b>Level UP</b>,
              não tinha como segurar essa porrada de hacks novos saindo todos os
              dias. A frase <b>"TEM TV?"</b> era bem comum na época por conta
              disso, como as salas LB7 e WGB não podiam ter um anti-cheat melhor
              rodando do que o que vinha com jogo, utilizavamos o{' '}
              <b>Team Viewer</b>, programa que ajudava a gente investigar o PC
              da pessoa afim de{' '}
              <b>encontrar uns BEN 10/programinhas do capeta</b>, pra ver se ela
              era hacker. Método esse que a gente chegou a usar no começo pra
              recrutar ou não recrutar alguém para o time.
              <br />
              <br />
              <b>Alias eu sabia o meu código do TV até de cabeça, meu amigo.</b>
              <br />
              <br />
              Obviamente, mesmo utilizando esse método e vendo como os cara
              jogavam antes de recrutar, não dava pra ter 100% de certeza se o
              cara tava limpo ou não, só o tempo mesmo dizia. Nessas tentativas
              a gente teve alguns problemas com varios{' '}
              <b>
                carinhas que entraram para o clan e usavam hack na nossa cara
                sem dó.
              </b>
              <br />
              <br />
              Por essas e outras que a gente parou com a ideia de criar um clan
              e ficou somente esperando a oportunidade cair do céu.
            </p>
          </TextContainer>
        </WhiteContent>

        <BlackContent>
          <TextContainer>
            <h1>No dia e na hora certa</h1>
            <p>
              Até que um belo dia, algo aconteceria que não só nos daria a
              oportunidade de jogar em um time mais estruturado mas cravasse no
              destino as{' '}
              <b>
                amizades que eu levaria para vida, tiradas de dentro do jogo.
              </b>
              <br />
              <br />O mapa era <b>Sand Hog</b> em um lobby da WGB, eu estava
              jogando sozinho nesse dia e não me lembro se eu tava jogando bem
              ou não mas provavelmente meu{' '}
              <b>"Deckland" permanente chamou a atenção de uma pessoa.</b>
              <br />
              <br />
              <i>
                Deckland é um personagem do jogo que ficou permanente um dia e
                depois foi retirado da loja, ou seja quem tinha.. tinha um
                prestígio na quebrada.
              </i>{' '}
              <b>Mas obviamente não foi por isso.</b>
              <br />
              <br />
              Essa pessoa era o <b>Nayerr "Expl0sioNn-"</b> do <b>ScreeN-</b>,
              time não tão conhecido na comunidade mas já estavam a bastante
              tempo disputando as ligas e outros confrontos entre clans. Quando
              ele me chamou eu ja fui direto pesquisar sobre eles porque tanto
              eu e o Guilherme tinhamos recebidos alguns outros convites mas{' '}
              <b>
                sempre o time tinha alguma coisa que fazia a gente desistir da
                ideia.
              </b>
              <br />
              <br />
              Mas com eles foi diferente, logo vi que o time era sério e eles
              tavam procurando algúem pra realmente jogar os campeonatos e
              completar a line que tava passando por mudanças. Então antes de
              aceitar eu mandei uma proposta pra eles de que,{' '}
              <b>
                eu só entraria para o clan se um outro amigo meu (Guilherme)
                pudesse entrar também.
              </b>{' '}
              <br />
              <br />
              Lembro até de prometer que se ele não jogasse bem,{' '}
              <b>eles poderiam kickar a gente em seguida.</b> Felizmente, deu
              tudo certo e a gente <b>DESTRUIU </b>nos primeiros <b>"CF"</b> ou
              Clan Fights com eles.
              <br />
              <br />
              Não demorou muito pra{' '}
              <b>
                colocarem a gente na line princpal deles para campeonatos.
              </b>{' '}
              Pela primeira vez na minha vida e acredito que na do Guilherme
              também, estavamos jogando partidas em varios campeonatos e treinos
              com um <b>time que estava levando o jogo bem a sério</b>.
              <br />
              <br />
              Isso foi muito foda com certeza.
            </p>
          </TextContainer>

          <ImgContainer>
            <img src={catImg04} alt="Clan ScreeN" onClick={toggle} />
            <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Minha primeira print com o clan ScreeN em uma sala no Buldogue 2
            </figcaption>
          </ImgContainer>
        </BlackContent>

        <WhiteContent>
          <ImgContainer>
            <img src={catImg05} alt="ScreeN e UpperClutch" onClick={toggle} />
            <figcaption
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                color: 'black',
              }}
            >
              Membros do ScreeN- e UpperClutch juntos numa partida de Clan Fight
            </figcaption>
          </ImgContainer>

          <TextContainer>
            <h1>ScreeN vs UpperClutch</h1>
            <p>
              Conforme iamos jogando mais os campeonatos e os CF, conheciamos
              ainda mais times da comunidade e algumas tretas ou entre players
              ou até times inteiros rolavam,{' '}
              <b>
                o que era completamente normal você xingar até a ultima geração
                da familia do inimigo por ter te matado.
              </b>
              <br />
              <br />
              Tanto que em uma dessas partidas jogamos contra o{' '}
              <b>UpperClutch</b>, clan que ja tinha alguma treta com o{' '}
              <b>ScreeN</b> por conta de membros trocados e outras coisas que eu
              não tinha conhecimento sobre, porque era uma historia que
              aconteceu muito antes de eu entrar para o time. Na partida
              estavamos utilizando o TeamSpeak da LB7, eles disponibilizavam
              umas salas vazias para os times que não tinham um server próprio
              ou outra forma pra se comunicar durante o jogo.{' '}
              <b>
                E pela força do destino, o time UpperClutch estava numa sala
                logo abaixo, dentro do mesmo servidor.
              </b>
              <br />
              <br />
              Depois que a partida acabou, inclusive não lembro do resultado.
              <b>
                Todos os membros do UpperClutch que estavam na sala abaixo do TS
                entraram na nossa
              </b>
              . E pela primeira vez eu ouvi a voz de todos eles, só que não
              trocamos uma ideia de uma forma amigável, era só xingamentos
              infinitos e eu sem entender nada, xinguei de volta também e dale.
              <br />
              <br />
              <b>
                Resumindo, todo mundo saiu do TS depois e foi isso, a gente só
                se xingou e vazou, doideira.
              </b>
              <br />
              <br />O mais engraçado de tudo isso é que após esse ocorrido é que{' '}
              <b>a gente começou a jogar contra quase que todos os dias</b>,
              como a gente ja se "conhecia" de alguma forma e o nivel dos dois
              times eram parecidos, as partidas eram bem disputadas e tinha dias
              que a gente jogava varias e varias vezes contra afim de mostrar
              quem era o melhor. Não demorou muito pra criarmos amizade com eles
              e membros jogarem com outros contas pra completar lines pra um e
              para o outro.
              <br />
              <br />
              Eu participando de tudo isso e começando a criar uma amizade
              também com os caras do UpperClutch,{' '}
              <b>
                decidi ter a ideia que faria juntarmos nossas forças pra algo
                melhor.
              </b>
              <br />
              <br />
              <b>
                UpperClutch e ScreeN se juntaram, virando somente o time ScreeN
              </b>
              . Só que agora com uma quantidade absurda de membros e com o
              propósito de criar uma super line pra amassar nas ligas a frente.
            </p>
          </TextContainer>
        </WhiteContent>

        <BlackContent>
          <TextContainer>
            <h1>Juntos mas Separados</h1>
            <p>
              Após essa fusão, a quantidade de partidas que conseguiamos jogar
              era absurda. Pela quantidade grande nova de membros, muitas vezes
              tinham 3 a 4 times pra jogar e uma galera ainda esperando na fila
              de próximo, com certeza essa época foi o momento mais ativo de
              todo o clan.
              <br />
              <br />
              <b>
                Claro que com essa quantidade absurda de jogadores, algumas
                intrigas aconteceriam..
              </b>{' '}
              <br />
              <br />
              Foram varias coisas que inciaram alguns problemas, desde de
              jogadores da line principal que diminuiram bastante sua presença
              dentro do Combat Arms pra jogar o grandissimo League Of Legends e
              até jogadores dentro do time criando outro time com a galera que
              "ainda se considerava mais ativa".
              <br />
              <br />
              <i>
                <b>
                  Eu fiz parte da galera que tava viciada no League Of Legends,
                  nesse época o jogo tava em chamas e tanto eu quanto o
                  Guilherme gostavamos de passar umas horas la mesmo ainda dando
                  atenção para o CA.
                </b>
              </i>
              <br />
              <br />
              Acredito que o problema que mais atingiu o clan foi{' '}
              <b>a sua line principal.</b> Nessa época os campeonatos estavam
              ficando cada vez mais dificis com mais times se destacando toda
              semana, o que fazia a gente ter que criar a line mais forte
              possivel pra jogar contra. Um dos problemas que tinhamos eram
              membros que tinham que estar na line mas começaram a ter alguns
              compromissos nos dias de campeonatos, o outro problema era membros
              da line vinda do ScreeN que mesmo depois de discutido que não
              estariam na line principal, seja por skill ou qualquer outra coisa{' '}
              <b>não aceitavam de jeito nenhum a ideia.</b>
              <br />
              <br />
              <b>
                E aqui começou a azedar um pouco as relações e praticamente ouve
                uma divisão do clan entre o antigo ScreeN e o UpperClutch
                novamente.
              </b>
              <br />
              <br />
              Um fato interessante sobre esses dois times que ainda não citei é
              que <b>a maior parte do clan ScreeN residiam no Nordeste</b>,
              enquanto{' '}
              <b>
                todos do UpperClutch eram de São paulo e assustadoramente
                estavam MUITO perto da onde eu e o Guilherme moramos até hoje
              </b>
              . Esse detalhe fez com que a gente se aproximasse bastante da
              galera do UpperClutch, tanto pelos encontros que rolaram mas
              principalmente por concordarmos das mesmas coisas que estavam
              rolando no momento.
              <br />
              <br />
              Mais ou menos na metade do ano de 2012,{' '}
              <b>
                uma treta maior aconteceu e o clan se dividiu agora pra valer
              </b>
              . Com essa divisão, membros antigos do ScreeN se mantiveram la
              enquanto uma boa parte dos membros vieram para o UpperClutch, isso
              com eu e o Guilherme inclusos nisso.
              <br />
              <br />
              Nessa saída, decidimos criar novamente o <b>UpperClutch</b>, time
              agora com menos da metade dos membros que tinhamos quando juntos
              com o ScreeN, porém com{' '}
              <b>
                praticamente todos os membros ativos e com uma line principal
                mais fechada e até com substitutos muito bons.
              </b>
              <br />
              <br />
              No fim, menos foi realmente mais aqui e a separação pode ter sido
              melhor pra todos nesse caso.
            </p>
          </TextContainer>

          <ImgContainer>
            <img
              src={catImg06}
              alt="Primeira partida da nova UpperClutch"
              onClick={toggle}
            />
            <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Primeira partida do novo UpperClutch após separação com o ScreeN
            </figcaption>
          </ImgContainer>
        </BlackContent>

        <WhiteContent>
          <ImgContainer>
            <img
              src={catImg07}
              alt="Primeiro encontro do clan UpperClutch 2012"
              onClick={toggle}
            />
            <figcaption
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                color: 'black',
              }}
            >
              Membros do clan UpperClutch em 2013
            </figcaption>
          </ImgContainer>

          <TextContainer>
            <h1>Vamos Clan!</h1>
            <p>
              Com o time agora mais estruturado novamente, com membros tendo uma
              sinergia muito boa e além disso tendo já criado conexões até fora
              do jogo, o UpperClutch estava pronto para o sucesso. Acredito que
              todos os membros que participaram dessa historia concordam comigo,{' '}
              <b>a época mais vitoriosa do time começou aqui.</b>
              <br />
              <br />
              <b>
                {' '}
                E não, nós não fomos o melhor time do Brasil, não ganhamos
                diversos campeonatos ou chegamos no top 1° das ligas
              </b>
              .
              <br />
              <br />
              Mas a gente sabia dar valor e{' '}
              <b>comemorava qualquer pequena vitoria</b>. Juntos a gente se
              divertia muito, ganhando relevância a cada campeonato a cada Clan
              Fight e batendo de frente muitas vezes com times grandes do
              cenário,{' '}
              <b>
                conseguindo ser reconhecidos na comunidade e até em outros jogos
              </b>
              .
              <br />
              <br />
              Pra gente isso já era ter sido <b>vitoriosos</b>.
            </p>
          </TextContainer>
        </WhiteContent>

        <BlackContent>
          <TextContainer>
            <h1>UpperClutch para sempre</h1>
            <p>
              O time jogou junto o Combat Arms de 2012 até mais ou menos metade
              do ano de 2015 onde migramos do CA para o Counter-Strike: Global
              Offensive que jogamos e acompanhamos até hoje.
              <br />
              <br />
              Mas o mais legal de toda essa historia são as amizades que
              encontrei dentro do jogo. E é doideira pensar que caso algumas
              coisas não acontecessem, hoje eu não conheceria nenhum desses
              malucos que amo.
              <br />
              <br />
              É por essas e outras que o Combat Arms tem um espaço reservado no
              meu coração, mesmo não jogando mais o jogo eu sei da importancia
              que ele teve na minha vida.
              <br />
              <br />
              E como todos aquelas madrugadas a dentro jogando, sofrendo ameaça
              de morte da minha mãe, valeram a pena.
              <br />
              <br />
              <i>
                <b>UpperClutch para Sempre</b> by bllk-
              </i>
            </p>
          </TextContainer>

          <ImgContainer>
            <img
              src={catImg08}
              alt="Clan Upperclutch Atualmente"
              onClick={toggle}
            />
            <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Clan Upperclutch Atualmente
            </figcaption>
          </ImgContainer>
        </BlackContent>
      </HistoriaContent>
    </HistoriaContainer>
  );
}

export default Historia;
