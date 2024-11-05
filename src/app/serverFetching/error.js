"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  console.log("API error", error);

  return (
    <div>
      <h1>I am Server Fetching Error Boundary</h1>
      <h2 className="text-2xl font-extrabold text-red-500">{error.message} </h2>

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
