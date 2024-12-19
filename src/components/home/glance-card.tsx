import Image from "next/image";
import { ReactNode } from "react";

const GlanceCard = ({
  title,
  value,
  performance,
  rate,
  logo,
}: {
  title: string;
  value: string | number;
  performance: string;
  rate: string;
  logo: ReactNode;
}) => {
  return (
    <div className="tracking-wide border rounded-2xl px-6 py-7 text-sm shadow">
      <div className="text-font-gray flex items-center gap-2">
        <div>{logo}</div>
        <h1 className="uppercase font-medium text">{title}</h1>
      </div>
      <div className="text-font-black text-3xl mt-3 font-medium">{value}</div>
      <div className="flex items-center gap-2 mt-2">
        <Image
          src={
            performance === "increase"
              ? "/dashboard/TrendUp.svg"
              : "/dashboard/TrendDown.svg"
          }
          alt="trend-logo"
          width={20}
          height={20}
        />
        <div className={`${performance === "increase" ? "text-font-green" : "text-red-400"}`}>{rate}</div>
        <div className="text-font-gray ">{performance}</div>
      </div>
    </div>
  );
};

export default GlanceCard;
