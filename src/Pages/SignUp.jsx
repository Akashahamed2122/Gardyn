import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import Lottess from "./Lottess";

const SignUp = () => {
  const { createUser, user, singInGoogle, updateUser, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const googleSignIn = () => {
    singInGoogle()
      .then((result) => {
        toast.success("succesfully signup");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    if (!/^.{6,}$/.test(password)) {
      // alert('Password must be 6 charst');
      toast.success("password must be 6");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
      toast.error("You need strong password");
      return;
    }
    console.log(name, email, photo, password);

    // create user data hare
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          updateUser({ displayName: name, photoURL: photo }).then((result) => {
            //  setUser({...user,displayName:name,photoURL:photo})
            toast.success(" signup succesfully");
            navigate(location?.state || "/");
          });
        }
      })
      .catch((data) => {
        console.log(data);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-300 p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full grid md:grid-cols-2 overflow-hidden">
        {/* Left Side: Lottie Animation */}
        <div className="bg-green-50 flex items-center justify-center p-8">
          <div className="w-80 h-80 md:w-[350px] md:h-[350px]">
            <Lottess />
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-8 text-green-800 text-center tracking-wide">
            Create Account
          </h1>
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your full name"
                className="w-full px-5 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@mail.com"
                className="w-full px-5 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 transition"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="photo"
                className="block text-gray-700 font-semibold mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                required
                placeholder="Paste your photo URL"
                className="w-full px-5 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Choose a strong password"
                className="w-full px-5 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-green-300" />
            <span className="mx-4 text-green-600 font-semibold">OR</span>
            <hr className="flex-grow border-t border-green-300" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-6">
            <button
              onClick={googleSignIn}
              aria-label="Log in with Google"
              className="p-3 rounded-full border border-green-400 hover:bg-green-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-6 h-6 fill-current text-green-600"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
              </svg>
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center mt-6 text-green-700 font-medium">
            Already have an account?{" "}
            <Link
              to={`/login`}
              href="#"
              className="underline hover:text-green-900 transition"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
