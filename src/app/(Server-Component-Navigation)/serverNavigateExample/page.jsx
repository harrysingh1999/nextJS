import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center mx-10">
      <h2 className="font-bold text-2xl mb-4">
        Navigation in Server based Components
      </h2>
      <p className="font-semibold">
        It should route you to "Server Routing Page", but you will
        immediately be redirected to "Server Navigate Example Page", Because server Routing Page is a "Server Component"
        and i have used server component navigation method there called "redirect".
      </p>
    </div>
  );
}
