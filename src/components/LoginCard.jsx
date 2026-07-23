import { FcGoogle } from "react-icons/fc";

const LoginCard = () => {
  return (
    <div className="w-full max-w-[380px] rounded-3xl border border-white/10 bg-[#111111] p-8 shadow-[0_0_50px_rgba(0,0,0,0.45)]">

      {/* Heading */}

      <h1 className="text-5xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="mt-3 text-gray-400">
        Login to your portfolio dashboard
      </p>

      {/* Email */}

      <div className="mt-10">
        <input
          type="email"
          placeholder="Email *"
          className="h-14 w-full rounded-xl border border-zinc-800 bg-black px-5 text-white outline-none transition focus:border-purple-500"
        />
      </div>

      {/* Password */}

      <div className="mt-5">
        <input
          type="password"
          placeholder="Password *"
          className="h-14 w-full rounded-xl border border-zinc-800 bg-black px-5 text-white outline-none transition focus:border-purple-500"
        />
      </div>

      {/* Forgot */}

      <div className="mt-3 flex justify-end">
        <button className="text-sm text-purple-400 hover:text-purple-300">
          Forgot Password?
        </button>
      </div>

      {/* Buttons */}

      <div className="mt-7 grid grid-cols-2 gap-4">

        <button
          className="
          h-12
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-500
          font-semibold
          text-white
          transition
          hover:scale-[1.02]
          "
        >
          Login
        </button>

        <button
          className="
          h-12
          rounded-xl
          border
          border-zinc-700
          bg-zinc-800
          font-semibold
          text-white
          transition
          hover:bg-zinc-700
          "
        >
          Sign Up
        </button>

      </div>

      {/* Divider */}

      <div className="my-7 flex items-center gap-3">

        <div className="h-px flex-1 bg-zinc-800"></div>

        <span className="text-sm text-gray-500">
          OR
        </span>

        <div className="h-px flex-1 bg-zinc-800"></div>

      </div>

      {/* Google */}

      <button
        className="
        flex
        h-12
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-white
        font-semibold
        text-black
        transition
        hover:bg-gray-100
        "
      >
        <FcGoogle className="text-xl" />

        Login with Google
      </button>

    </div>
  );
};

export default LoginCard;