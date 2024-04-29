import React, { useState } from "react";
import Product from "./Components/Product";

export interface Iproduct {
  id: number;
  title: string;
  description: string;
}
const App = () => {
  const [product, setProduct] = useState<Iproduct[]>([
    {
      id: 1,
      title: "black t-shirts",
      description: "yeah this is looking good",
    },
    { id: 2, title: "blue t-shirts", description: "yeah this is looking good" },
    { id: 3, title: "red t-shirts", description: "yeah this is looking good" },
  ]);

  const handleADDtoCart=(id:number)=>{
console.log(id)
  }

  return (
    <div>
      <Product product={product} handleADDtoCartClick={handleADDtoCart} />
    </div>
  );
};

export default App;
