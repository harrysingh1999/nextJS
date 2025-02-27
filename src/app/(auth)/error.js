"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-2xl font-extrabold">{error.message} </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
