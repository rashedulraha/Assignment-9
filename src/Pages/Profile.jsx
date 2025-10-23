import React, { useState, useContext, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaEdit,
  FaSave,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import AuthContext from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import CommonButton from "../Components/CommonButton/CommonButton";
import Container from "../Components/Container";

const Profile = () => {
  const { user, updateUserProfile, loading } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  // const navigate = useNavigate();

  // Sync formData with user data when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update profile with new data
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await updateUserProfile({
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  // Cancel editing and reset form
  const handleCancelEdit = () => {
    setFormData({
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
    });
    setIsEditing(false);
  };

  // Render profile picture with fallback
  const renderProfilePicture = () => (
    <div className="relative">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FF6B6B] shadow-lg">
        {formData.photoURL ? (
          <img
            src={formData.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://cdn-icons-png.flaticon.com/512/428/428573.png";
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D] flex items-center justify-center">
            <FaUser className="text-4xl text-white" />
          </div>
        )}
      </div>
    </div>
  );

  // Render profile form for editing
  const renderProfileForm = () => (
    <form onSubmit={handleUpdateProfile} className="space-y-4">
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <FaUser className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleInputChange}
            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
            placeholder="Your full name"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Photo URL
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <FaUser className="text-gray-400 text-sm" />
          </div>
          <input
            type="url"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleInputChange}
            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition"
            placeholder="https://example.com/photo.jpg"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <CommonButton
            type="submit"
            name={isUpdating ? "Saving..." : "Save Changes"}
            icon={<FaSave className="mr-2" />}
            disabled={isUpdating}
          />
        </div>
        <div className="flex-1">
          <button
            type="button"
            onClick={handleCancelEdit}
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition w-full">
            <FaTimes className="mr-2" /> Cancel
          </button>
        </div>
      </div>
    </form>
  );

  // Render profile view (non-editing mode)
  const renderProfileView = () => (
    <>
      <h2 className="text-2xl font-bold text-[#1A252F] mb-2">
        {formData.displayName || "ToyTopia User"}
      </h2>
      <div className="flex items-center text-gray-600 mb-4">
        <FaEnvelope className="mr-2 text-[#FF6B6B]" />
        <span>{user?.email || "No email available"}</span>
      </div>
      <button
        onClick={() => setIsEditing(true)}
        className="flex items-center gap-2 bg-[#FFD93D] text-[#0F172A] py-2 px-4 rounded-md font-medium hover:bg-[#FF6B6B] hover:text-white transition">
        <FaEdit /> Edit Profile
      </button>
    </>
  );

  // Render account information
  const renderAccountInfo = () => (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold text-[#1A252F] mb-4">
        Account Information
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Member Since</p>
          <p className="font-medium">
            {user?.metadata?.creationTime
              ? new Date(user.metadata.creationTime).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Last Sign In</p>
          <p className="font-medium">
            {user?.metadata?.lastSignInTime
              ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email Verified</p>
          <p className="font-medium">
            {user?.emailVerified ? (
              <span className="text-green-600">Yes</span>
            ) : (
              <span className="text-red-600">No</span>
            )}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Account Status</p>
          <p className="font-medium text-green-600">Active</p>
        </div>
      </div>
    </div>
  );

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <span className="loading loading-spinner text-[#FF6B6B] text-4xl"></span>
          <p className="mt-4 text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  // Show message if no user is logged in
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold text-[#1A252F] mb-4">
            Please log in
          </h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to view your profile.
          </p>
          <Link
            to="/user/login"
            className="inline-flex items-center px-4 py-2 bg-[#FF6B6B] text-white rounded-md font-medium hover:bg-[#FF5252] transition">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      <Container>
        <div>
          {/* Back button */}
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="flex items-center text-[#4D96FF] hover:text-[#FF6B6B] transition">
              <FaArrowLeft className="mr-2" /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#FF6B6B] mb-2">
              My Profile
            </h1>
            <p className="text-gray-600">Manage your account information</p>
          </div>

          {/* Profile Card */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="flex-shrink-0">{renderProfilePicture()}</div>
            <div className="flex-1 w-full">
              {isEditing ? renderProfileForm() : renderProfileView()}
            </div>
          </div>

          {/* Account Information */}
          {renderAccountInfo()}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
