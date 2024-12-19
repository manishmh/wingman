"use client";

import { BsBarChartLineFill } from "react-icons/bs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const chartData = [
  { period: "This week", consultations: 20, ordersClosed: 18 },
  { period: "Last week", consultations: 18, ordersClosed: 16 },
];

export function PastPeriod() {
  return (
    <Card className="rounded-lg border border-gray-200 h-full shadow flex flex-col w-full">
      <CardHeader>
        <CardDescription className="flex items-center gap-2 uppercase font-medium text-font-gray">
          <BsBarChartLineFill /> vs past period
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 -translate-x-3">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickCount={6}
              domain={[0, 20]}
              style={{ fontSize: "12px", fill: "#6B7280" }}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="period"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              style={{ fontSize: "12px", fill: "#6B7280" }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
                color: "#4B5563",
              }}
              itemStyle={{ color: "#1F2937" }}
            />
            <Bar
              dataKey="consultations"
              fill="#A7F3D0"
              radius={2}
              barSize={30}
            />
            <Bar dataKey="ordersClosed" fill="#065F46" radius={2} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="border-t mt-4 pt-3 text-gray-600 px-1 text-sm flex gap-8 flex-1 flex-wrap justify-center">
        <div className="flex items-center gap-2 flex-shrink-0 truncate">
          <div className="h-1 w-5 bg-[#A7F3D0] rounded-full"></div>
          Consultations
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="h-1 w-5 bg-[#065F46] rounded-full"></div>
          Orders Closed
        </div>
      </CardFooter>
    </Card>
  );
}
