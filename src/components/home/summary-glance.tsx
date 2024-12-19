import { AtAGlanceDummy } from "@/constant";
import { FaCheck } from "react-icons/fa6";
import {
  PiChatTeardropFill,
  PiCoinFill,
  PiCoinsFill,
  PiPiggyBankFill,
  PiTagFill,
} from "react-icons/pi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GlanceCard from "./glance-card";

const Glance = () => {
  const icons = [
    <PiChatTeardropFill key="chat" />,
    <PiTagFill key="tag" />,
    <FaCheck key="check" />,
    <PiCoinsFill key="coins" />,
    <PiCoinFill key="coin" />,
    <PiPiggyBankFill key="piggybank" />,
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-font-black font-medium text-2xl">At a glance</h1>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="7 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1 day">1 day</SelectItem>
            <SelectItem value="3 days">3 days</SelectItem>
            <SelectItem value="7 days">7 days</SelectItem>
            <SelectItem value="1 month">1 month</SelectItem>
            <SelectItem value="6 months">6 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AtAGlanceDummy.map((item, index) => (
          <GlanceCard
            key={item.title}
            title={item.title}
            value={item.data}
            performance={item.performance}
            rate={item.rate}
            logo={icons[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Glance;
