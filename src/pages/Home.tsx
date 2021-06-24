import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="ilustração simbolizando perguntas e respostas"
        ></img>
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask"></img>
          <button>
            <img src={googleIconImg} alt="Logo do Google"></img>
            Crie sua sala com o Google
          </button>
        </div>
      </main>
    </div>
  );
}
