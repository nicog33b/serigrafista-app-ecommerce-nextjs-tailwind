import React from "react";
import ProductCard from "./productCard";

const Products = [
  {
    img: "https://img.lojasrenner.com.br/item/582701332/large/1.jpg",
    title: "",
    desc: "Lyon shirt",
    rating: 3,
    price: "58",
  },
  {
    img: "https://i.pinimg.com/474x/01/f6/9f/01f69f4275033104c492cf458d603dd9.jpg",
    title: "",
    desc: "Don Ramon shirt",
    rating: 3,
    price: "58",
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_630647-MLU52579025783_112022-O.webp",
    title: "",
    desc: "Chainsaw shirt",
    rating: 3,
    price: "58",
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_971507-MLU44750998723_012021-O.webp",
    title: "",
    desc: "Four black shirt",
    rating: 3,
    price: "58",
  },
  {
    img: "https://img.lojasrenner.com.br/item/582701332/large/1.jpg",
    title: "",
    desc: "Lyon shirt",
    rating: 3,
    price: "58",
  },
  {
    img: "https://i.pinimg.com/474x/01/f6/9f/01f69f4275033104c492cf458d603dd9.jpg",
    title: "",
    desc: "Don Ramon shirt",
    rating: 3,
    price: "58",
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_630647-MLU52579025783_112022-O.webp",
    title: "",
    desc: "Chainsaw shirt",
    rating: 3,
    price: "58",
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_971507-MLU44750998723_012021-O.webp",
    title: "",
    desc: "Four black shirt",
    rating: 3,
    price: "58",
  },
];

const NewProducts = () => {
    return (
      <div>
        <div className="container pt-16 mb-6">
          <h2 className="font-medium text-2xl pb-4">Nuevos productos</h2>
  
          <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {Products.map((item, index) => (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default NewProducts;