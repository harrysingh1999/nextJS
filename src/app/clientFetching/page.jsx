"use client";
import React, { useEffect, useState } from "react";

export default function FetchProductsOnClientComponent() {
  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products", {
        cache: "force-cache",
      });
      let data = await response.json();
      setfetchedData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="m-10">
      <h1 className="font-bold text-2xl text-center my-10">
        Fetched Data in Client Component
      </h1>

      {fetchedData.map((product) => {
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
