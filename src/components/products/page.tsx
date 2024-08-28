/* eslint-disable @next/next/no-img-element */
const products = [
  {
    name: "Capa de Notebook",
    description: "A melhor capa para proteger seu notebook",
    price: '180',
    tag: 'Capa',
    imageSrc: "/ProductsImages/notebookCapa.png",
    imageAlt:
      "Uma capa de notebook preta com espuma e muita qualidade para proteger seu trabalho.",
    href: "#",
  },
  {
    name: "Mouse Pad de Couro",
    description: "O mouse pad mais minimalista que você vai encontrar, de couro para melhorar o visual do seu setup.",
    price: '75',
    tag: 'Setup',
    imageSrc: "/ProductsImages/mousePadBlack.jpeg",
    imageAlt:
      "Mouse pad em cima da bancada da cor marrom claro muito minimalista.",
    href: "#",
  },
];

export default function Products() {
  return (
    <div id="products" className="flex-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
          <p className="text-green-500 font-bold">[EM BREVE]</p>
          <h2 className="my-6 text-2xl font-bold text-gray-900">
            📦 Produtos – OPagoDev® 
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.name} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.tag}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>  
        </div>
      </div>
    </div>
  );
}
