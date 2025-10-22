import { Link } from "react-router";
import { FaEnvelope } from "react-icons/fa";
import Container from "../Components/Container";
import CommonButton from "../Components/CommonButton/CommonButton";

const ForgotPassword = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-md border border-[#FF6B6B] p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold text-[#1A252F] mb-6 text-center">
              Forgot Password
            </h2>
            <form className="space-y-4">
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
                    placeholder="your@email.com"
                    required
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
                  />
                </div>
              </div>
              <CommonButton type="submit" name="Reset Password" />
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
