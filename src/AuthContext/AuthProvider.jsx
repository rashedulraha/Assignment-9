import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../FirebaseAuth/Firebase.init";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! register user
  const Register = async (email, password, photoUrl, fullname) => {
    setLoading(true);
    try {
      const userInformation = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userInformation?.user;
      await sendEmailVerification(userInformation?.user);
      await updateProfile(user, { displayName: fullname, photoURL: photoUrl });

      return user;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  //! Login user
  const LoginUser = async (email, password) => {
    setLoading(true);
    try {
      const userInformation = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      return userInformation;
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  // ! observer and get user data

  //! logout user
  const logout = () => {
    signOut(auth);
  };

  const userAuthentication = {
    Register,
    LoginUser,
    user,
    loading,
    logout,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("user in the auth state change", currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return <AuthContext value={userAuthentication}>{children}</AuthContext>;
};

export default AuthProvider;
