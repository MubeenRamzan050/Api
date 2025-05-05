import React from "react";
import Link from "next/link";

export default function Box({id, image, title, date, subTitle }) {
  return (
    <div className="bg-white rounded-md shadow-md m-4 p-4 flex flex-col md:flex-row md:items-center gap-4">
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img
          src={image}
          alt="Event"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-1/3 text-black">
        <h1 className="font-bold text-lg mb-1">{title}</h1>
        <h3 className="text-sm mb-1">{date}</h3>
        <p className="text-gray-500 text-sm">{subTitle}</p>
      </div>

      {/* Button */}
      <div className="w-full md:w-1/3 flex justify-start md:justify-end items-center">
        <Link href={`/details1/${id}`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Explore Event →
          </button>
        </Link>
      </div>
    </div>
  );
}
