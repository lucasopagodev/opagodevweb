const experience = [
  // {
  //   id: 6,
  //   title: "Desenvolvedor Full-Stack",
  //   local: "Hepta Tecnologia e Informática",
  //   time: "Julho de 2022",
  //   description: "",
  // },
  {
    id: 5,
    title: "Desenvolvedor Full-Stack",
    local: "CEUB - Centro Universitário de Brasília",
    time: "Outubro de 2021 - Julho de 2022 · 10 meses",
    description:
      "• Versionamento de código com Azure Devops, TFS. • Deploy de sistemas internos. • Monitoraramento de desempenho das aplicações desenvolvidas internamente. • Efetuar o desenvolvimento e cuidar da manutenção de Stored Procedures em MS SQL Server, T-SQL, programas nas linguagens C#, ASP.NET MVC, ASP.NET Web API, ASP.NET WebForms, LINQ, Javascript, JQuery, JSON, CSS, HTML, Bootstrap, XML e frameworks, webservices e relatórios, utilizando padrões técnicos apropriados. • Microsoft Report Viewer, Crystal Reports. • Realizar teste funcional dos módulos de toda a programação, a fim de identificar erros e falhas na programação e arquitetura dos sistemas e aplicações. • Configuração e atualização dos ambientes de aplicativo mobile",
  },
  {
    id: 4,
    title: "Web Development WordPress",
    local: "Freelance",
    time: "Abril de 2020 - Janeiro de 2022 · 1 ano 10 meses",
    description:
      "Desenvolvimento nos sites em wordpress, landing-pages e e-commerce - pnse.com.br, atoscoaching.com, glamourseguros.com, lojahillsonline.com, jukalume.com.br, ccodontologicosamambaia.com.br, agenciaquintavenida.com.br.",
  },
  {
    id: 3,
    title: "Desenvolvedor Full-Stack",
    local: "Êxito IT",
    time: "Maio de 2021 - Outubro de 2021 · 6 meses",
    description:
      "• Versionamento de código com Azure Devops • Deploy de sistemas internos. • Monitoraramento de desempenho das aplicações desenvolvidas internamente. • Efetuar o desenvolvimento e cuidar da manutenção, programas nas linguagens C#, ASP.NET MVC, ASP.NET Web API, ASP.NET WebForms, ASP Clássico, PHP, Javascript, JQuery, JSON, CSS, HTML, Bootstrap, XML e frameworks, webservices e relatórios, utilizando padrões técnicos apropriados. • Microsoft Report Viewer, Crystal Reports. • Realizar teste funcional dos módulos de toda a programação, a fim de identificar erros e falhas na programação e arquitetura dos sistemas e aplicações. •Monitoramento dos ambientes de aplicação e banco de dados na AWS (EC2 e RDS)",
  },
  {
    id: 2,
    title: "Desenvolvedor Web",
    local: "Apex-Brasil",
    time: "Agosto de 2020 - Abril de 2021 · 9 meses",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    id: 1,
    title: "Autônomo",
    local: "Lider Centro Automotivo",
    time: "Dezembro de 2017 - Julho de 2020 · 2 anos 8 meses",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

export default function Cv() {
  return (
    <div className="flex-auto">
      <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-4">
        <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-4">
          <h2 className="my-6 text-2xl font-bold text-gray-900">💼 Meu XP</h2>
          <ol className="relative border-s mt-6 border-gray-200">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-green-900 dark:bg-green-900"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                Julho de 2022 -
                <span className="bg-green-900 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                  Hoje
                </span>
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Desenvolvedor Full-Stack - Hepta Tecnologia e Informática
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 "></p>
            </li>

            {experience.map((exp) => (
              <li key={exp.id} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                  {exp.time}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.title} - {exp.local}
                </h3>
                <p className="text-base font-normal text-gray-500">
                  {exp.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
