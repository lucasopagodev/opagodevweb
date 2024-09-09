
// Define a interface Product
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
}

// Definição dos produtos
const products: Product[] = [
  {
    id: 1,
    name: "Capa de Notebook",
    description: "A melhor capa para proteger seu notebook",
    price: '180',
    tag: 'Capa',
    imageSrc: "/ProductsImages/notebookCapa.png",
    imageAlt: "Uma capa de notebook preta com espuma e muita qualidade para proteger seu trabalho.",
  },
  {
    id: 2,
    name: "Mouse Pad de Couro",
    description: "O mouse pad mais minimalista que você vai encontrar, de couro para melhorar o visual do seu setup.",
    price: '75',
    tag: 'Setup',
    imageSrc: "/ProductsImages/mousePadBlack.jpeg",
    imageAlt: "Mouse pad em cima da bancada da cor marrom claro muito minimalista.",
  },
];

// Componente de página para visualizar o produto
const ProductView = () => {
  // Obtém o parâmetro 'id' da URL
  const params = useParams();
  const { id } = params;

  // Garante que o ID é uma string e converte para número
  const productId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

  // Encontra o produto correspondente ao ID
  const product = products.find((product) => product.id === productId);

  // Renderiza a página
  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-auto mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-2xl font-bold">{product.price}</p>
    </div>
  );
};

export default ProductView;