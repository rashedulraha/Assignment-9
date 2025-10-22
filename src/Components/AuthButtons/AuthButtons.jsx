// const AuthButtons = () => (
//   <div className="flex items-center gap-3">
//     {user ? (
//       <>
//         <div className="relative group">
//           <img
//             src={
//               user.user_metadata?.avatar_url ||
//               user.photoURL ||
//               "/default-avatar.png"
//             }
//             alt={
//               user.user_metadata?.name ||
//               user.displayName ||
//               user.email ||
//               "User"
//             }
//             className="w-10 h-10 rounded-full border-2 border-[#FF6B6B] cursor-pointer"
//             onError={(e) => {
//               e.target.src = "/default-avatar.png";
//             }}
//           />
//           <div className="absolute -top-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
//           <div className="absolute top-full right-0 mt-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50 min-w-[150px]">
//             <p className="text-sm font-medium text-gray-700 truncate max-w-[140px]">
//               {user.user_metadata?.name || user.displayName || user.email}
//             </p>
//           </div>
//         </div>
//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-all duration-200 font-medium">
//           Logout
//         </button>
//       </>
//     ) : (
//       <>
//         <Link
//           to={loginPath}
//           className="flex items-center px-4 py-2 border border-[#0F172A] text-[#0F172A] rounded-lg hover:bg-[#0F172A] hover:text-white transition-all duration-200">
//           <FaUser className="mr-2" />
//           Login
//         </Link>
//         <Link
//           to={registerPath}
//           className="flex items-center px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-all duration-200">
//           <FaUser className="mr-2" />
//           Register
//         </Link>
//       </>
//     )}
//   </div>
// );

// export default AuthButtons;
