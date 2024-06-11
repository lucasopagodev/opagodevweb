/* eslint-disable @next/next/no-img-element */
const callouts = [
  {
    name: "My Wallet",
    description: "Aplicação para organização financeira",
    imageSrc: "/ProjectsImages/MyWallet.png",
    imageAlt:
      "Uma mão segurando uma carteira verde escura, com alguns cartões dentro.",
    href: "#",
  },
  {
    name: "Gerador de Grupos",
    description: "Ferramenta para gerar grupos sortidos",
    imageSrc: "/ProjectsImages/PersonGroup.png",
    imageAlt:
      "Thumb do projeto Grupo de pessoa, imagem contém muitas pessoas com alguns detalhes em verde.",
    href: "https://lucasopagodev.github.io/gerador-de-grupos/",
  },
  {
    name: "NuBank [Clone]",
    description: "Clone da interface do NuBank",
    imageSrc: "/ProjectsImages/CloneNuBank.png",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "https://github.com/lucasopagodev/clone-Nubank",
  },
];

export default function Projects() {
  return (
    <div className="flex-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
          <h2 className="my-6 text-2xl font-bold text-gray-900">
            🖥️ Alguns projetos
          </h2>
          <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
