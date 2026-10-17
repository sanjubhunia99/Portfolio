import React from "react";

export default function Organization({ item, side }) {
  return (
    <div
      className={`relative w-full md:pl-8 flex justify-end ${
        side === "left" ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div className="w-[90%] md:w-[45%] bg-linear-to-br from-[#1e1b4b] via-[#312e81] to-[#155e75] text-white rounded-xl p-2 md:p-6 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_32px_rgba(34,211,238,0.3)] border border-white/15">
        <h2 className="md:text-xl font-bold mb-1 tracking-wide drop-shadow-lg">
          {item.title}
        </h2>
        <p className="text-sm md:text-base mt-1 opacity-90 font-medium">
          {item.role}
        </p>
        <p className="text-xs mt-2 text-gray-200 italic">{item.date}</p>
      </div>
    </div>
  );
}
