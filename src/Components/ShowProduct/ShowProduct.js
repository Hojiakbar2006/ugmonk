import React from "react";
import './ShowProduct.css'
import { useSelector } from "react-redux";

export function ShowProduct() {
const data = useSelector((state)=>state.product)


  return (
    <div className="ShowProduct">
      <div className="container">
        <div className="product_container">
          {data.map((item) => {
            const discount_price =
              item.price - (item.price / 100) * item.discount;
            return (
              <div key={item.id}>
                <figure>
                  <img src={item.image} alt="product_img" />
                </figure>
                <div>
                  <h3>{item.name}</h3>
                  <div>
                    {item.price} <span>{discount_price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
