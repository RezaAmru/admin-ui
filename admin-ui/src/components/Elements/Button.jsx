const baseClasses =
  "w-full rounded px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses = {
  primary: "bg-teal-600 text-white hover:bg-teal-700",
  secondary: "bg-slate-200 text-slate-700 hover:bg-slate-300",
};

function Button({
  children,
  disabled = false,
  onClick,
  type = "submit",
  variant = "primary",
  className = "",
}) {
  const finalClasses = `${baseClasses} ${
    variantClasses[variant] || variantClasses.primary
  } ${className}`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={finalClasses}
    >
      {children}
    </button>
  );
}

export default Button;
