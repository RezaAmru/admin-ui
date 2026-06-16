import Input from "./Input.jsx";

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
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
        className={className}
      />
    </div>
  );
}

export default LabeledInput;
