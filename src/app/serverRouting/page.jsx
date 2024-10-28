import { redirect } from "next/navigation"; // Correct import
import React from "react";

export default function page() {
  const userStatus = null;

  userStatus === null && redirect("/products");
  return (
    <div>
      <p>Route to Page from Server Component</p>
    </div>
  );
}
