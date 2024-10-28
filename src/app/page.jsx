"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


export default function Home() {
  const router = useRouter();

  const handleRoute = (route) => {
    router.push(route);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-green-600 text-3xl text-center mb-10">
        {" "}
        This is the HomePage
      </h1>

      <h2 className="font-bold text-2xl mb-4">
        Navigation in Client based Components
      </h2>
      <div className="flex flex-col items-center mb-4">
        <h2 className="font-bold">
          1st Method of Navigating to Pages or Components via Link Component
        </h2>
        <Link href="/products">Go to Produts Page</Link>
        <Link href="/products/product"> Go to Dynamic Products Page </Link>
      </div>
      <div className="flex flex-col items-center mb-4">
        <h2 className="font-bold">
          2nd and Best Method of Navigating to Pages or Components via useRouter
          Hook
        </h2>

        <a onClick={() => handleRoute("/products")}>Go to Produts Page</a>
        <a onClick={() => handleRoute("/products/product")}>
          Go to Dynamic Products Page
        </a>
      </div>

      <h2 className="font-bold text-2xl mb-4">
        Navigation in Server based Components
      </h2>
      <a onClick={() => handleRoute('/serverRouting')}>Go to Server Routing </a>
      <p className="font-semibold">This will route you to Server Routing Component, but you will immediately be redirected to Products Page, Because server component routing is setup accordingly</p>
    </div>
  );
}
