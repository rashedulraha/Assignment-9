import React from "react";
import { FaGoogle } from "react-icons/fa";

const WithGoogle = () => {
  return (
    <button className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300 cursor-pointer">
      <FaGoogle className="text-red-500 mr-2" /> Sign up with Google
    </button>
  );
};

export default WithGoogle;
