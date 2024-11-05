import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dynamic Route",
  description: "New description",
};

export default function Products() {
  return (
    <div>
      <h1>Men's Fashion Products</h1>
      <Link href="/products/product"> Go to Dynamic Products Page </Link>
    </div>
  );
}
