import {
  Mail,
  MessageCircle,
  Ticket,
} from "lucide-react";

const supportOptions = [
  {
    id: 1,
    icon: Mail,
    logoColor:"text-blue-500",
    title: "Email Support",
    description: "Contact our support team directly via email.",
    buttonText: "support@centennialinfotech.com",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 2,
    icon: MessageCircle,
    logoColor:"text-white",
    title: "Live Chat",
    description: "Chat with our team in real time for quick assistance.",
    buttonText: "Start Live Chat",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    id: 3,
    icon: Ticket,
    logoColor:"text-yellow-500",
    title: "Create a Ticket",
    description:
      "Submit a support request and we'll get back to you.",
    buttonText: "Create Ticket",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
];

const SupportCards = () => {
  return (
    <section className="lg:pb-3">
      <div className="mx-auto max-w-6xl lg:px-5 space-y-10">
        {supportOptions.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-[30px] border border-zinc-800 bg-[#151515] px-4 py-10 lg:px-6 lg:py-10 transition-all duration-300 hover:border-zinc-700 mb-6"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-4">
                  <Icon
                    size={51}
                    strokeWidth={1.8}
                    className={`${item.logoColor}`}
                  />
                </div>

                {/* Heading */}
                <h2 className="text-[25px] font-medium text-white">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-3 max-w-2xl text-[16px] text-gray-400">
                  {item.description}
                </p>

                {/* Button */}
                <button
                  className={`mt-5 rounded-xl px-5 py-3 text-[14px] text-white transition-all duration-300 ${item.buttonColor}`}
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SupportCards;