import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-8 py-10">
      <div className="w-full max-w-[400px] rounded-[22px] border border-[#2a2a2a] bg-[#111111] px-7 py-8">

        {/* Heading */}

        <h1 className="text-[25px] lg:text-[28px] lg:text-[32px] font-bold leading-tight text-white">
          Start Free Trial
        </h1>

        <p className="mt-2 text-[14px] lg:text-[16px] text-gray-400">
          3-Day Trial • Watermarked Version
        </p>

        {/* First Name */}

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name *"
          className="mt-8 h-[45px] lg:h-[55px] w-full rounded-xl border border-[#2b2b2b] bg-[#0d0d0d] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-white"
        />

        {/* Last Name */}

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="mt-4 h-[45px] lg:h-[55px] w-full rounded-xl border border-[#2b2b2b] bg-[#0d0d0d] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-white"
        />

        {/* Email */}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          className="mt-4 h-[45px] lg:h-[55px] w-full rounded-xl border border-[#2b2b2b] bg-[#0d0d0d] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-white"
        />

        {/* Password */}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password *"
          className="mt-4 h-[45px] lg:h-[55px] w-full rounded-xl border border-[#2b2b2b] bg-[#0d0d0d] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-white"
        />

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
            Start Free Trial
          </button>

          <Link
            to="/login"
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
            Login
          </Link>

        </div>

        {/* OR */}

        <div className="my-5 text-center">
          <span className="text-gray-500">OR</span>
        </div>

        {/* Google */}

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
          Signup with Google
        </button>

      </div>
    </section>
  );
};

export default Register;