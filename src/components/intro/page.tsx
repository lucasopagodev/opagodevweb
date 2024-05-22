import ImagePerfil from "../imagePerfil/page";

export default function Intro() {
	return(
		<>
			<div className="mr-12">
				<ImagePerfil />
			</div>
			<div>
				<p><span>✌🏼</span> Olá, meu nome é</p>
				<h1 id="introName">Lucas Fernandes</h1>
				<p>Eu sou um desenvolvedor de software em Brasília, DF.</p>
				<p>Crio conteúdo para internet e sou amante de <a id="code" className="hover:underline hover:decoration-2 hover:decoration-green-700" href="https://github.com/lucasopagodev" target="_blank">código</a>.</p>
			</div>
		</>
	);
}