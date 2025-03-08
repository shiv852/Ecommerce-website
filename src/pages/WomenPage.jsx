import ProductGrid from '../components/products/ProductGrid';
import products from '../data/products';

const WomenPage = () => {
  // Filter products for women's category
  const womenProducts = products.filter(product => product.category === 'women');

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Women's Collection</h1>
        <p className="mt-4 text-lg text-gray-500">
          Explore our latest women's clothing and accessories
        </p>
      </div>
      
      <ProductGrid products={womenProducts} />
    </div>
  );
};

export default WomenPage; 