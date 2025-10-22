import React from "react";

const Arrival = ({ Arrivals }) => {
  const { name, image } = Arrivals;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5  transition-transform transform hover:scale-105 duration-300">
      <figure>
        <img
          src={image}
          alt={name}
          className="w-full h-36 object-cover rounded-lg mb-3 border border-gray-100 "
        />
      </figure>
      <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{name}</h3>
      <button className="w-full bg-[#FFD93D] text-[#0F172A] py-2 px-4 rounded-md font-medium hover:bg-[#FF6B6B] hover:text-white transition duration-300 ">
        View Details
      </button>
    </div>
  );
};

export default Arrival;
