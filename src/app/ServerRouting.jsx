import { redirect } from "next/dist/server/api-utils";
import React from "react";

export default function ServerRouting() {
  const userStatus = null;

  userStatus === t && redirect("products");

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">
        Navigation in Server based Components
      </h2>
      <p>Route to Products Page</p>
    </div>
  );
}
