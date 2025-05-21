
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import { Shop } from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'; // ✅ Fixed import
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/footer/Footer';
import ShopContextProvider from './Context/ShopContext';

import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
