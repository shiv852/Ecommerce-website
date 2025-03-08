import { Link } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';
import products from '../data/products';

const HomePage = () => {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Fashion Banner"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            StyleHub
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Discover the latest trends in men's and women's fashion. Quality clothing for every occasion.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/men"
              className="inline-block bg-white text-gray-900 border border-transparent rounded-md py-3 px-8 font-medium hover:bg-gray-100"
            >
              Shop Men
            </Link>
            <Link
              to="/women"
              className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium hover:bg-indigo-700"
            >
              Shop Women
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-500">
            Check out our most popular items this season
          </p>
        </div>
        <div className="mt-12">
          <ProductGrid products={featuredProducts} />
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/men"
            className="inline-block bg-indigo-600 text-white border border-transparent rounded-md py-3 px-8 font-medium hover:bg-indigo-700 mr-4"
          >
            View Men's Collection
          </Link>
          <Link
            to="/women"
            className="inline-block bg-indigo-600 text-white border border-transparent rounded-md py-3 px-8 font-medium hover:bg-indigo-700"
          >
            View Women's Collection
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Shop by Category</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                <img
                  src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Men's Collection"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Men's Collection</h3>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/men"
                  className="inline-block bg-white text-gray-900 border border-gray-300 rounded-md py-2 px-6 font-medium hover:bg-gray-50"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Women's Collection"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Women's Collection</h3>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/women"
                  className="inline-block bg-white text-gray-900 border border-gray-300 rounded-md py-2 px-6 font-medium hover:bg-gray-50"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 