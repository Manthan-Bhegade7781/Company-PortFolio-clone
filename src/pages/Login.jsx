import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-8">

      <div className="w-full max-w-[400px] rounded-[22px] border border-[#2a2a2a] bg-[#111111] px-7 py-8 ">

        {/* Heading */}

        <h1 className="text-[28px] lg:text-[32px] font-bold leading-tight text-white">
          Welcome Back
        </h1>

        <p className="mt-2 lg:mt-2 text-[16px] text-gray-400">
          Login to your portfolio dashboard
        </p>

        {/* Email */}

        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email *"
        className="
            mt-8
            h-[55px]
            w-full
            rounded-xl
            border
            border-[#2b2b2b]
            bg-[#0d0d0d]
            px-5
            text-white
            font-medium
            placeholder:text-gray-500
            outline-none
            transition
            focus:border-white
        "
        />

        {/* Password */}

        <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password *"
        className="
            mt-4
            h-[55px]
            w-full
            rounded-xl
            border
            border-[#2b2b2b]
            bg-[#0d0d0d]
            px-5
            text-white
            placeholder:text-gray-500
            outline-none
            transition
            focus:border-white
        "
        />

        {/* Forgot */}

        <div className="mt-4 text-right">

          <button className="text-[14px] text-[#c44cff] hover:text-[#d46dff]">
            Forgot Password?
          </button>

        </div>

        {/* Buttons */}

        <div className="mt-6 flex flex-col lg:flex-row gap-3">

        <button
            className="
              h-[47px]
              lg:flex-1
              rounded-xl
              bg-gradient-to-r
              from-[#A63DF5]
              to-[#C748F8]
              text-white
              font-bold
              transition
              hover:brightness-110
            "
        >
            Login
          </button>

          <Link
            to="/register"
            className="
             h-[47px]
              lg:flex-1
              rounded-xl
              border
              border-[#444]
              bg-[#2d2d2d]
              text-white
              font-bold
              transition
              hover:bg-[#3b3b3b]
              flex
              items-center
              justify-center
            "
          >
            Sign Up
          </Link>

        </div>

        {/* OR */}

        <div className="my-5 text-center">

          <span className="text-gray-500">
            OR
          </span>

        </div>


        <button
          className="
          flex
          h-[44px]
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-white
          text-[16px]
          font-bold
          text-black
          transition
          hover:bg-gray-100
          "
        >

          Login with Google
        </button>

      </div>

    </section>
  );
};

export default Login;