import { BarChart } from "@mui/x-charts/BarChart";
import Card from "../Elements/Card.jsx";
import { useTheme } from "../../context/themeContext.jsx";

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const revenueData = [75, 50, 82, 45, 70, 58, 80];
const expenseData = [58, 42, 62, 36, 48, 44, 57];

function CardStatistic() {
  const { theme } = useTheme();

  return (
    <Card title="Statistics">
      <div className="h-64">
        <BarChart
          borderRadius={6}
          height={245}
          margin={{ bottom: 28, left: 35, right: 10, top: 20 }}
          series={[
            {
              color: theme.color,
              data: revenueData,
              label: "Revenue",
            },
            {
              color: "#e2e8f0",
              data: expenseData,
              label: "Expense",
            },
          ]}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
          xAxis={[
            {
              data: labels,
              scaleType: "band",
            },
          ]}
          yAxis={[
            {
              width: 35,
            },
          ]}
        />
      </div>
    </Card>
  );
}

export default CardStatistic;
