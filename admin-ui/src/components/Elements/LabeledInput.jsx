function LabeledInput({
  autoComplete,
  className = "",
  id,
  label,
  name,
  placeholder,
  type = "text",
  ...props
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-900"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
        className={`w-full rounded border border-slate-400 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 ${className}`}
      />
    </div>
  );
}

export default LabeledInput;
