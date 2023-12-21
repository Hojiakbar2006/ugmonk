import { useLocation, useNavigate } from "react-router-dom";
import "./View.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function View() {
  const id = useLocation().pathname.split("/").pop();
  const [view, setView] = useState({});
  const [num, setNum] = useState(1);

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  console.log(products);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/products/${id}/`).then((res) => {
      setView(res.data.product);
      setProducts(res.data.related_products);
    });
  }, [id]);

  return (
    <div id="view">
      <div className="view_card">
        <figure>
          <img src={view.image} alt="product_img" />
        </figure>
        <div>
          <div>
            name: <span>{view.name}</span>
          </div>
          <div>
            description: <span>{view.description}</span>
          </div>
          <div>
            for who: <span>{view.for_who}</span>
          </div>
          <div>
            price: <span>{view.for_who}</span>
          </div>
          <div>
            <button onClick={() => setNum(num + 1)}>+</button>
            <p>{num}</p>
            <button onClick={() => (num === 1 ? {} : setNum(num - 1))}>
              -
            </button>
          </div>
          <div>
            <button onClick={()=>{
              axios
                .post("http://127.0.0.1:8000/api/v1/orders/", {
                  product: 1,
                  customer: 1,
                  quantity: 1,
                  phone_number: "+998993250628",
                  is_paid: true,
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}>Place order</button>
          </div>
        </div>
      </div>
      <div className="product_container">
        {products.map((item) => {
          const discount_price =
            item.price - (item.price / 100) * item.discount;
          return (
            <div
              key={item.id}
              onClick={() => {
                navigate(`/product/view/${item.id}`);
              }}
            >
              <figure>
                <img
                  src={`http://127.0.0.1:8000/${item.image}`}
                  alt="product_img"
                />
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
  );
}
