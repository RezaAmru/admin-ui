import { useState } from "react";
import {
  BellIcon,
  BillIcon,
  ChevronRightIcon,
  CloseIcon,
  ExpenseIcon,
  GoalIcon,
  LogoutIcon,
  MenuIcon,
  MoreVerticalIcon,
  OverviewIcon,
  SearchIcon,
  SettingsIcon,
  TransferIcon,
  WalletIcon,
} from "../Icons.jsx";
import Logo from "../Elements/Logo.jsx";

const menuItems = [
  { label: "Overview", Icon: OverviewIcon },
  { label: "Balances", Icon: WalletIcon },
  { label: "Transactions", Icon: TransferIcon },
  { label: "Bills", Icon: BillIcon },
  { label: "Expenses", Icon: ExpenseIcon },
  { label: "Goals", Icon: GoalIcon },
  { label: "Settings", Icon: SettingsIcon },
];

function getFirstName(name) {
  return name.split(" ")[0] || name;
}

function getInitial(name) {
  return name.trim().charAt(0).toUpperCase() || "U";
}

function SidebarContent({ onClose, onLogout, user }) {
  const profileName = user?.name ?? "Tanzir Rahman";
  const profileEmail = user?.email ?? "View profile";

  function handleLogout() {
    onClose?.();
    onLogout?.();
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <Logo className="text-left text-xl" dark />
        {onClose && (
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded bg-neutral-900 text-slate-300"
            aria-label="Close menu"
            onClick={onClose}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="mt-9 space-y-2" aria-label="Dashboard navigation">
        {menuItems.map((item, index) => {
          const Icon = item.Icon;

          return (
            <a
              key={item.label}
              href="#"
              onClick={onClose}
              className={`flex items-center gap-3 rounded px-4 py-3 text-sm font-medium ${
                index === 0
                  ? "bg-teal-600 text-white"
                  : "text-slate-400 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto space-y-5">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded bg-neutral-800 px-4 py-3 text-left text-sm font-medium text-slate-300"
          onClick={handleLogout}
        >
          <LogoutIcon className="h-5 w-5" />
          Logout
        </button>
        <div className="flex items-center gap-3 rounded bg-neutral-900 p-4">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-teal-600 text-sm font-bold text-white">
            {getInitial(profileName)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {profileName}
            </p>
            <p className="mt-1 truncate text-xs text-slate-500">
              {profileEmail}
            </p>
          </div>
          <MoreVerticalIcon className="h-5 w-5 text-slate-500" />
        </div>
      </div>
    </>
  );
}

function DashboardLayout({ children, onLogout, user }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileName = user?.name ?? "Tanzir Rahman";
  const firstName = getFirstName(profileName);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 lg:flex">
      <aside className="hidden w-64 shrink-0 flex-col bg-neutral-950 px-5 py-7 text-white lg:flex">
        <SidebarContent onLogout={onLogout} user={user} />
      </aside>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-neutral-950/60"
            aria-label="Close menu"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="relative flex h-full w-72 max-w-[85vw] flex-col bg-neutral-950 px-5 py-7 text-white shadow-2xl">
            <SidebarContent
              onClose={() => setIsSidebarOpen(false)}
              onLogout={onLogout}
              user={user}
            />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-900">
              Hello {firstName}
            </h1>
            <ChevronRightIcon className="h-4 w-4 text-slate-300" />
            <p className="text-sm text-slate-500">May 19, 2023</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-slate-500 shadow-sm"
              aria-label="Notifications"
            >
              <BellIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded border border-slate-200 bg-white text-slate-600 lg:hidden"
              aria-label="Open menu"
              onClick={() => setIsSidebarOpen(true)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <label className="relative w-full sm:w-64">
              <span className="sr-only">Search</span>
              <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search here"
                className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-2 pr-10 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </label>
          </div>
        </header>

        <main className="flex-1 p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
