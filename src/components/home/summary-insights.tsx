import { BarChartComponent } from "./bar-chart";
import Forecast from "./forecast";
import { LineChartComponent } from "./line-chart";
import { PastPeriod } from "./past-period";

const SummaryInsights = () => {
  return (
    <div>
      <h1 className="text-font-black font-medium text-2xl">Insights</h1>
      <div className="mt-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="w-full relative border border-gray-200 shadow rounded-2xl lg:col-span-2">
          <div className="w-full h- absolute bottom-0">
            <BarChartComponent />
          </div>
          <LineChartComponent />
        </div>
        <PastPeriod />
        <Forecast />
      </div>
    </div>
  );
};

export default SummaryInsights;
