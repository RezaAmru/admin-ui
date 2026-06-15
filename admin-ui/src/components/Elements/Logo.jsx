function Logo({ className = "", dark = false }) {
  return (
    <div
      className={`text-center text-3xl font-bold tracking-normal text-teal-600 ${className}`}
    >
      FINE<span className="font-medium text-teal-500">bank</span>
      <span className={dark ? "text-white" : "text-slate-700"}>.IO</span>
    </div>
  );
}

export default Logo;
