import { CardVideo } from "./componentes/CardVideo";
import "./styles.css";


export default function App() {
  // criando objeto com informações de cada vídeo
  const videoData = {
    image: "https://picsum.photos/400/400?a=1",
    title: "Video 1",
  };

  // outra maneira de fazer é criando um array de objetos, sendo que cada objeto representa as informações de um vídeo
  const videos = [
    {
      image: "https://picsum.photos/400/400",
      title: "Video 2"
    },
    {
      image: "https://picsum.photos/400/400?a=3",
      title: "Vídeo 3"
    },
    {
      image: "https://picsum.photos/400/400?a=200",
      title: "Vídeo 4"
    },
    {
      image: "https://picsum.photos/400/400?a=189",
      title: "Video 5"
    },
    {
      image: "https://picsum.photos/400/400?a=101",
      title: "Video 6"
    },
    {
      image: "https://picsum.photos/400/400?a=102",
      title: "Video 7"
    },
    {
      image: "https://picsum.photos/400/400?a=103",
      title: "Video 8"
    }
  ];

  // criando objeto com informações do usuário
  const user = {
    image: "https://picsum.photos/50/50?a=205",
    name: "Fernanda"
  };

  // criando um array de objetos com informações de diferentes usuários
  const users = [
    {
      image: "https://picsum.photos/50/50?a=207",
      name: "Usuário 2"
    },
    {
      image: "https://picsum.photos/50/50?a=208",
      name: "Usuário 3"
    },
    {
      image: "https://picsum.photos/50/50?a=209",
      name: "Usuário 4"
    },
    {
      image: "https://picsum.photos/50/50?a=210",
      name: "Usuário 5"
    },
    {
      image: "https://picsum.photos/50/50?a=211",
      name: "Usuário 6"
    },
    {
      image: "https://picsum.photos/50/50?a=212",
      name: "Usuário 7"
    },
    {
      image: "https://picsum.photos/50/50?a=212",
      name: "Usuário 8"
    }
  ];

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            {/* Passando as props image e title pra cada vídeo. O primeiro está recebendo os valores do objeto videoData. O restante está recebendo os valores do array videos. */}

            <CardVideo
              image={videoData.image}
              title={videoData.title}
              userImage={user.image}
              userName={user.name}
            />
            <CardVideo
              image={videos[0].image}
              title={videos[0].title}
              userImage={users[0].image}
              userName={users[0].name}
            />
            <CardVideo
              image={videos[1].image}
              title={videos[1].title}
              userImage={users[1].image}
              userName={users[1].name}
            />
            <CardVideo
              image={videos[2].image}
              title={videos[2].title}
              userImage={users[2].image}
              userName={users[2].name}
            />
            <CardVideo
              image={videos[3].image}
              title={videos[3].title}
              userImage={users[3].image}
              userName={users[3].name}
            />
            <CardVideo
              image={videos[4].image}
              title={videos[4].title}
              userImage={users[4].image}
              userName={users[4].name}
            />
            <CardVideo
              image={videos[5].image}
              title={videos[5].title}
              userImage={users[5].image}
              userName={users[5].name}
            />
             <CardVideo
              image={videos[6].image}
              title={videos[6].title}
              userImage={users[6].image}
              userName={users[6].name}
            />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}