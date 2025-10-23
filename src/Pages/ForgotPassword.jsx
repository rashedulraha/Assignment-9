import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import Container from "../Components/Container";
import CommonButton from "../Components/CommonButton/CommonButton";
import AuthContext from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
      // Redirect to login page after successful submission
      setTimeout(() => navigate("/user/login"), 3000);
    } catch (error) {
      console.error("Password reset error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-md border border-[#FF6B6B] p-6 w-full max-w-md shadow-lg">
            <div className="flex items-center mb-4">
              <Link
                to="/user/login"
                className="flex items-center text-[#4D96FF] hover:text-[#FF6B6B] transition">
                <FaArrowLeft className="mr-2" /> Back
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-[#1A252F] mb-2 text-center">
              Forgot Password
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400 text-sm" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
                  />
                </div>
              </div>

              <CommonButton
                type="submit"
                name={isSubmitting ? "Sending..." : "Reset Password"}
                disabled={isSubmitting}
              />
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link
                  to="/user/login"
                  className="font-medium text-[#4D96FF] hover:text-[#FF6B6B] transition">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
