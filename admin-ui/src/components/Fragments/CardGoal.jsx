import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Elements/Card.jsx";
import Icon from "../Elements/Icon.jsx";
import { useTheme } from "../../context/themeContext.jsx";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

function CardGoal({ data = {}, isLoading = false }) {
  const { theme } = useTheme();
  const hasGoalData = Object.keys(data).length > 0;

  if (isLoading || !hasGoalData) {
    return (
      <Card title="Goals">
        <div className="flex h-full min-h-64 flex-col items-center justify-center text-primary">
          <CircularProgress color="inherit" size={50} />
          <p className="mt-4 text-sm font-semibold">Loading Data</p>
        </div>
      </Card>
    );
  }

  const targetAmount = Number(data?.target_amount) || 0;
  const presentAmount = Number(data?.present_amount) || 0;
  const chartValue = targetAmount
    ? Math.min((presentAmount / targetAmount) * 100, 100)
    : 0;

  return (
    <Card title="Goals">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-500">May, 2023</p>
        <button
          aria-label="Edit goals"
          className="grid h-8 w-8 cursor-pointer place-items-center rounded bg-slate-100 text-slate-500 transition hover:scale-105"
          type="button"
        >
          <Icon.Edit size={18} />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-5">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <Icon.Award className="mt-0.5 text-slate-400" size={22} />
            <div>
              <p className="text-sm text-slate-500">Target Achieved</p>
              <p className="mt-1 font-bold text-slate-900">
                {currencyFormatter.format(presentAmount)}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon.Target className="mt-0.5 text-slate-400" size={22} />
            <div>
              <p className="text-sm text-slate-500">This month Target</p>
              <p className="mt-1 font-bold text-slate-900">
                {currencyFormatter.format(targetAmount)}
              </p>
            </div>
          </div>
        </div>

        <div className="relative grid h-28 w-28 place-items-center">
          <CircularProgress
            size={112}
            sx={{ color: theme.color, position: "absolute" }}
            thickness={5}
            value={chartValue}
            variant="determinate"
          />
          <div className="text-center">
            <p className="text-lg font-bold text-slate-900">
              {Math.round(chartValue)}%
            </p>
            <p className="text-[10px] text-slate-500">Target</p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        Target vs Achievement
      </p>
    </Card>
  );
}

export default CardGoal;
