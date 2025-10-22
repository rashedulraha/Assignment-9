import React from "react";

const Card = ({ cardData }) => {
  const { toyName, pictureURL, rating, price, availableQuantity } = cardData;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5  transition-transform transform hover:scale-105 duration-300">
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-36 object-cover rounded-lg mb-3 border border-gray-100"
      />
      <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{toyName}</h3>
      <p className="text-[#4D96FF] text-sm mb-1">Rating: {rating} ★</p>
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm mb-1">
          Available: <span className="text-[#FF6B6B]">{availableQuantity}</span>
        </p>
        <p className="text-gray-600 text-sm mb-3">
          Price:
          <span className="text-[#FF6B6B]"> ${price}</span>
        </p>
      </div>
      <button className="btn shadow-none w-full bg-[#FFD93D] text-[#0F172A] rounded-md font-medium hover:bg-[#FF6B6B] hover:text-white transition duration-30 border-none">
        View More
      </button>
    </div>
  );
};

export default Card;
