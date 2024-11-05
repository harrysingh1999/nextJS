"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  const links = [
    { name: "Home", path: "/" },
    { name: "Navigation in Client Component", path: "navigation" },
    { name: "Navigation in Server Component", path: "serverNavigation" },
    { name: "Products", path: "products" },
    { name: "Server Fetching", path: "serverFetching" },
    { name: "Client Fetching", path: "clientFetching" },
  ];

  const handleRoute = (route) => {
    router.push(route);
  };

  return (
    <header>
      <nav className="flex gap-6 m-10">
        {links.map((link) => (
          <a key={link.name} onClick={() => handleRoute(link.path)}>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
