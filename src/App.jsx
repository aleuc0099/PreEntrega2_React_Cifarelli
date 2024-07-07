import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import "./styles/App_styles/App.css";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
