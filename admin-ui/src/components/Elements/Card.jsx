import { Link } from "react-router-dom";

function Card({ children, desc, link = false, title }) {
  return (
    <article className="flex h-full flex-col">
      <div className="mb-2 flex items-center justify-between gap-4 text-slate-500">
        <h2 className="text-lg font-semibold text-slate-700">{title}</h2>
        {link && (
          <Link
            to={link}
            className="shrink-0 text-xs font-semibold text-teal-600"
          >
            View All
          </Link>
        )}
      </div>
      <div className="flex-1 rounded bg-white px-6 py-5 text-sm leading-6 text-slate-500 shadow-sm">
        {children ?? desc}
      </div>
    </article>
  );
}

export default Card;
