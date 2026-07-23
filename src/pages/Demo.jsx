import { useState } from "react";

const Demo = () => {
  const [demoName, setDemoName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(demoName);
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-8">
      <div className="w-full max-w-[400px] rounded-[22px] border border-[#2a2a2a] bg-[#111111] px-7 py-8">

        {/* Heading */}

        <h1 className="text-[28px] lg:text-[32px] font-bold leading-tight text-white">
          Start Demo
        </h1>

        <p className="mt-2 text-[16px] text-gray-400">
          Preview the portfolio dashboard instantly.
        </p>

        {/* Form */}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Demo Name *"
            value={demoName}
            onChange={(e) => setDemoName(e.target.value)}
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

          <button
            type="submit"
            className="
              mt-6
              h-[47px]
              w-full
              rounded-xl
              bg-gradient-to-r
              from-[#2563EB]
              to-[#3B82F6]
              text-white
              font-bold
              transition
              hover:brightness-110
            "
          >
            Start Demo
          </button>

        </form>

      </div>
    </section>
  );
};

export default Demo;