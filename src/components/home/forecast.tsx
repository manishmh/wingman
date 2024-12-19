import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiChatTeardropFill } from "react-icons/pi";

const Forecast = () => {
  return (
    <div className="h-full w-full rounded-2xl overflow-hidden relative">
      <div className="absolute z-10 inset-0 px-6 py-8">
        <div className="uppercase flex items-center text-sm font-medium gap-2 text-[#CCFBEF] tracking-wide">
          <PiChatTeardropFill /> Forecasts
        </div>
        <div>
          <div className="text-white flex justify-between mt-10">
            <div className="text-4xl md:text-[55px] font-medium">+15%</div>
            <FaArrowTrendUp className="text-2xl md:text-3xl" />
          </div>
          <p className="text-white text-sm mt-5">
            forecasted increase in your sales closed by the end of the current
            month
          </p>
        </div>
        <div>
          <div className="text-white flex justify-between mt-10">
            <div className="text-4xl md:text-[55px] font-medium">+20%</div>
            <FaArrowTrendUp className="text-2xl md:text-3xl" />
          </div>
          <p className="text-white text-sm mt-5">
            forecasted increase consultations by the end of the current month
          </p>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/dashboard/Card.png"
          alt="forecast-card"
          width={260}
          height={500}
          quality={100}
          priority
          className="scale-[150%]"
        />
      </div>
    </div>
  );
};

export default Forecast;
