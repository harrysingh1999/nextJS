import React from "react";

export default async function FetchProductsOnServerComponent() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "default",
  });
  let data = await response.json();

  return (
    <div className="m-10">
      <h1 className="font-bold text-2xl text-center my-10">
        Fetched Data in Server Component
      </h1>

      {data.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.title} className="w-60" />
            <p>{product.title} </p>
            <p>{product.price} </p>
            <p>{product.description} </p>
          </div>
        );
      })}
    </div>
  );
}
