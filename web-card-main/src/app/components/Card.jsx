import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function Card({ image, title, subTitle, description, date }) {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header */}
      <div className="flex justify-center items-center text-2xl md:text-3xl font-bold bg-teal-400 h-48 px-4 text-white">
        <h1 className="text-center">{title}</h1>
      </div>

      {/* Content Card */}
      <div className="bg-gray-600 w-[90%] sm:w-[80%] md:w-[60%] mx-auto -mt-10 rounded-lg p-6 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0">
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto"
          />
        </div>

        {/* Info */}
        <div className="text-teal-300 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <CiCalendarDate size={20} />
            <p>{date}</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <IoLocationOutline size={20} />
            <p>{subTitle}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-black text-center mt-8 px-4 sm:px-10 md:px-20">
        {description}
      </p>
    </div>
  );
}
