import DashboardLayout from "../components/Layouts/DashboardLayout.jsx";
import {
  ArrowUpRightIcon,
  CalendarIcon,
  CarIcon,
  ChevronRightIcon,
  CreditCardIcon,
  EditIcon,
  ExpenseIcon,
  HouseIcon,
  ShoppingBagIcon,
  TrophyIcon,
  UtensilsIcon,
  WalletIcon,
} from "../components/Icons.jsx";

const transactions = [
  {
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: "$160.00",
    Icon: CreditCardIcon,
  },
  {
    name: "Polo Shirt",
    category: "XL Fashions",
    amount: "$20.00",
    Icon: ShoppingBagIcon,
  },
  {
    name: "Biriyani",
    category: "Hajir Biriyani",
    amount: "$10.00",
    Icon: UtensilsIcon,
  },
  {
    name: "Taxi Fare",
    category: "Uber",
    amount: "$12.00",
    Icon: CarIcon,
  },
];

const expenses = [
  { name: "Housing", amount: "$250.00", Icon: HouseIcon },
  { name: "Food", amount: "$350.00", Icon: UtensilsIcon },
  { name: "Transportation", amount: "$50.00", Icon: CarIcon },
  { name: "Entertainment", amount: "$80.00", Icon: ExpenseIcon },
  { name: "Shopping", amount: "$420.00", Icon: ShoppingBagIcon },
  { name: "Others", amount: "$650.00", Icon: WalletIcon },
];

function OverviewPage({ onLogout, user }) {
  return (
    <DashboardLayout onLogout={onLogout} user={user}>
      <div className="grid gap-5 xl:grid-cols-[1fr_1.2fr]">
        <section className="grid gap-5 sm:grid-cols-2">
          <article className="rounded bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-500">
                Total Balance
              </p>
              <a
                href="#"
                className="flex items-center gap-1 text-xs font-semibold text-slate-500"
              >
                All Accounts
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">$240,399</p>
            <div className="mt-5 rounded bg-teal-600 p-4 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-teal-100">Account Type</p>
                  <p className="mt-1 text-lg font-bold">Credit Card</p>
                </div>
                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full bg-red-500" />
                  <span className="h-7 w-7 rounded-full bg-amber-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-sm text-teal-100">**** **** **** 2598</p>
                <button
                  type="button"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white text-teal-600"
                  aria-label="Open card"
                >
                  <ArrowUpRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
              <button type="button" className="flex items-center gap-1">
                <ChevronRightIcon className="h-4 w-4 rotate-180" />
                Previous
              </button>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-600" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
              </div>
              <button
                type="button"
                className="flex items-center gap-1 text-slate-700"
              >
                Next
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </article>

          <article className="rounded bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-500">Goals</p>
              <p className="text-sm font-medium text-slate-500">May, 2023</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <p className="text-2xl font-bold text-slate-900">$20,000</p>
              <button
                type="button"
                className="grid h-8 w-8 place-items-center rounded bg-slate-100 text-slate-500"
                aria-label="Edit goals"
              >
                <EditIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-5">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrophyIcon className="mt-0.5 h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Target Achieved</p>
                    <p className="mt-1 font-bold text-slate-900">$12,500</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <WalletIcon className="mt-0.5 h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">This month Target</p>
                    <p className="mt-1 font-bold text-slate-900">$20,000</p>
                  </div>
                </div>
              </div>
              <div className="relative h-28 w-28">
                <div className="absolute inset-0 rounded-full border-[12px] border-slate-100" />
                <div className="absolute inset-0 rotate-45 rounded-full border-[12px] border-transparent border-r-teal-600 border-t-teal-600" />
                <div className="absolute inset-5 grid place-items-center rounded-full bg-white text-center">
                  <p className="text-lg font-bold text-slate-900">12K</p>
                  <p className="text-[10px] text-slate-500">Target</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              Target vs Achievement
            </p>
          </article>

          <article className="rounded bg-white p-5 shadow-sm sm:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">
                Recent Transaction
              </h2>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-semibold text-teal-600"
              >
                View all
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-5 flex gap-7 border-b border-slate-100">
              {["All", "Revenue", "Expenses"].map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`border-b-2 pb-3 text-sm font-semibold ${
                    index === 0
                      ? "border-teal-600 text-teal-600"
                      : "border-transparent text-slate-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-5 divide-y divide-slate-100">
              {transactions.map((transaction) => {
                const Icon = transaction.Icon;

                return (
                  <div
                    key={transaction.name}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-10 w-10 place-items-center rounded bg-slate-50 text-slate-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {transaction.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {transaction.category}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-slate-900">
                      {transaction.amount}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <section className="grid gap-5">
          <article className="rounded bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">
                Upcoming Bill
              </h2>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-semibold text-slate-500"
              >
                View all
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {["Figma - Monthly", "Adobe - Yearly"].map((bill, index) => (
                <div
                  key={bill}
                  className="flex items-center justify-between gap-4 rounded border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded bg-white text-slate-500">
                      <CalendarIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{bill}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Last charge - {index === 0 ? "14 May" : "17 Jun"}, 2023
                      </p>
                    </div>
                  </div>
                  <p className="rounded bg-white px-3 py-2 text-sm font-bold text-slate-900">
                    {index === 0 ? "$150" : "$559"}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">Statistics</h2>
            <div className="mt-6 flex h-48 items-end gap-3">
              {[75, 50, 82, 45, 70, 58, 80].map((height, index) => (
                <div key={index} className="flex flex-1 items-end gap-1">
                  <span
                    className="w-full rounded-t bg-teal-600"
                    style={{ height: `${height}%` }}
                  />
                  <span
                    className="w-full rounded-t bg-slate-200"
                    style={{ height: `${Math.max(height - 18, 24)}%` }}
                  />
                </div>
              ))}
            </div>
          </article>

          <article className="rounded bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              Expenses Breakdown
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {expenses.map((expense) => {
                const Icon = expense.Icon;

                return (
                  <div
                    key={expense.name}
                    className="flex items-start gap-3 rounded border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded bg-white text-slate-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-slate-500">{expense.name}</p>
                      <p className="mt-2 font-bold text-slate-900">
                        {expense.amount}
                      </p>
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-slate-300" />
                  </div>
                );
              })}
            </div>
          </article>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default OverviewPage;
