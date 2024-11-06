import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import "./styles/App_styles/App.css";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import CartDetail from "./components/cartDetail/CartDetail.jsx";
import PurchasePage from "./components/purchasePage/PurchasePage.jsx";
import ErrorPage from "./components/errorPage/ErrorPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/your_purchase" element={<PurchasePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
