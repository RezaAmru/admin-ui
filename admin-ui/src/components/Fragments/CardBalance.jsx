import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Card from "../Elements/Card.jsx";
import Icon from "../Elements/Icon.jsx";
import { useTheme } from "../../context/themeContext.jsx";

const accounts = [
  {
    balance: 240399,
    cardNumber: "2598",
    type: "Credit Card",
  },
  {
    balance: 108520,
    cardNumber: "4421",
    type: "Savings",
  },
  {
    balance: 80650,
    cardNumber: "1172",
    type: "Investment",
  },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

function CardBalance() {
  const [activeStep, setActiveStep] = useState(0);
  const { theme } = useTheme();
  const account = accounts[activeStep];

  return (
    <Card link="/balance" title="Total Balance">
      <p className="text-3xl font-bold text-slate-900">
        {currencyFormatter.format(account.balance)}
      </p>

      <div className="mt-5 rounded bg-primary p-4 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/70">Account Type</p>
            <p className="mt-1 text-lg font-bold">{account.type}</p>
          </div>
          <div className="flex -space-x-2">
            <span className="h-7 w-7 rounded-full bg-red-500" />
            <span className="h-7 w-7 rounded-full bg-amber-400" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            **** **** **** {account.cardNumber}
          </p>
          <button
            aria-label="Open card detail"
            className="grid h-8 w-8 cursor-pointer place-items-center rounded-full bg-white text-primary transition hover:scale-105"
            type="button"
          >
            <Icon.ArrowUpRight className="-rotate-45" size={18} />
          </button>
        </div>
      </div>

      <MobileStepper
        activeStep={activeStep}
        backButton={
          <button
            className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((current) => current - 1)}
            type="button"
          >
            <Icon.ChevronRight className="rotate-180" size={16} />
            Previous
          </button>
        }
        nextButton={
          <button
            className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={activeStep === accounts.length - 1}
            onClick={() => setActiveStep((current) => current + 1)}
            type="button"
          >
            Next
            <Icon.ChevronRight size={16} />
          </button>
        }
        position="static"
        steps={accounts.length}
        sx={{
          backgroundColor: "transparent",
          marginTop: 2,
          padding: 0,
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: theme.color,
          },
        }}
        variant="dots"
      />
    </Card>
  );
}

export default CardBalance;
