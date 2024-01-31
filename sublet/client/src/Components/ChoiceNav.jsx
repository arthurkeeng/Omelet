import React from "react";

export default function ChoiceNav() {
  return (
    <nav
      className="
    rounded-full border w-64
    p-2 justify-around flex max-w-contain mx-auto"
    >
      <div className=" hover:text-red-300 font-bold pr-4 border-r border-blue-300 cursor-pointer">
        studio
      </div>
      <div className="hover:text-red-300 font-bold pr-4 border-r border-blue-300 cursor-pointer">
        1 bd
      </div>
      <div className="hover:text-red-300 font-bold pr-4 border-r border-blue-300 cursor-pointer">
        2 bd
      </div>
      <div className="hover:text-red-300 font-bold cursor-pointer"> 3 bd</div>
    </nav>
  );
}
