import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Header from "./component/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
