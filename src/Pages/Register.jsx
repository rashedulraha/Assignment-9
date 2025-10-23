import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaCamera,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Container from "../Components/Container";
import CommonButton from "../Components/CommonButton/CommonButton";
import WithGoogle from "../Components/CommonButton/WithGoogle";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { Register, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // console.log(Register);

  const handleRegister = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const RegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!RegEx.test(password)) {
      toast.error(
        `Must contain an uppercase letter, lowercase Length  must be at least 6 characters.`
      );
      return;
    }

    Register(email, password, fullname, photoUrl)
      .then(() => {
        toast.success("Account create successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-md border border-[#FF6B6B] p-6 w-full max-w-md shadow-lg">
            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="flex flex-col md:flex-row gap-3">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-gray-700 text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400 text-sm" />
                    </div>
                    <input
                      name="fullname"
                      type="text"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="photoUrl"
                    className="block text-gray-700 text-sm font-medium mb-1">
                    Photo URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <FaCamera className="text-gray-400 text-sm" />
                    </div>
                    <input
                      id="photoUrl"
                      name="photoUrl"
                      type="url"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </div>
              </div>

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
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
                    placeholder="your@email.com"
                    required
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
                    className="w-full pl-8 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
                    placeholder="••••••••"
                    required
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
                <p className="text-xs text-gray-500 mt-1">
                  Must contain an uppercase letter, lowercase letter, and be at
                  least 6 characters long.
                </p>
              </div>

              <div className="flex items-center">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  className="h-4 w-4 text-[#FF6B6B] focus:ring-[#FF6B6B] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="agree-terms"
                  className="ml-2 text-sm text-gray-700">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-[#4D96FF] hover:text-[#FF6B6B] transition">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-[#4D96FF] hover:text-[#FF6B6B] transition">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <CommonButton
                type={"submit"}
                name={
                  loading ? (
                    <>
                      Registering...{" "}
                      <span className="loading text-sm loading-spinner text-warning ml-2"></span>{" "}
                    </>
                  ) : (
                    "Register"
                  )
                }
              />
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
                Already have an account?{" "}
                <Link
                  to="/user/login"
                  className="font-medium text-[#4D96FF] hover:text-[#FF6B6B] transition">
                  Sign in
                </Link>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Back to{" "}
                <Link
                  to="/"
                  className="font-medium text-[#4D96FF] hover:text-[#FF6B6B] transition">
                  Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
