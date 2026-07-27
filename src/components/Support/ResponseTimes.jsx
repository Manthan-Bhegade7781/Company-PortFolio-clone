import {
  Mail,
  MessageCircle,
  Ticket,
} from "lucide-react";

const responseTimes = [
  {
    icon: Mail,
    color: "text-blue-400",
    title: "Email Support",
    time: "Within 24 hours",
  },
  {
    icon: MessageCircle,
    color: "text-purple-300",
    title: "Live Chat",
    time: "Usually within a few minutes",
  },
  {
    icon: Ticket,
    color: "text-yellow-400",
    title: "Support Tickets",
    time: "Within 1 business day",
  },
];

const ResponseTimes = () => {
  return (
    <section className="mx-auto lg:w-280 lg:px-5 space-y-10 rounded-[30px] border border-zinc-800 bg-[#151515] px-4 py-10 lg:px-6 lg:py-10 transition-all duration-300 hover:border-zinc-700 mb-6">
      <h2 className="mb-5 text-[25px] lg:text-[27px] font-bold text-white">
        Response Times
      </h2>

      <div className="space-y-3">
        {responseTimes.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 lg:gap-2"
            >
              <div className="flex items-center justify-center ">
                <Icon
                  size={18}
                  className={item.color}
                />
              </div>

              <p className="text-[16px] lg:text-[17px] text-zinc-300">
                <span className="text-white">
                  {item.title}
                </span>
                <span className="text-zinc-400">
                  {" "}
                  : {item.time}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResponseTimes;