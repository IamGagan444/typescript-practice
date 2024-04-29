import React from "react";
import { Iproduct } from "../App";

interface ProductProops{
    product:Iproduct[];
    handleADDtoCartClick(id:number):void
}

const Product = ({ product,handleADDtoCartClick}:ProductProops) => {
  return (
    <div>
      {product.map((val) => {
        return (
        
            <div className=" border border-black p-2 m-2 w-fit" key={val.id}>
              <h1>{val.title} </h1>
              <button className="bg-green-500 text-white p-1 px-4 font-semibold text-sm shadow-sm shadow-green-500"
              onClick={()=>handleADDtoCartClick(val.id)}
              >ADD TO CONSOLE</button>
            </div>
         
        );
      })}
    </div>
  );
};

export default Product;
