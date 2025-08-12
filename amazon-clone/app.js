const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 59.99,
    rating: 4,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 99.99,
    rating: 5,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Gaming Keyboard',
    price: 79.99,
    rating: 4,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    title: '4K Monitor',
    price: 299.99,
    rating: 5,
    image: 'https://via.placeholder.com/150'
  }
];

function Header() {
  return (
    <header className="header">
      <div className="logo">amazon<span>.clone</span></div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
      <nav className="nav">
        <a href="#">Hello, Sign in</a>
        <a href="#">Returns & Orders</a>
        <a href="#">Cart 🛒</a>
      </nav>
    </header>
  );
}

function ProductCard({ product }) {
  const stars = Array(product.rating).fill('⭐');
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <p className="title">{product.title}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <div className="rating">{stars}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <ProductGrid />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
