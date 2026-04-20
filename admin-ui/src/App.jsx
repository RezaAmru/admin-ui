import { useState } from 'react'

const navItems = [
  { label: 'Overview', icon: 'overview', page: 'overview' },
  { label: 'Balances', icon: 'wallet', page: 'balances' },
  { label: 'Transactions', icon: 'transfer', page: 'transactions' },
  { label: 'Bills', icon: 'bill', page: 'bills' },
  { label: 'Expenses', icon: 'expense', page: 'expenses' },
  { label: 'Goals', icon: 'goal', page: 'goals' },
  { label: 'Settings', icon: 'settings', page: 'settings' },
]

const transactions = [
  { title: 'GTR 5', category: 'Gadget & Gear', amount: '$160.00', date: '17 May 2023', icon: 'game' },
  { title: 'Polo Shirt', category: 'XL fashions', amount: '$20.00', date: '17 May 2023', icon: 'bag' },
  { title: 'Biriyani', category: 'Hajir Biriyani', amount: '$10.00', date: '17 May 2023', icon: 'food' },
]

const bills = [
  {
    brand: 'Figma',
    title: 'Figma - Monthly',
    date: 'Last Charge - 14 May, 2022',
    amount: '$150',
    month: 'May',
    day: '15',
  },
  {
    brand: 'Adobe',
    title: 'Adobe - Yearly',
    date: 'Last Charge - 17 Jun, 2023',
    amount: '$559',
    month: 'Jun',
    day: '16',
    adobe: true,
  },
]

const chartData = [
  { day: '17 Sun', last: 42, current: 86 },
  { day: '18 Mon', last: 26, current: 34 },
  { day: '19 Tue', last: 42, current: 18 },
  { day: '20 Wed', last: 42, current: 46 },
  { day: '21 Thu', last: 33, current: 45 },
  { day: '22 Fri', last: 12, current: 74 },
  { day: '23 Sat', last: 30, current: 44 },
]

const transactionRows = [
  { item: 'GTR 5', shop: 'Gadget & Gear', date: '17 May, 2023', method: 'Credit Card', amount: '$160.00', icon: 'game' },
  { item: 'Polo shirt', shop: 'XL fashions', date: '17 May, 2023', method: 'Credit Card', amount: '$20.00', icon: 'bag' },
  { item: 'Biriyani', shop: 'Hajir Biriyani', date: '17 May, 2023', method: 'Credit Card', amount: '$12.00', icon: 'store' },
  { item: 'Movie ticket', shop: 'Inox', date: '17 May, 2023', method: 'Credit Card', amount: '$15.00', icon: 'movie' },
  { item: 'Taxi fare', shop: 'Uber', date: '17 May, 2023', method: 'Credit Card', amount: '$10.00', icon: 'taxi' },
  { item: 'Pizza', shop: 'Pizza Hit', date: '17 May, 2023', method: 'Credit Card', amount: '$20.00', icon: 'store' },
  { item: 'Keyboard', shop: 'Gadget & Gear', date: '17 May, 2023', method: 'Credit Card', amount: '$30.00', icon: 'bag' },
]

const accounts = [
  {
    type: 'Credit Card',
    provider: 'Master Card',
    number: '338 4556 8860 ***',
    amount: '$25000',
    network: 'mastercard',
  },
  {
    type: 'Checking',
    provider: 'AB Bank Ltd',
    number: '693 456 69 9***',
    amount: '$25000',
    network: 'VISA',
  },
  {
    type: 'Savings',
    provider: 'Brac Bank Ltd.',
    number: '133 456 886 8****',
    amount: '$25000',
  },
  {
    type: 'Investment',
    provider: 'AB Bank Ltd',
    number: '698 456 886 2****',
    amount: '$25000',
  },
  {
    type: 'Loan',
    provider: 'City Bank Ltd.',
    number: '363 456 896 6****',
    amount: '$25000',
  },
]

const historyRows = Array.from({ length: 4 }, () => ({
  date: '17 Apr, 2023',
  status: 'Complete',
  type: 'Credit',
  receipt: '8C52d5DKDJ5',
  amount: '$160.00',
}))

function Icon({ name, className = 'size-7' }) {
  const shared = {
    'aria-hidden': 'true',
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '2',
    viewBox: '0 0 24 24',
  }

  const icons = {
    overview: (
      <svg {...shared}>
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
      </svg>
    ),
    wallet: (
      <svg {...shared}>
        <path d="M4 7h14a2 2 0 0 1 2 2v9H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13" />
        <path d="M16 13h6v4h-6a2 2 0 0 1 0-4Z" />
      </svg>
    ),
    transfer: (
      <svg {...shared}>
        <path d="M7 7h13M17 4l3 3-3 3M17 17H4M7 14l-3 3 3 3" />
      </svg>
    ),
    bill: (
      <svg {...shared}>
        <path d="M6 3h9l3 3v15l-3-2-3 2-3-2-3 2V3Z" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
    expense: (
      <svg {...shared}>
        <path d="M3 6h18v12H3z" />
        <path d="M7 10h4M16 8v8M14 10h4M14 14h4" />
      </svg>
    ),
    goal: (
      <svg {...shared}>
        <path d="M12 21a9 9 0 1 0-9-9" />
        <path d="M12 7v5l4 2" />
      </svg>
    ),
    settings: (
      <svg {...shared}>
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z" />
        <path d="m19.4 15 .2 2.2-2 1.2-1.9-.9a8 8 0 0 1-1.5.9l-.3 2.1h-3.8l-.3-2.1a8 8 0 0 1-1.5-.9l-1.9.9-2-1.2.2-2.2a8 8 0 0 1-.8-1.6L2 12l1.8-1.4c.2-.6.4-1.1.8-1.6l-.2-2.2 2-1.2 1.9.9c.5-.4 1-.7 1.5-.9l.3-2.1h3.8l.3 2.1c.5.2 1 .5 1.5.9l1.9-.9 2 1.2-.2 2.2c.3.5.6 1 .8 1.6L22 12l-1.8 1.4c-.2.6-.4 1.1-.8 1.6Z" />
      </svg>
    ),
    bell: (
      <svg {...shared}>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    ),
    search: (
      <svg {...shared}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </svg>
    ),
    chevronRight: (
      <svg {...shared}>
        <path d="m9 18 6-6-6-6" />
      </svg>
    ),
    chevronsRight: (
      <svg {...shared}>
        <path d="m7 17 5-5-5-5M13 17l5-5-5-5" />
      </svg>
    ),
    chevronDown: (
      <svg {...shared}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    ),
    edit: (
      <svg {...shared}>
        <path d="m16 4 4 4L9 19l-5 1 1-5L16 4Z" />
      </svg>
    ),
    trophy: (
      <svg {...shared}>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
      </svg>
    ),
    target: (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 12 21 3" />
      </svg>
    ),
    game: (
      <svg {...shared}>
        <path d="M6 13h4M8 11v4M15 12h.01M18 15h.01" />
        <path d="M5 8h14a3 3 0 0 1 3 3v5a3 3 0 0 1-5.2 2L15 16H9l-1.8 2A3 3 0 0 1 2 16v-5a3 3 0 0 1 3-3Z" />
      </svg>
    ),
    bag: (
      <svg {...shared}>
        <path d="M6 7h12l1 14H5L6 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    ),
    food: (
      <svg {...shared}>
        <path d="M5 3v8M8 3v8M5 7h3M12 3v18M18 3c2 2 2 5 0 7v11" />
      </svg>
    ),
    store: (
      <svg {...shared}>
        <path d="M4 10 5.5 4h13L20 10" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
        <path d="M8 10v2M12 10v2M16 10v2" />
      </svg>
    ),
    movie: (
      <svg {...shared}>
        <path d="M4 6h16v12H4zM7 6l2 12M15 6l2 12" />
        <path d="M4 10h16" />
      </svg>
    ),
    taxi: (
      <svg {...shared}>
        <path d="M5 17h14M7 17v3M17 17v3M6 13l2-5h8l2 5" />
        <path d="M8 13h8M10 5h4" />
      </svg>
    ),
    logout: (
      <svg {...shared}>
        <path d="M14 8V5a2 2 0 0 0-2-2H5v18h7a2 2 0 0 0 2-2v-3" />
        <path d="M9 12h12M18 9l3 3-3 3" />
      </svg>
    ),
    moreVertical: (
      <svg {...shared}>
        <path d="M12 5h.01M12 12h.01M12 19h.01" />
      </svg>
    ),
    close: (
      <svg {...shared}>
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    ),
  }

  return icons[name] ?? null
}

function GoogleMark() {
  return (
    <span className="relative grid size-8 place-items-center rounded-full bg-white text-lg font-bold leading-none">
      <span className="absolute inset-0 rounded-full border-[6px] border-[#4285f4]" />
      <span className="absolute inset-0 rounded-full border-[6px] border-transparent border-r-[#ea4335] border-t-[#ea4335]" />
      <span className="absolute inset-0 rounded-full border-[6px] border-transparent border-b-[#34a853] border-l-[#fbbc05]" />
      <span className="absolute right-1 top-1/2 h-[6px] w-4 -translate-y-1/2 bg-[#4285f4]" />
      <span className="z-10 size-3 rounded-full bg-[#eef1f5]" />
    </span>
  )
}

function EyeIcon({ isOpen }) {
  return (
    <svg
      aria-hidden="true"
      className="size-7 text-[#8f979f]"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        d="M2.8 14s4.2-6.1 11.2-6.1S25.2 14 25.2 14 21 20.1 14 20.1 2.8 14 2.8 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      {isOpen ? (
        <circle cx="14" cy="14" r="3.1" stroke="currentColor" strokeWidth="2" />
      ) : (
        <path
          d="M9.9 18.1 18.1 9.9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      )}
    </svg>
  )
}

function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [keepSignedIn, setKeepSignedIn] = useState(true)

  function handleSubmit(event) {
    event.preventDefault()
    onLogin(keepSignedIn)
  }

  return (
    <main className="min-h-screen bg-[#f4f6f8] px-5 py-12 text-[#252933] sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[500px] flex-col items-stretch justify-center">
        <h1 className="mb-[74px] text-center text-[46px] font-bold leading-none text-[#269b91] sm:text-[50px]">
          FINEbank.IO
        </h1>

        <form className="w-full" aria-label="Finebank login" onSubmit={handleSubmit}>
          <label className="mb-3 block text-xl font-medium leading-none" htmlFor="email">
            Email Address
          </label>
          <input
            className="h-[61px] w-full rounded-lg border border-[#5f6b78] bg-transparent px-5 text-xl text-[#536171] outline-none transition focus:border-[#269b91] focus:ring-2 focus:ring-[#269b91]/20"
            id="email"
            name="email"
            placeholder="johndoe@email.com"
            type="email"
          />

          <div className="mb-3 mt-9 flex items-end justify-between gap-4">
            <label className="block text-xl font-medium leading-none" htmlFor="password">
              Password
            </label>
            <a className="text-[15px] font-medium text-[#24978e] hover:text-[#1c7770]" href="#forgot-password">
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <input
              className="h-[61px] w-full rounded-lg border border-[#d8dee6] bg-transparent px-5 pr-14 text-xl text-[#536171] outline-none transition placeholder:text-[#8d949d] focus:border-[#269b91] focus:ring-2 focus:ring-[#269b91]/20"
              id="password"
              name="password"
              placeholder="**************"
              type={showPassword ? 'text' : 'password'}
            />
            <button
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-5 top-1/2 -translate-y-1/2 rounded-lg p-1 transition hover:bg-[#e5e9ee]"
              onClick={() => setShowPassword((value) => !value)}
              type="button"
            >
              <EyeIcon isOpen={showPassword} />
            </button>
          </div>

          <label className="mt-10 flex w-fit cursor-pointer items-center gap-5 text-xl text-[#3d4249]">
            <input
              checked={keepSignedIn}
              className="peer sr-only"
              onChange={(event) => setKeepSignedIn(event.target.checked)}
              type="checkbox"
            />
            <span className="grid size-6 place-items-center rounded-sm border border-[#269b91] bg-transparent text-white transition peer-checked:bg-[#269b91] peer-focus-visible:ring-2 peer-focus-visible:ring-[#269b91]/35">
              {keepSignedIn && (
                <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
                  <path
                    d="m4 10 4 4 8-9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </span>
            keep me signed in
          </label>

          <button
            className="mt-5 h-[60px] w-full rounded bg-[#269b91] text-base font-bold text-white transition hover:bg-[#21877f] focus:outline-none focus:ring-2 focus:ring-[#269b91]/35"
            type="submit"
          >
            Login
          </button>

          <div className="my-11 flex items-center gap-6 text-lg text-[#a2a8af]">
            <span className="h-px flex-1 bg-[#d8dde3]" />
            <span>or sign in with</span>
            <span className="h-px flex-1 bg-[#d8dde3]" />
          </div>

          <button
            className="flex h-[59px] w-full items-center justify-center gap-5 rounded bg-[#e9edf2] text-xl font-medium text-[#4f5d6c] transition hover:bg-[#dfe5eb] focus:outline-none focus:ring-2 focus:ring-[#b8c1cc]"
            onClick={() => onLogin(keepSignedIn)}
            type="button"
          >
            <GoogleMark />
            continue with Google
          </button>
        </form>

        <a
          className="mt-[56px] text-center text-xl font-bold text-[#269b91] hover:text-[#1c7770]"
          href="#create-account"
        >
          Create an account
        </a>
      </section>
    </main>
  )
}

function Sidebar({ activePage, onLogout, onNavigate }) {
  return (
    <aside className="flex bg-[#151718] text-[#bfc2c5] lg:min-h-screen lg:w-[288px] lg:flex-col">
      <div className="hidden px-[72px] pb-[34px] pt-[66px] lg:block">
        <h2 className="text-[26px] font-bold leading-none text-white">FINEbank.IO</h2>
      </div>

      <nav className="flex w-full gap-2 overflow-x-auto px-4 py-4 lg:flex-1 lg:flex-col lg:gap-[18px] lg:overflow-visible lg:px-7 lg:py-0">
        {navItems.map((item) => {
          const isActive = item.page === activePage

          return (
            <button
              className={`flex h-[59px] min-w-fit items-center gap-5 rounded px-5 text-left text-base font-medium transition lg:px-6 ${
                isActive
                  ? 'bg-[#2b9d93] text-white'
                  : 'text-[#bebfc1] hover:bg-white/5 hover:text-white'
              }`}
              key={item.label}
              onClick={() => onNavigate(item.page)}
              type="button"
            >
              <Icon className="size-7 shrink-0" name={item.icon} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="hidden px-7 pb-7 lg:block">
        <button
          className="mb-10 flex h-[45px] w-full items-center gap-4 rounded bg-white/5 px-5 text-left font-bold text-[#bfc2c5] transition hover:bg-white/10"
          onClick={onLogout}
          type="button"
        >
          <Icon className="size-5" name="logout" />
          Logout
        </button>

        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center gap-4">
            <div className="size-8 rounded-full bg-[linear-gradient(135deg,#2b9d93,#1d1f20)]" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white">Tanzir Rahman</p>
              <p className="text-xs text-[#8f9397]">View profile</p>
            </div>
            <Icon className="size-6 text-white" name="moreVertical" />
          </div>
        </div>
      </div>
    </aside>
  )
}

function Header({ showGreeting = true }) {
  return (
    <header className="flex flex-col gap-5 border-b border-[#e5e8eb] px-6 py-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-8 xl:px-8">
      <div className="flex min-w-fit items-center gap-6">
        {showGreeting && (
          <h1 className="text-[30px] font-bold leading-none text-[#1f2328] md:text-[32px]">Hello Tanzir</h1>
        )}
        <div className="flex items-center gap-3 text-[#9b9fa4]">
          <Icon className="size-7" name="chevronsRight" />
          <span className="text-lg">May 19, 2023</span>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <button
          aria-label="Notifications"
          className="relative hidden rounded-lg p-2 text-[#5b6168] transition hover:bg-[#e9ecef] md:block"
          type="button"
        >
          <Icon className="size-7" name="bell" />
          <span className="absolute right-2 top-1 size-2.5 rounded-full bg-[#2b9d93]" />
        </button>

        <label className="relative w-full md:w-[440px]">
          <span className="sr-only">Search</span>
          <input
            className="h-[60px] w-full rounded-lg border-0 bg-white px-10 pr-16 text-xl text-[#5f666d] outline-none shadow-sm placeholder:text-[#9a9fa5] focus:ring-2 focus:ring-[#2b9d93]/25"
            placeholder="Search here"
            type="search"
          />
          <Icon className="absolute right-8 top-1/2 size-7 -translate-y-1/2 text-[#4f565d]" name="search" />
        </label>
      </div>
    </header>
  )
}

function AppLayout({ activePage, children, onLogout, onNavigate, showGreeting = false }) {
  return (
    <main className="min-h-screen bg-[#f5f6f7] text-[#202327] lg:flex">
      <Sidebar activePage={activePage} onLogout={onLogout} onNavigate={onNavigate} />

      <div className="min-w-0 flex-1">
        <Header showGreeting={showGreeting} />
        {children}
      </div>
    </main>
  )
}

function SectionTitle({ title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[28px] font-medium leading-none text-[#81858a]">{title}</h2>
      {action && action.onClick && (
        <button
          className="flex items-center gap-3 text-sm font-medium text-[#777b80]"
          onClick={action.onClick}
          type="button"
        >
          {action.label}
          <Icon className="size-5" name="chevronRight" />
        </button>
      )}
      {action && !action.onClick && (
        <a className="flex items-center gap-3 text-sm font-medium text-[#777b80]" href={action.href}>
          {action.label}
          <Icon className="size-5" name="chevronRight" />
        </a>
      )}
    </div>
  )
}

function TotalBalanceCard() {
  return (
    <section>
      <SectionTitle title="Total Balance" />
      <article className="rounded-lg bg-white p-[30px] shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="flex items-center justify-between">
          <strong className="text-[30px] leading-none text-[#222428]">$240,399</strong>
          <span className="text-lg text-[#555b62]">All Accounts</span>
        </div>

        <div className="my-5 h-px bg-[#edf0f2]" />

        <div className="rounded bg-[#2b9d93] px-5 py-[18px] text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-white/75">Account Type</p>
              <p className="text-xl font-bold">Credit Card</p>
            </div>
            <div className="relative h-8 w-[58px]">
              <span className="absolute left-0 top-0 size-8 rounded-full bg-[#ff1212]" />
              <span className="absolute left-5 top-0 size-8 rounded-full bg-[#ff9f0b]/95" />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between gap-4">
            <p className="text-lg text-white/80">**** **** **** 2598</p>
            <strong className="text-[22px] leading-none">$25000</strong>
            <button
              aria-label="Open credit card account"
              className="grid size-8 place-items-center rounded-full bg-white text-[#2b9d93]"
              type="button"
            >
              <Icon className="size-5" name="chevronRight" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button className="text-lg text-[#c5c8cc]" type="button">
            Previous
          </button>
          <div className="flex items-center gap-4">
            <span className="size-2.5 rounded-full bg-[#2b9d93]" />
            <span className="size-2.5 rounded-full bg-[#cfd3d6]" />
            <span className="size-2.5 rounded-full bg-[#cfd3d6]" />
          </div>
          <button className="flex items-center gap-3 text-lg text-[#202327]" type="button">
            Next
            <Icon className="size-5" name="chevronRight" />
          </button>
        </div>
      </article>
    </section>
  )
}

function Gauge() {
  return (
    <div className="relative h-[150px] w-[190px]">
      <svg className="h-full w-full" viewBox="0 0 190 150">
        <path
          d="M25 110a70 70 0 0 1 140 0"
          fill="none"
          stroke="#e9eaec"
          strokeLinecap="round"
          strokeWidth="16"
        />
        <path
          d="M25 110a70 70 0 0 1 116-52"
          fill="none"
          stroke="#2b9d93"
          strokeLinecap="round"
          strokeWidth="16"
        />
        <path d="M95 110 137 72" stroke="#2b9d93" strokeLinecap="round" strokeWidth="2" />
        <circle cx="95" cy="110" fill="#2b9d93" r="8" />
      </svg>
      <div className="absolute bottom-0 left-1/2 flex w-[180px] -translate-x-1/2 items-end justify-between text-base">
        <span className="text-[#c8cbcf]">$0</span>
        <strong className="text-xl text-[#202327]">12K</strong>
        <span className="text-[#c8cbcf]">$20k</span>
      </div>
    </div>
  )
}

function GoalsCard({ onEdit }) {
  return (
    <section>
      <SectionTitle title="Goals" />
      <article className="rounded-lg bg-white p-[30px] shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <strong className="text-[30px] leading-none text-[#222428]">$20,000</strong>
            <button
              aria-label="Edit goal"
              className="grid size-10 place-items-center rounded bg-[#f0f1f2] text-[#555b62]"
              onClick={onEdit}
              type="button"
            >
              <Icon className="size-5" name="edit" />
            </button>
          </div>
          <span className="text-lg text-[#555b62]">May, 2023</span>
        </div>

        <div className="my-5 h-px bg-[#edf0f2]" />

        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-7">
            <div className="flex gap-4">
              <Icon className="mt-1 size-7 text-[#686d72]" name="trophy" />
              <div>
                <p className="text-base text-[#8b8f94]">Target Achieved</p>
                <strong className="text-[22px] text-[#202327]">$12,500</strong>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon className="mt-1 size-7 text-[#686d72]" name="target" />
              <div>
                <p className="text-base text-[#8b8f94]">This month Target</p>
                <strong className="text-[22px] text-[#202327]">$20,000</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Gauge />
            <p className="mt-2 text-base font-medium text-[#202327]">Target vs Achievement</p>
          </div>
        </div>
      </article>
    </section>
  )
}

function GoalEditModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/25 px-5 backdrop-blur-[1px]">
      <form
        aria-label="Edit goal amounts"
        className="relative w-full max-w-[610px] rounded-lg bg-white px-10 py-20 shadow-[0_24px_60px_rgba(31,37,43,0.18)] md:px-20"
        onSubmit={(event) => {
          event.preventDefault()
          onClose()
        }}
      >
        <button
          aria-label="Close goal edit modal"
          className="absolute right-8 top-8 rounded-lg p-1 text-[#555b62] transition hover:bg-[#f0f1f2]"
          onClick={onClose}
          type="button"
        >
          <Icon className="size-8" name="close" />
        </button>

        <label className="mb-4 block text-xl font-bold text-[#555b62]" htmlFor="target-amount">
          Target Amounts
        </label>
        <input
          className="h-[70px] w-full rounded-lg border border-[#cfd4d9] px-7 text-[22px] text-[#777d84] outline-none focus:border-[#2b9d93] focus:ring-2 focus:ring-[#2b9d93]/20"
          defaultValue="$500000"
          id="target-amount"
          name="targetAmount"
        />

        <label className="mb-4 mt-9 block text-xl font-bold text-[#555b62]" htmlFor="present-amount">
          Present Amounts
        </label>
        <input
          className="h-[70px] w-full rounded-lg border border-[#cfd4d9] px-7 text-[22px] text-[#777d84] outline-none placeholder:text-[#80858b] focus:border-[#2b9d93] focus:ring-2 focus:ring-[#2b9d93]/20"
          id="present-amount"
          name="presentAmount"
          placeholder="Write presents amounts here"
        />

        <button
          className="mx-auto mt-10 block h-[60px] w-[240px] rounded bg-[#2b9d93] text-xl font-bold text-white transition hover:bg-[#21877f]"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  )
}

function UpcomingBills() {
  return (
    <section>
      <SectionTitle action={{ label: 'View All', href: '#bills' }} title="Upcoming Bill" />
      <article className="rounded-lg bg-white px-[30px] py-8 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="space-y-6">
          {bills.map((bill, index) => (
            <div key={bill.title}>
              <div className="flex items-center gap-4">
                <div className="grid h-[84px] w-[56px] shrink-0 place-items-center rounded bg-[#f0f1f2] text-center">
                  <div>
                    <p className="text-base text-[#72777d]">{bill.month}</p>
                    <strong className="text-[28px] leading-none text-[#24272b]">{bill.day}</strong>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className={`text-xl font-medium ${bill.adobe ? 'text-[#ec321f]' : 'text-[#787c82]'}`}>
                    {bill.adobe ? (
                      <span className="mr-2 inline-block text-2xl font-bold leading-none">A</span>
                    ) : null}
                    {bill.brand}
                  </p>
                  <h3 className="truncate text-xl font-bold text-[#555b62]">{bill.title}</h3>
                  <p className="truncate text-base text-[#9a9fa5]">{bill.date}</p>
                </div>

                <span className="rounded-lg border border-[#e3e6e9] px-4 py-3 text-xl font-bold text-[#555b62]">
                  {bill.amount}
                </span>
              </div>
              {index === 0 && <div className="mt-6 h-px bg-[#edf0f2]" />}
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

function RecentTransactions({ onViewAll }) {
  return (
    <section>
      <SectionTitle action={{ label: 'View All', onClick: onViewAll }} title="Recent Transaction" />
      <article className="rounded-lg bg-white px-[30px] py-7 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="mb-7 flex gap-9 border-b border-[#edf0f2] text-xl font-bold">
          {['All', 'Revenue', 'Expenses'].map((tab) => (
            <button
              className={`pb-3 ${tab === 'All' ? 'border-b-2 border-[#2b9d93] text-[#2b9d93]' : 'text-[#555b62]'}`}
              key={tab}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="divide-y divide-[#edf0f2]">
          {transactions.map((transaction) => (
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 py-4" key={transaction.title}>
              <div className="grid size-[50px] place-items-center rounded-lg bg-[#f2f3f4] text-[#70757a]">
                <Icon className="size-7" name={transaction.icon} />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-xl font-bold text-[#22262b]">{transaction.title}</h3>
                <p className="truncate text-base text-[#9a9fa5]">{transaction.category}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-medium text-[#555b62]">{transaction.amount}</p>
                <p className="text-base text-[#9a9fa5]">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

function StatisticsCard() {
  return (
    <section>
      <SectionTitle title="Statistics" />
      <article className="rounded-lg bg-white px-[30px] py-6 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button className="flex items-center gap-4 text-[22px] font-bold text-[#202327]" type="button">
            Weekly Comparision
            <Icon className="size-6" name="chevronDown" />
          </button>
          <div className="flex gap-9 text-base text-[#4e555c]">
            <span className="flex items-center gap-3">
              <span className="h-2 w-5 rounded bg-[#2b9d93]" />
              This week
            </span>
            <span className="flex items-center gap-3">
              <span className="h-2 w-5 rounded bg-[#e5e6e8]" />
              Last week
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[70px_1fr] gap-2">
          <div className="grid h-[190px] grid-rows-5 text-right text-base text-[#8d9297]">
            <span>$250k</span>
            <span>$50k</span>
            <span>$10k</span>
            <span>$2k</span>
            <span>$0</span>
          </div>

          <div>
            <div className="relative grid h-[190px] grid-cols-7 items-end gap-6 border-b border-[#edf0f2]">
              <div className="absolute inset-0 grid grid-rows-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span className="border-t border-[#f0f2f4]" key={index} />
                ))}
              </div>

              {chartData.map((item) => (
                <div className="relative z-10 flex h-full items-end justify-center gap-3" key={item.day}>
                  <span
                    className="w-5 rounded-t bg-[#e5e6e8]"
                    style={{ height: `${item.last}%` }}
                    title={`${item.day} last week`}
                  />
                  <span
                    className="w-5 rounded-t bg-[#2b9d93]"
                    style={{ height: `${item.current}%` }}
                    title={`${item.day} this week`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-7 gap-6 text-center text-base text-[#8d9297]">
              {chartData.map((item) => (
                <span key={item.day}>{item.day}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

function TransactionTabs() {
  return (
    <div className="mb-4 flex gap-9 text-base font-bold">
      {['All', 'Revenue', 'Expenses'].map((tab) => (
        <button
          className={`pb-3 ${tab === 'All' ? 'border-b-2 border-[#2b9d93] text-[#2b9d93]' : 'text-[#555b62]'}`}
          key={tab}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

function TransactionsPage() {
  return (
    <section className="px-6 py-7 md:px-8">
      <h2 className="mb-6 text-[24px] font-medium leading-none text-[#81858a]">Recent Transaction</h2>
      <TransactionTabs />

      <article className="overflow-hidden rounded-lg bg-white px-7 py-6 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#eef0f2] text-base font-bold text-[#202327]">
                <th className="w-[24%] px-2 py-4">Items</th>
                <th className="w-[20%] px-2 py-4">Shop Name</th>
                <th className="w-[18%] px-2 py-4">Date</th>
                <th className="w-[22%] px-2 py-4">Payment Method</th>
                <th className="px-2 py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#5e646b]">
              {transactionRows.map((row) => (
                <tr className="border-b border-[#f1f2f4] last:border-b-0" key={row.item}>
                  <td className="px-2 py-5">
                    <div className="flex items-center gap-4">
                      <Icon className="size-6 text-[#656b72]" name={row.icon} />
                      <span className="font-bold text-[#202327]">{row.item}</span>
                    </div>
                  </td>
                  <td className="px-2 py-5">{row.shop}</td>
                  <td className="px-2 py-5">{row.date}</td>
                  <td className="px-2 py-5">{row.method}</td>
                  <td className="px-2 py-5 text-right font-bold text-[#202327]">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="mx-auto mt-9 block h-[48px] w-[150px] rounded bg-[#2b9d93] font-bold text-white transition hover:bg-[#21877f]"
          type="button"
        >
          Load More
        </button>
      </article>
    </section>
  )
}

function AccountNetwork({ network }) {
  if (network === 'mastercard') {
    return (
      <span className="relative h-6 w-11">
        <span className="absolute left-0 top-0 size-6 rounded-full bg-[#ff1212]" />
        <span className="absolute left-4 top-0 size-6 rounded-full bg-[#ff9f0b]/95" />
      </span>
    )
  }

  if (network) {
    return <span className="text-xl font-bold italic text-[#0b5ea8]">{network}</span>
  }

  return null
}

function AccountCard({ account, onDetails }) {
  return (
    <article className="rounded-lg bg-white px-6 py-7 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
      <div className="flex items-center justify-between gap-5">
        <h3 className="text-base font-bold text-[#787d83]">{account.type}</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#555b62]">{account.provider}</span>
          <AccountNetwork network={account.network} />
        </div>
      </div>

      <div className="my-5 h-px bg-[#edf0f2]" />

      <p className="text-[22px] font-bold tracking-[0.04em] text-[#202327]">{account.number}</p>
      <p className="mt-2 text-sm text-[#9a9fa5]">Account Number</p>

      <p className="mt-5 text-[22px] font-bold text-[#202327]">{account.amount}</p>
      <p className="mt-2 text-sm text-[#9a9fa5]">Total amount</p>

      <div className="mt-7 flex items-center justify-between">
        <button className="font-medium text-[#2b9d93]" type="button">
          Remove
        </button>
        <button
          className="flex h-[34px] min-w-[104px] items-center justify-center gap-2 rounded bg-[#2b9d93] px-4 text-sm font-bold text-white transition hover:bg-[#21877f]"
          onClick={onDetails}
          type="button"
        >
          Details
          <Icon className="size-4" name="chevronRight" />
        </button>
      </div>
    </article>
  )
}

function BalancesPage({ onDetails }) {
  return (
    <section className="px-6 py-7 md:px-8">
      <h2 className="mb-5 text-[24px] font-medium leading-none text-[#81858a]">Balances</h2>

      <div className="grid gap-8 xl:grid-cols-3">
        {accounts.map((account) => (
          <AccountCard account={account} key={account.type} onDetails={onDetails} />
        ))}

        <article className="grid min-h-[270px] place-items-center rounded-lg bg-white px-6 py-7 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
          <div className="text-center">
            <button
              className="h-[45px] w-[196px] rounded bg-[#2b9d93] font-bold text-white transition hover:bg-[#21877f]"
              type="button"
            >
              Add Accounts
            </button>
            <button className="mt-5 block w-full text-base font-medium text-[#9a9fa5]" type="button">
              Edit Accounts
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

function AccountDetailsPage() {
  return (
    <section className="px-6 py-7 md:px-8">
      <h2 className="mb-5 text-[24px] font-medium leading-none text-[#81858a]">Account Details</h2>

      <article className="rounded-lg bg-white px-7 py-8 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-base text-[#a0a4a9]">Bank Name</p>
            <p className="text-lg font-bold text-[#555b62]">AB Bank Ltd.</p>
          </div>
          <div>
            <p className="text-base text-[#a0a4a9]">Account Type</p>
            <p className="text-lg font-bold text-[#555b62]">Checking</p>
          </div>
          <div>
            <p className="text-base text-[#a0a4a9]">Balance</p>
            <p className="text-lg font-bold text-[#555b62]">$25,056.00</p>
          </div>
          <div>
            <p className="text-base text-[#a0a4a9]">Branch Name</p>
            <p className="text-lg font-bold text-[#555b62]">Park Street Branch</p>
          </div>
          <div>
            <p className="text-base text-[#a0a4a9]">Account Number</p>
            <p className="text-lg font-bold text-[#555b62]">133 456 886 ****</p>
          </div>
        </div>

        <div className="mt-9 flex items-center gap-10">
          <button
            className="h-[45px] w-[150px] rounded bg-[#2b9d93] font-bold text-white transition hover:bg-[#21877f]"
            type="button"
          >
            Edit Details
          </button>
          <button className="font-bold text-[#777d84]" type="button">
            Remove
          </button>
        </div>
      </article>

      <h2 className="mb-5 mt-9 text-[24px] font-medium leading-none text-[#81858a]">Transactions History</h2>
      <article className="overflow-hidden rounded-lg bg-white px-7 py-6 shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#eef0f2] text-base font-bold text-[#202327]">
                <th className="px-2 py-4">Date</th>
                <th className="px-2 py-4">Status</th>
                <th className="px-2 py-4">Transaction Type</th>
                <th className="px-2 py-4">Receipt</th>
                <th className="px-2 py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#5e646b]">
              {historyRows.map((row, index) => (
                <tr className="border-b border-[#f1f2f4] last:border-b-0" key={`${row.receipt}-${index}`}>
                  <td className="px-2 py-5">{row.date}</td>
                  <td className="px-2 py-5">{row.status}</td>
                  <td className="px-2 py-5">{row.type}</td>
                  <td className="px-2 py-5">{row.receipt}</td>
                  <td className="px-2 py-5 text-right font-bold text-[#202327]">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="mx-auto mt-9 block h-[48px] w-[180px] rounded bg-[#2b9d93] font-bold text-white transition hover:bg-[#21877f]"
          type="button"
        >
          Load More
        </button>
      </article>
    </section>
  )
}

function ComingSoonPage({ title }) {
  return (
    <section className="px-6 py-7 md:px-8">
      <h2 className="mb-5 text-[24px] font-medium leading-none text-[#81858a]">{title}</h2>
      <article className="rounded-lg bg-white px-7 py-10 text-[#777d84] shadow-[0_18px_35px_rgba(32,40,46,0.06)]">
        This page is ready for the next screen.
      </article>
    </section>
  )
}

function DashboardPage({ onLogout, onNavigate, onOpenGoalModal }) {
  return (
    <AppLayout activePage="overview" onLogout={onLogout} onNavigate={onNavigate} showGreeting>
      <div className="grid gap-8 px-6 py-7 md:px-8 xl:grid-cols-[minmax(300px,440px)_minmax(420px,440px)_minmax(360px,440px)]">
        <TotalBalanceCard />
        <GoalsCard onEdit={onOpenGoalModal} />
        <UpcomingBills />
      </div>

      <div className="grid gap-8 px-6 pb-8 md:px-8 xl:grid-cols-[minmax(360px,440px)_1fr]">
        <RecentTransactions onViewAll={() => onNavigate('transactions')} />
        <StatisticsCard />
      </div>
    </AppLayout>
  )
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('finebank-authenticated') === 'true',
  )
  const [activePage, setActivePage] = useState('overview')
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false)

  function handleLogin(keepSignedIn) {
    if (keepSignedIn) {
      localStorage.setItem('finebank-authenticated', 'true')
    } else {
      localStorage.removeItem('finebank-authenticated')
    }

    setIsAuthenticated(true)
  }

  function handleLogout() {
    localStorage.removeItem('finebank-authenticated')
    setActivePage('overview')
    setIsGoalModalOpen(false)
    setIsAuthenticated(false)
  }

  function renderActivePage() {
    if (activePage === 'overview') {
      return (
        <DashboardPage
          onLogout={handleLogout}
          onNavigate={setActivePage}
          onOpenGoalModal={() => setIsGoalModalOpen(true)}
        />
      )
    }

    if (activePage === 'transactions') {
      return (
        <AppLayout activePage="transactions" onLogout={handleLogout} onNavigate={setActivePage}>
          <TransactionsPage />
        </AppLayout>
      )
    }

    if (activePage === 'balances') {
      return (
        <AppLayout activePage="balances" onLogout={handleLogout} onNavigate={setActivePage}>
          <BalancesPage onDetails={() => setActivePage('account-details')} />
        </AppLayout>
      )
    }

    if (activePage === 'account-details') {
      return (
        <AppLayout activePage="balances" onLogout={handleLogout} onNavigate={setActivePage}>
          <AccountDetailsPage />
        </AppLayout>
      )
    }

    const pageTitle = navItems.find((item) => item.page === activePage)?.label ?? 'Finebank'

    return (
      <AppLayout activePage={activePage} onLogout={handleLogout} onNavigate={setActivePage}>
        <ComingSoonPage title={pageTitle} />
      </AppLayout>
    )
  }

  if (isAuthenticated) {
    return (
      <>
        {renderActivePage()}
        {isGoalModalOpen && <GoalEditModal onClose={() => setIsGoalModalOpen(false)} />}
      </>
    )
  }

  return <LoginPage onLogin={handleLogin} />
}

export default App
