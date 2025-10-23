import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import Container from "../Components/Container";
import CommonButton from "../Components/CommonButton/CommonButton";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import WithGoogle from "../Components/CommonButton/WithGoogle";

const Login = () => {
  const navigate = useNavigate();
  const { LoginUser, loading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  //!  form functionality

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    LoginUser(email, password)
      .then((userInformation) => {
        if (!userInformation?.user?.emailVerified) {
          toast.error("please verify your email to check your inbox");
          return;
        }
        navigate("/");
      })
      .catch((error) => {
        // toast.error(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      {loading ? (
        <span className="loading loading-spinner text-error"></span>
      ) : (
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-md border border-[#FF6B6B] p-6 w-full max-w-md shadow-lg">
              {/* Back button */}
              <div className="flex items-center mb-4">
                <Link
                  to="/"
                  className="flex items-center text-[#4D96FF] hover:text-[#FF6B6B] transition">
                  <FaArrowLeft className="mr-2" /> Back
                </Link>
              </div>

              {/* Header */}
              <h2 className="text-2xl font-bold text-[#FF6B6B] mb-2 text-center">
                Login to Your Account
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Welcome back! Please enter your credentials
              </p>

              <form className="space-y-4" onSubmit={handleLogin}>
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

                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400 text-sm" />
                    </div>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full pl-8 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#FF6B6B] transition-colors"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#FF6B6B] focus:ring-[#FF6B6B] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/user/forgotPassword"
                    className="text-sm text-[#4D96FF] hover:text-[#FF6B6B] transition">
                    Forgot Password?
                  </Link>
                </div>

                <CommonButton type={"submit"} name={"Login"} />
              </form>

              <div className="mt-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>
              <WithGoogle />
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/user/register"
                    className="font-medium text-[#4D96FF] hover:text-[#FF6B6B] transition">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Login;
