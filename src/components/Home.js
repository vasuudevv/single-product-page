import React from "react";
import { Link } from "react-router-dom";
// import data from "../data/data";

function Home() {
  const data = [
    {
      id: 1,
      name: "Product 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done cvenenatis, dolor in finibus malesuada, lectus ipsum porta nunc, atiaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, egettristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare",
      price: "1111",
      img: "",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done cvenenatis, dolor in finibus malesuada, lectus ipsum porta nunc, atiaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, egettristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare",
      price: "2222",
      img: "",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done cvenenatis, dolor in finibus malesuada, lectus ipsum porta nunc, atiaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, egettristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare",
      price: "3333",
      img: "",
    },
    {
      id: 4,
      name: "Product 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done cvenenatis, dolor in finibus malesuada, lectus ipsum porta nunc, atiaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, egettristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare",
      price: "4444",
      img: "",
    },
  ];
  //console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <Link to={`/product/${item.id}`}>{item.id}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
