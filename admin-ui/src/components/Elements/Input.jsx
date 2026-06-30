function Input({
  backgroundColor = "bg-white",
  border = "border-slate-400",
  className = "",
  icon = false,
  id,
  wrapperClassName = "",
  ...props
}) {
  const inputClasses = `w-full rounded border px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${
    icon ? "pr-10" : ""
  } ${border} ${backgroundColor} ${className}`;

  if (!icon) {
    return <input id={id} className={inputClasses} {...props} />;
  }

  return (
    <div className={`relative ${wrapperClassName}`}>
      <input id={id} className={inputClasses} {...props} />
      {typeof icon !== "boolean" && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>
      )}
    </div>
  );
}

export default Input;
