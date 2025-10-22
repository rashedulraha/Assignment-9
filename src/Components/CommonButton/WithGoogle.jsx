import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const WithGoogle = () => {
  const navigate = useNavigate();
  const { WithGoogle } = useContext(AuthContext);

  const handleWithGoogle = async () => {
    try {
      const userInformation = await WithGoogle();
      const user = userInformation?.user;

      if (user) {
        toast.success("Successfully Login");
        navigate("/");
      }
    } catch {
      toast.error("Login failed. Try again!");
    }
  };

  return (
    <button
      onClick={handleWithGoogle}
      className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300 cursor-pointer">
      <FaGoogle className="text-red-500 mr-2" /> Sign up with Google
    </button>
  );
};

export default WithGoogle;
