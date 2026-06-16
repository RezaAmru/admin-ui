function Logo({ className = "", dark = false, variant = "primary" }) {
  const variantClasses = {
    primary: "text-3xl text-teal-600 sm:text-4xl",
    secondary: "text-sm text-white sm:text-2xl",
  };
  const isSecondary = variant === "secondary";

  return (
    <div
      className={`flex justify-center text-center font-bold tracking-normal ${
        variantClasses[variant] || variantClasses.primary
      } ${className}`}
    >
      FINE
      <span className={isSecondary ? "font-medium text-white" : "font-medium text-teal-500"}>
        bank
      </span>
      <span className={dark || isSecondary ? "text-white" : "text-slate-700"}>
        .IO
      </span>
    </div>
  );
}

export default Logo;
