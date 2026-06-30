import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "../Elements/Card.jsx";
import {
  CarIcon,
  ExpenseIcon,
  HouseIcon,
  ShoppingBagIcon,
  UtensilsIcon,
  WalletIcon,
} from "../Icons.jsx";

const expenses = [
  {
    amount: "$250.00",
    Icon: HouseIcon,
    name: "Housing",
    percentage: "15%",
    trend: "up",
  },
  {
    amount: "$350.00",
    Icon: UtensilsIcon,
    name: "Food",
    percentage: "8%",
    trend: "down",
  },
  {
    amount: "$50.00",
    Icon: CarIcon,
    name: "Transportation",
    percentage: "12%",
    trend: "down",
  },
  {
    amount: "$80.00",
    Icon: ExpenseIcon,
    name: "Entertainment",
    percentage: "5%",
    trend: "up",
  },
  {
    amount: "$420.00",
    Icon: ShoppingBagIcon,
    name: "Shopping",
    percentage: "18%",
    trend: "up",
  },
  {
    amount: "$650.00",
    Icon: WalletIcon,
    name: "Others",
    percentage: "10%",
    trend: "down",
  },
];

function CardExpenseBreakdown() {
  return (
    <Card title="Expenses Breakdown">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {expenses.map((expense) => {
          const ExpenseIcon = expense.Icon;
          const isUp = expense.trend === "up";

          return (
            <div
              className="flex items-start gap-3 rounded border border-slate-100 bg-slate-50 p-4"
              key={expense.name}
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded bg-white text-slate-500">
                <ExpenseIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-500">{expense.name}</p>
                <p className="mt-2 font-bold text-slate-900">
                  {expense.amount}
                </p>
              </div>
              <div
                className={`flex items-center gap-0.5 text-sm font-semibold ${
                  isUp ? "text-red-500" : "text-emerald-600"
                }`}
              >
                {isUp ? (
                  <KeyboardArrowUpIcon fontSize="small" />
                ) : (
                  <KeyboardArrowDownIcon fontSize="small" />
                )}
                {expense.percentage}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default CardExpenseBreakdown;
