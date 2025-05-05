"use client";

import React, { useState } from "react";

export default function CalculatePage() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const subtractOne = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-emerald-100 items-center justify-center px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
        Counter Program
      </h1>
      <p className="text-3xl font-semibold text-black mb-6">{count}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={addOne}
        >
          Add 1
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={subtractOne}
        >
          Subtract 1
        </button>
      </div>
    </div>
  );
}
