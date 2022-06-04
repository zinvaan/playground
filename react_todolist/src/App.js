import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Search from './pages/Search';
import ListPorducts from './pages/ListProducts';
import AddProduct from './pages/AddProduct';
import ProductDisplay from './pages/ProductDisplay';
import { Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/products/search">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/search" element={<Search />} />
        <Route path="/products/list" element={<ListPorducts />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/:id" element={<ProductDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
