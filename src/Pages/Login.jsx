import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import Lottess from './Lottess';
// import LotteeLogin from './LotteeLogin/LotteeLogin';


const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { singInUser, singInGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singInUser(email, password)
      .then(result => {
        console.log(result);
        navigate(location?.state || '/');
        toast.success("Sign in successful");
      })
      .catch(error => {
        toast.error(error.message);
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    singInGoogle()
      .then(result => {
        console.log(result);
        navigate(location?.state || '/');
        toast.success("Google login successful");
      })
      .catch(error => {
        toast.error(error.message);
        console.error(error);
      });
  };

  return (
    <div className=" my-30 bg-white">
  

      {/* Main Login Section */}
      <main className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10">
        {/* Left Illustration */}
        {/* <div className="max-w-md hidden lg:block">
          <img src={img1} alt="" />
        </div> */}
        {/* <LotteeLogin></LotteeLogin> */}
        <div className='w-[20%]'>
          <Lottess></Lottess>
        </div>

        {/* Right Login Form */}
        <div className="border-2 border-orange-300 rounded-xl p-8 w-full max-w-md shadow-md">
          <h2 className="text-2xl font-bold text-center text-orange-500 mb-6 flex items-center justify-center gap-2">
            <span className="text-orange-600">🔐</span> Sign in
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">
                <span className="text-sm font-medium">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-sm font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
              <div className="text-right mt-1">
                <a href="#" className="text-orange-500 text-sm hover:underline">Forgot Password?</a>
              </div>
            </div>
            <button className="btn bg-orange-500 text-white w-full hover:bg-orange-600">
              Sign In
            </button>
          </form>

          <div className="divider my-4">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-xl" /> Sign in with Google
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-500 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>

    
    </div>
  );
};

export default Login;
