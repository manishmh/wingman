import { FaArrowTrendUp } from "react-icons/fa6";
import { PiChatTeardropFill } from "react-icons/pi";

const Forecast = () => {
  return (
    <div className="h-full w-full rounded-3xl relative overflow-hidden min-h-[400px]">
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
      <div className="w-full h-full overflow-hidden bg-[#109c89] relative">
        <div className="bg-gradient-to-br from-[#2db19f] to-[#30ae9c] absolute w-[800px] aspect-square rounded-full bottom-[30%] -right-1/3"></div>
        <div className="bg-gradient-to-br from-[#2eb7a3] to-[#39b8a7] absolute w-[400px] aspect-square rounded-full bottom-[50%] right-[20%]"></div>
        <div className="bg-gradient-to-br from-[#15b69e] to-[#25b6a1] absolute w-[200px] aspect-square rounded-full -top-[15%] -left-[25%]"></div>
      </div>
    </div>
  );
};

export default Forecast;
