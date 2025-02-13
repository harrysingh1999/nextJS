import React from "react";

export default async function FetchProductsOnServerComponent() {
  console.time("Data Fetch Time");
  const response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  console.timeEnd("Data Fetch Time");

  return (
    <div className="m-10">
      <h1 className="font-bold text-2xl text-center my-10">
        Fetched Data in Server Component
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((product) => {
          return (
            <div key={product.id} className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-60 aspect-square object-contain"
              />
              <p>{product.title} </p>
              <p>{product.price} </p>
              <p>{product.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
