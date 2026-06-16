import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "../Icons.jsx";
import Input from "../Elements/Input.jsx";
import Icon from "../Elements/Icon.jsx";
import Logo from "../Elements/Logo.jsx";

const navigationItems = [
  { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/dashboard" },
  { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
  {
    id: 3,
    name: "Transactions",
    icon: <Icon.Transaction />,
    link: "/transaction",
  },
  { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
  { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
  { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
  { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
];

function getFirstName(name) {
  return name?.split(" ")[0] || "Tanzir";
}

function getInitial(name) {
  return name?.trim().charAt(0).toUpperCase() || "T";
}

function MainLayout({ children, onLogout, user }) {
  const profileName = user?.name ?? "Tanzir Rahman";
  const profileEmail = user?.email ?? "View Profile";

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside className="flex w-28 shrink-0 flex-col justify-between bg-neutral-950 px-4 py-7 text-slate-400 sm:w-64 sm:px-5">
        <div>
          <Logo variant="secondary" className="mb-10" />

          <nav className="space-y-2" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex rounded px-4 py-3 transition hover:scale-105 hover:text-white hover:font-bold ${
                    isActive
                      ? "bg-teal-600 text-white font-bold"
                      : "hover:bg-neutral-800"
                  }`
                }
              >
                <span className="mx-auto sm:mx-0">{item.icon}</span>
                <span className="ms-3 hidden text-sm font-medium sm:block">
                  {item.name}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <button
            type="button"
            className="flex w-full rounded bg-neutral-800 px-4 py-3 text-slate-200"
            onClick={onLogout}
          >
            <span className="mx-auto sm:mx-0">
              <Icon.Logout />
            </span>
            <span className="ms-3 hidden text-sm font-medium sm:block">
              Logout
            </span>
          </button>

          <div className="my-10 border-b border-neutral-800" />

          <div className="flex items-center justify-between gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-600 text-sm font-bold text-white">
              {getInitial(profileName)}
            </div>
            <div className="hidden min-w-0 flex-1 sm:block">
              <p className="truncate text-sm font-semibold text-white">
                {profileName}
              </p>
              <p className="mt-1 truncate text-xs text-slate-500">
                {profileEmail}
              </p>
            </div>
            <Icon.Detail
              className="hidden text-slate-500 sm:block"
              size={20}
            />
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-5 sm:px-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
              Hello {getFirstName(profileName)}
            </h1>
            <span className="text-slate-300">|</span>
            <p className="text-sm text-slate-500">May 19, 2023</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Notifications"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-500 shadow-sm"
            >
              <NotificationsNoneOutlinedIcon fontSize="small" />
            </button>
            <div className="hidden w-64 sm:block">
              <Input
                id="dashboard-search"
                type="search"
                placeholder="Search here"
                border="border-white"
                backgroundColor="bg-white"
                icon={<SearchIcon className="h-4 w-4" />}
                className="shadow-sm"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto px-4 py-6 sm:px-7">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
