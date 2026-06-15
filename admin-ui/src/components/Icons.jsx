function IconBase({ children, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

export function OverviewIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </IconBase>
  );
}

export function WalletIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M4 7.5h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h13" />
      <path d="M16 12h5" />
      <circle cx="17" cy="12" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function TransferIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 7h12l-3-3" />
      <path d="M19 7l-3 3" />
      <path d="M17 17H5l3 3" />
      <path d="M5 17l3-3" />
    </IconBase>
  );
}

export function BillIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M6 3h10l3 3v15l-3-2-3 2-3-2-3 2-3-2V5a2 2 0 0 1 2-2z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h3" />
    </IconBase>
  );
}

export function ExpenseIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h4" />
      <path d="M16 13h.01" />
    </IconBase>
  );
}

export function GoalIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function SettingsIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
      <path d="M19.4 15a1.8 1.8 0 0 0 .36 2l.05.05a2 2 0 1 1-2.83 2.83l-.05-.05a1.8 1.8 0 0 0-2-.36 1.8 1.8 0 0 0-1.08 1.65V21a2 2 0 1 1-4 0v-.08a1.8 1.8 0 0 0-1.08-1.65 1.8 1.8 0 0 0-2 .36l-.05.05a2 2 0 1 1-2.83-2.83l.05-.05a1.8 1.8 0 0 0 .36-2A1.8 1.8 0 0 0 2.65 13H2.5a2 2 0 1 1 0-4h.15A1.8 1.8 0 0 0 4.3 7.92a1.8 1.8 0 0 0-.36-2l-.05-.05A2 2 0 1 1 6.72 3.04l.05.05a1.8 1.8 0 0 0 2 .36A1.8 1.8 0 0 0 9.85 1.8V1.7a2 2 0 1 1 4 0v.1a1.8 1.8 0 0 0 1.08 1.65 1.8 1.8 0 0 0 2-.36l.05-.05a2 2 0 1 1 2.83 2.83l-.05.05a1.8 1.8 0 0 0-.36 2A1.8 1.8 0 0 0 21.05 9H21.2a2 2 0 1 1 0 4h-.15A1.8 1.8 0 0 0 19.4 15z" />
    </IconBase>
  );
}

export function LogoutIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-4" />
    </IconBase>
  );
}

export function SearchIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </IconBase>
  );
}

export function BellIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
      <circle cx="17.5" cy="5.5" r="2" fill="#14b8a6" stroke="white" />
    </IconBase>
  );
}

export function ChevronRightIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 18l6-6-6-6" />
    </IconBase>
  );
}

export function CreditCardIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </IconBase>
  );
}

export function ArrowUpRightIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </IconBase>
  );
}

export function TrophyIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4a3 3 0 0 0 3 3" />
      <path d="M17 6h3a3 3 0 0 1-3 3" />
    </IconBase>
  );
}

export function CalendarIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
    </IconBase>
  );
}

export function EditIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5z" />
    </IconBase>
  );
}

export function CarIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 12l2-5h10l2 5" />
      <path d="M5 12h14v6H5z" />
      <circle cx="8" cy="18" r="1.5" />
      <circle cx="16" cy="18" r="1.5" />
    </IconBase>
  );
}

export function ShoppingBagIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M6 8h12l-1 13H7L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </IconBase>
  );
}

export function HouseIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </IconBase>
  );
}

export function UtensilsIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 3v8" />
      <path d="M4 3v4a3 3 0 0 0 6 0V3" />
      <path d="M7 11v10" />
      <path d="M17 3v18" />
      <path d="M14 3h3a4 4 0 0 1 0 8h-3" />
    </IconBase>
  );
}

export function MoreVerticalIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function MenuIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </IconBase>
  );
}
