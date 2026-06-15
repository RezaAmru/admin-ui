function CheckBox({ className = "", id, name, label, ...props }) {
  return (
    <label htmlFor={id} className="flex items-center gap-3 text-sm text-slate-700">
      <input
        id={id}
        name={name}
        type="checkbox"
        {...props}
        className={`h-4 w-4 rounded border-slate-400 text-teal-600 accent-teal-600 ${className}`}
      />
      {label}
    </label>
  );
}

export default CheckBox;
