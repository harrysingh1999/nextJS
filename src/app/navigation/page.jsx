"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  const handleRoute = (route) => {
    router.push(route);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="font-bold text-4xl my-8">
        Navigation in Nextjs Application
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
    </div>
  );
}
