import React from "react";

const CommonButton = (props) => {
  const name = props.name;
  const type = props.type;
  return (
    <button
      type={type}
      className="w-full bg-[#FF6B6B] text-white py-2 px-4 rounded-md font-medium hover:bg-[#FF5252] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B] shadow-md cursor-pointer">
      {name}
    </button>
  );
};

export default CommonButton;
