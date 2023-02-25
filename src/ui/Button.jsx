import React from "react";

export const Button = ({ Children, primary, className }) => {
  return (
    <button
      className={`${
        primary
          ? "text-white border px-2 py-8 bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md"
          : "bg-transparent border-none text-black border px-2 py-8  border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md"
      } ${className}`}
    >
      {Children}
    </button>
  );
};
