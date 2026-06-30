import Card from "../Elements/Card.jsx";
import { CalendarIcon } from "../Icons.jsx";

const bills = [
  {
    amount: "$150",
    date: "14 May, 2023",
    name: "Figma - Monthly",
  },
  {
    amount: "$559",
    date: "17 Jun, 2023",
    name: "Adobe - Yearly",
  },
];

function CardUpcomingBill() {
  return (
    <Card link="/bill" title="Upcoming Bill">
      <div className="grid gap-4">
        {bills.map((bill) => (
          <div
            className="flex items-center justify-between gap-4 rounded border border-slate-100 bg-slate-50 p-4"
            key={bill.name}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-white text-slate-500">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900">
                  {bill.name}
                </p>
                <p className="mt-1 truncate text-sm text-slate-500">
                  Last charge - {bill.date}
                </p>
              </div>
            </div>
            <p className="shrink-0 rounded bg-white px-3 py-2 text-sm font-bold text-slate-900">
              {bill.amount}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardUpcomingBill;
