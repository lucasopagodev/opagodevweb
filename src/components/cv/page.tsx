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
      "● Gerenciei o versionamento de código usando Azure DevOps e TFS, garantindo o acompanhamento e a gestão adequados das mudanças de código para manter a integridade do sistema. ● Realizei o deploy de sistemas internos, otimizando o processo de implementação e assegurando transições suaves dos ambientes de desenvolvimento para produção. ● Monitorei o desempenho das aplicações desenvolvidas internamente, identificando gargalos e implementando otimizações para melhorar a eficiência do sistema. ● Desenvolvi e mantive Stored Procedures no MS SQL Server, T-SQL, além de programas em C#, ASP.NET MVC, ASP.NET Web API, ASP.NET WebForms, LINQ, JavaScript, JQuery, JSON, CSS, HTML, Bootstrap, XML e diversos frameworks, webservices e relatórios,** seguindo os padrões técnicos apropriados para garantir soluções de alta qualidade e confiabilidade. ● Trabalhei com Microsoft Report Viewer e Crystal Reports, criando e mantendo soluções de relatórios que forneceram insights críticos para as operações da empresa. ● Realizei testes funcionais nos módulos dos sistemas, identificando e resolvendo bugs e falhas arquiteturais para aumentar a robustez e o desempenho geral dos sistemas. ● Configurei e atualizei os ambientes de aplicativos móveis, garantindo que todos os componentes necessários estivessem atualizados e funcionais para os usuários em várias plataformas.",
  },
  {
    id: 4,
    title: "Web Development WordPress",
    local: "Freelance",
    time: "Abril de 2020 - Janeiro de 2022 · 1 ano 10 meses",
    description:
      "● Desenvolvi sites em WordPress, landing pages e plataformas de e-commerce para diversos clientes, incluindo www.pnse.com.br, www.atoscoaching.com, www.glamourseguros.com, www.lojahillsonline.com, www.jukalume.com.br, www.ccodontologicosamambaia.com.br e www.agenciaquintavenida.com.br, garantindo que cada site atendesse às necessidades específicas dos clientes e aprimorasse sua presença online. ● Contribuí para a entrega e facilidade de vendas durante a pandemia da COVID-19, ajudando empresas a evitar o fechamento ao fornecer soluções online que mantiveram suas operações em funcionamento. ● Aumentei o volume de vendas por meio de técnicas de SEO e aprimoramento da experiência do usuário, otimizando o processo de compra e gerando mais transações bem-sucedidas para os clientes.",
  },
  {
    id: 3,
    title: "Desenvolvedor Full-Stack",
    local: "Êxito IT",
    time: "Maio de 2021 - Outubro de 2021 · 6 meses",
    description:
      "● Monitorei os ambientes de aplicação e banco de dados na AWS (EC2 e RDS), garantindo sua estabilidade e desempenho por meio de manutenção proativa e resolução de problemas. ● Gerenciei o versionamento de código com Azure e realizei o deploy de sistemas internos, otimizando o fluxo de desenvolvimento e garantindo atualizações confiáveis dos sistemas. ● Monitorei o desempenho das aplicações desenvolvidas internamente, identificando áreas de melhoria e implementando otimizações para aumentar a eficiência dos sistemas. ● Desenvolvi e mantive programas em C#, ASP.NET MVC, ASP.NET Web API, ASP.NET WebForms, ASP Clássico, PHP e JavaScript, assegurando que cada solução atendesse aos requisitos técnicos e padrões de desempenho da organização.",
  },
  {
    id: 2,
    title: "Desenvolvedor Web",
    local: "Apex-Brasil",
    time: "Agosto de 2020 - Abril de 2021 · 9 meses",
    description:
      "● Desenvolvi sistemas internos utilizando PHP e ferramentas da Microsoft (Power Apps, Power BI, Power Automate, SharePoint, Access), garantindo fluxos de trabalho eficientes e tomadas de decisão baseadas em dados por meio de soluções personalizadas.",
  },
  {
    id: 1,
    title: "Autônomo",
    local: "Lider Centro Automotivo",
    time: "Dezembro de 2017 - Julho de 2020 · 2 anos 8 meses",
    description:
      "● Atuei como vendedor em uma empresa familiar, adquirindo experiência valiosa em atendimento ao cliente, estratégias de vendas e operações diárias, contribuindo para o crescimento e sucesso da empresa.",
  },
];

export default function Cv() {
  return (
    <div id="cv" className="flex-auto">
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
              <p className="mb-4 text-base font-normal text-gray-500 ">
                ● Maintained systems for the Civil Police of the Federal
                District (PCDF), ensuring their reliability and performance by
                addressing bugs and implementing updates. ● Developed a new
                facial recognition solution, which involved vectorizing images
                to search the ElasticSearch database and returning the most
                accurate records based on precision, improving the efficiency of
                the identification process. ● Managed version control using
                Azure DevOps and TFS, successfully deploying internal systems
                while also designing the architecture for various systems and
                applications, ensuring scalability and maintainability. ●
                Monitored the performance of internally developed applications,
                identifying and resolving issues to enhance system efficiency
                and responsiveness. ● Developed and maintained programs using
                C#, ASP.NET MVC, ASP.NET Web API, ASP.NET WebForms, JavaScript,
                and ASP Classic, ensuring the smooth operation of various
                applications within the organization. ● Configured, updated, and
                maintained mobile applications on both the Play Store and Apple
                Store, ensuring that apps were current, functional, and met user
                needs.
              </p>
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
