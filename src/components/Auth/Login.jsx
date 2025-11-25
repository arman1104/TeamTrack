import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Your Email is", email);
    console.log("Your Password is", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      {/* Login Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-10 py-10 w-[85%] md:w-96 text-white shadow-xl">
        <h1 className="text-center text-3xl font-semibold mb-10">Login</h1>

        <form
          className="flex flex-col gap-8"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full bg-transparent outline-none border-b border-gray-300 pb-2 placeholder-gray-200 focus:border-white transition"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full bg-transparent outline-none border-b border-gray-300 pb-2 placeholder-gray-200 focus:border-white transition"
            />
          </div>

          {/* Remember + Forget */}
          <div className="flex justify-between text-sm text-gray-200">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              Remember Me
            </label>
            <span className="hover:underline cursor-pointer">
              Forgot Password
            </span>
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="bg-white text-gray-800 font-semibold py-2 rounded-full hover:bg-gray-100 transition"
          >
            Log In
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-200 mt-2">
            Don’t have an account?{" "}
            <span className="text-white font-semibold hover:underline cursor-pointer">
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
