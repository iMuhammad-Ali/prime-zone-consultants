import { useMemo } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { useIsMobile } from "~/hooks/use-mobile";

// Interface for storing consultation data
interface ConsultationData {
  month: string;
  successful: number;
  unsuccessful: number;
  total: number;
  successRate: number;
  monthKey: string; // unique identifier for the month (YYYY-MM)
}

// Function to generate data for a single completed month
const generateMonthData = (year: number, month: number): ConsultationData => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = monthNames[month];
  const monthKey = `${year}-${month.toString().padStart(2, "0")}`;

  // Seeded random function for consistent data within the same month
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Create a unique seed for each month-year combination
  const monthSeed = year * 100 + month;

  // Generate realistic consultation data based on month with seeded randomization
  const successfulMin = 40;
  const successfulMax = 85;
  const unsuccessfulMin = 10;
  const unsuccessfulMax = 25;

  // Use seeded random for consistent values within the same month
  const successfulRandom = seededRandom(monthSeed * 1.1);
  const unsuccessfulRandom = seededRandom(monthSeed * 1.3);

  const baseSuccessful =
    successfulMin +
    Math.floor(successfulRandom * (successfulMax - successfulMin));
  const baseUnsuccessful =
    unsuccessfulMin +
    Math.floor(unsuccessfulRandom * (unsuccessfulMax - unsuccessfulMin));

  // Add seasonal variation (higher numbers in peak months)
  const isHighSeason = [8, 9, 0, 1].includes(month); // Sep, Oct, Jan, Feb
  const isMediumSeason = [2, 3, 10, 11].includes(month); // Mar, Apr, Nov, Dec

  let seasonalMultiplier = 1;
  if (isHighSeason) {
    seasonalMultiplier = 1.15 + seededRandom(monthSeed * 1.7) * 0.15; // 1.15-1.30
  } else if (isMediumSeason) {
    seasonalMultiplier = 1.05 + seededRandom(monthSeed * 1.9) * 0.1; // 1.05-1.15
  } else {
    seasonalMultiplier = 0.85 + seededRandom(monthSeed * 2.1) * 0.2; // 0.85-1.05
  }

  const successful = Math.floor(baseSuccessful * seasonalMultiplier);
  const unsuccessful = Math.floor(baseUnsuccessful * seasonalMultiplier);

  return {
    month: monthName, // Only short month name for X-axis
    successful,
    unsuccessful,
    total: successful + unsuccessful,
    successRate: Math.round((successful / (successful + unsuccessful)) * 100),
    monthKey,
  };
};

// Function to generate last 12 months data - same for all users
const generateLast12MonthsData = (): ConsultationData[] => {
  const currentDate = new Date();
  const result: ConsultationData[] = [];

  // Generate exactly the last 12 completed months (excluding current incomplete month)
  for (let i = 12; i >= 1; i--) {
    const targetDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    );
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();

    // Generate data for this completed month - same for all users
    const newData = generateMonthData(year, month);
    result.push(newData);
  }

  return result;
};

const chartConfig = {
  unsuccessful: {
    label: "Unsuccessful Consultations",
    color: "#e2e8f0",
  },
  successful: {
    label: "Successful Consultations",
    color: "#3b82f6",
  },
};

interface ConsultationPerformanceChartProps {
  className?: string;
  height?: string;
}

const ConsultationPerformanceChart = ({
  className = "",
  height = "2xl:h-[15vw]",
}: ConsultationPerformanceChartProps) => {
  const isMobile = useIsMobile();

  // Create a stable key that only changes when a new month completes
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // This key changes only when we enter a new month (previous month becomes completed)
  const monthKey = `${currentYear}-${currentMonth}`;

  // Generate chart data - updates only when month changes, preserves previous data
  const chartData = useMemo(() => {
    return generateLast12MonthsData();
  }, [monthKey]); // Regenerates only when month changes

  // Calculate subtitle for exactly 12 completed months range
  const lastCompletedMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const startMonth = new Date(now.getFullYear(), now.getMonth() - 12, 1);

  const currentMonthName = lastCompletedMonth.toLocaleString("default", {
    month: "short",
  });
  const currentYearNum = lastCompletedMonth.getFullYear();
  const lastMonth = startMonth.toLocaleString("default", { month: "short" });
  const lastYear = startMonth.getFullYear();

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Consultation Performance
        </h3>
        <p className="text-sm text-muted-foreground">
          Last 12 months ({lastMonth} {lastYear} - {currentMonthName}{" "}
          {currentYearNum})
        </p>
      </div>

      <ChartContainer
        config={chartConfig}
        className={`${height} flex items-center justify-center w-full sm:w-[80%] sm:mx-auto`}
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          className="w-full -ml-3 2xl:m-0"
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
            interval={0}
            angle={isMobile ? -45 : 0}
            textAnchor={isMobile ? "end" : "middle"}
            height={isMobile ? 60 : 40}
          />
          <YAxis
            width={40}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}`}
            domain={[0, "dataMax + 10"]}
            tickCount={8}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey="unsuccessful"
            stackId="consultation"
            fill="var(--color-unsuccessful)"
            radius={[0, 0, 0, 0]}
            name="Unsuccessful Consultations"
          />
          <Bar
            dataKey="successful"
            stackId="consultation"
            fill="var(--color-successful)"
            radius={[4, 4, 0, 0]}
            name="Successful Consultations"
          />
        </BarChart>
      </ChartContainer>

      {/* Legend */}
      <div className="flex items-center justify-center mt-3 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-300 rounded"></div>
          <span className="text-xs text-muted-foreground">Unsuccessful</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-xs text-muted-foreground">Successful</span>
        </div>
      </div>

      {/* Optional: Show summary stats */}
      <div className="mt-4 text-center">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Total Consultations</span>
            <p className="font-semibold">
              {chartData.reduce((sum, item) => sum + item.total, 0)}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Average Success Rate</span>
            <p className="font-semibold text-blue-600">
              {Math.round(
                chartData.reduce((sum, item) => sum + item.successRate, 0) /
                  chartData.length
              )}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPerformanceChart;
