"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PiChatTeardropFill } from "react-icons/pi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const chartData = [
  { day: "Mon", incoming: 30, answered: 30, expertsOnline: 10 },
  { day: "Tue", incoming: 35, answered: 32, expertsOnline: 12 },
  { day: "Wed", incoming: 40, answered: 35, expertsOnline: 15 },
  { day: "Thu", incoming: 45, answered: 50, expertsOnline: 20 },
  { day: "Fri", incoming: 50, answered: 38, expertsOnline: 14 },
  { day: "Sat", incoming: 55, answered: 40, expertsOnline: 16 },
  { day: "Sun", incoming: 60, answered: 42, expertsOnline: 18 },
];

export function LineChartComponent() {
  return (
    <Card className="rounded-2xl bg-transparent border-none ">
      <CardHeader>
        <CardDescription className="uppercase font-medium tracking-wide flex items-center gap-2">
          <PiChatTeardropFill /> Consultations
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 bg-transparent">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            className="bg-transparent"
            data={chartData}
            margin={{
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            
            <YAxis
              yAxisId="left"
              domain={[10, 60]}
              tickCount={6}
              tickLine={false}
              axisLine={false}
              style={{ fontSize: 14 }}
              tickFormatter={(value) => value}
              label={{
                value: "CONSULTATIONS",
                angle: -90,
                dx: -10,
                style: { textAnchor: "middle", fontSize: 10, fill: "#A3A3A3" },
              }}
            />
            <YAxis
              yAxisId="right"
              domain={[0, 20]}
              orientation="right"
              tickCount={6}
              tickLine={false}
              axisLine={false}
              style={{ fontSize: 14 }}
              tickFormatter={(value) => value}
              label={{
                value: "CONSULTATIONS",
                angle: -90,
                dx: 10,
                style: { textAnchor: "middle", fontSize: 10, fill: "#A3A3A3" },
              }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              dataKey="incoming"
              type="monotone"
              stroke="#A3A3A3"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
              name="Incoming"
            />
            <Line
              yAxisId="left"
              dataKey="answered"
              type="monotone"
              stroke="#14B8A6"
              strokeWidth={2}
              dot={false}
              name="Answered"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="border-t-2 mx-6 pt-6 text-font-gray text-sm flex gap-8 px-0  ">
        <div className="flex items-center gap-2">
          <div className="h-1 w-5 bg-[#A3A3A3] rounded-full"></div>
          Incoming
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1 w-5 bg-[#14B8A6] rounded-full"></div>
          Answered
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1 w-5 bg-[#FFE587] rounded-full"></div>
          Experts Online
        </div>
      </CardFooter>
    </Card>
  );
}
