"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { day: "Mon", desktop: 30 },
  { day: "Tue", desktop: 32 },
  { day: "Wed", desktop: 40 },
  { day: "Thu", desktop: 60 },
  { day: "Fri", desktop: 40 },
  { day: "Sat", desktop: 44 },
  { day: "Sun", desktop: 44 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartComponent() {
  return (
    <Card className="border-none mx-2 mt-2 -translate-y-[55px] bg-transparent">
      <CardContent className="mx-12 translate-y-2">
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            width={500} 
            height={300} 
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="#FFF3C6" radius={3} barSize={30} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
