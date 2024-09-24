/* eslint-disable @next/next/no-img-element */

const products = [
  {
    id: 1,
    name: "Capa de Notebook - Cinza Grafite",
    description: "A melhor capa para proteger seu notebook.",
    price: '149,90',
    tag: 'Capa',
    imageSrc: "/ProductsImages/CapaNotebookOpagodevGrafite.png",
    imageAlt:
      "Uma capa de notebook preta com espuma e muita qualidade para proteger seu trabalho da cor cinza grafite.",
    href: "https://produto.mercadolivre.com.br/MLB-5070576038-capa-para-notebook-macbook-e-outros-clean-_JM?attributes=COLOR_SECONDARY_COLOR%3AQ2luemEtZXNjdXJv&quantity=1",
  },
  {
    id: 2,
    name: "Capa de Notebook - Cinza Claro",
    description: "A melhor capa para proteger seu notebook.",
    price: '149,90',
    tag: 'Capa',
    imageSrc: "/ProductsImages/CapaNotebookOpagodevCinza.png",
    imageAlt:
      "Uma capa de notebook preta com espuma e muita qualidade para proteger seu trabalho da cor cinza grafite.",
    href: "https://produto.mercadolivre.com.br/MLB-5070576038-capa-para-notebook-macbook-e-outros-clean-_JM?attributes=COLOR_SECONDARY_COLOR%3AQ2luemE%3D&quantity=1",
  },
];

export default function Products() {
  return (
    <div id="products" className="flex-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
          <p className="text-green-500 font-bold">⚠️ [PRÉ-VENDA]</p>
          <h2 className="my-6 text-2xl font-bold text-gray-900">
            📦 Produtos <span className="font-sans font-light text-green-900">by <a href="https://www.instagram.com/opagodev/" className="hover:underline decoration-green-900">Opagodev</a></span>
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
