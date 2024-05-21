import ImagePerfil from "@/components/imagePerfil/page"

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-12">
        <ImagePerfil />
      </div>
      <div>
        <p><span id="wave">👋</span> Olá, meu nome é</p>
          <h1 id="introName">Lucas Fernandes</h1>
          <p>Eu sou um desenvolvedor de software em Brasília, DF e crio conteúdo para internet sou amante do <a id="code" href="https://github.com/lucasopagodev" target="_blank">código</a>.</p>
      </div>
    </div>
  );
}
