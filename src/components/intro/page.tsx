import ImagePerfil from "../imagePerfil/page";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row mt-20 md:mt-40 gap-y-6 md:gap-y-0 md:gap-x-9">
      <div className="basis-3/12 self-center md:self-auto">
        <ImagePerfil />
      </div>
      <div className="basis-9/12 self-center text-center md:text-left">
        <p>
          <span>✌🏼</span> Olá, meu nome é
        </p>
        <h1 id="introName">Lucas Fernandes</h1>
        <p>Sou desenvolvedor de software em Brasília, DF.</p>
        <p>
          Crio conteúdo para internet e sou amante de{" "}
          <a
            id="code"
            className="hover:underline hover:decoration-2 hover:decoration-green-700"
            href="https://github.com/lucasopagodev"
            target="_blank"
          >
            código
          </a>
          .
        </p>
      </div>
    </div>
  );
}
