import { useMemo, useState } from "react";
import Card from "../Elements/Card.jsx";
import {
  CreditCardIcon,
  ShoppingBagIcon,
  TransferIcon,
  UtensilsIcon,
} from "../Icons.jsx";

const tabs = ["All", "Revenue", "Expense"];

const transactions = [
  {
    amount: "$1,200.00",
    category: "Salary",
    Icon: TransferIcon,
    name: "Bank Transfer",
    type: "Revenue",
  },
  {
    amount: "$160.00",
    category: "Gadget & Gear",
    Icon: CreditCardIcon,
    name: "GTR 5",
    type: "Expense",
  },
  {
    amount: "$20.00",
    category: "XL Fashions",
    Icon: ShoppingBagIcon,
    name: "Polo Shirt",
    type: "Expense",
  },
  {
    amount: "$10.00",
    category: "Hajir Biriyani",
    Icon: UtensilsIcon,
    name: "Biriyani",
    type: "Expense",
  },
];

function CardRecentTransaction() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredTransactions = useMemo(
    () =>
      activeTab === "All"
        ? transactions
        : transactions.filter((item) => item.type === activeTab),
    [activeTab],
  );

  return (
    <Card link="/transaction" title="Recent Transactions">
      <div className="flex gap-7 border-b border-slate-100">
        {tabs.map((tab) => (
          <button
            className={`cursor-pointer border-b-2 pb-3 text-sm font-semibold ${
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-slate-500"
            }`}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 divide-y divide-slate-100">
        {filteredTransactions.map((transaction) => {
          const TransactionIcon = transaction.Icon;
          const isRevenue = transaction.type === "Revenue";

          return (
            <div
              className="flex items-center justify-between gap-4 py-4"
              key={transaction.name}
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded bg-slate-50 text-slate-500">
                  <TransactionIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-900">
                    {transaction.name}
                  </p>
                  <p className="mt-1 truncate text-sm text-slate-500">
                    {transaction.category}
                  </p>
                </div>
              </div>
              <p
                className={`shrink-0 font-semibold ${
                  isRevenue ? "text-emerald-600" : "text-slate-900"
                }`}
              >
                {isRevenue ? "+" : "-"}
                {transaction.amount}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default CardRecentTransaction;
