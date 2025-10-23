import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const WithGoogle = () => {
  const navigate = useNavigate();
  const { WithGoogle: signInWithGoogle, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  // Navigate when user is authenticated
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      // Navigation will be handled by the useEffect when user state updates
    } catch (error) {
      toast.error("Login failed. Try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleWithGoogle}
      disabled={isLoading}
      className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300 cursor-pointer disabled:opacity-50">
      {isLoading ? (
        <>
          <span className="loading loading-spinner text-red-500 mr-2"></span>
          Signing in...
        </>
      ) : (
        <>
          <FaGoogle className="text-red-500 mr-2" /> Sign up with Google
        </>
      )}
    </button>
  );
};

export default WithGoogle;
