import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <article
      data-post-id={id}
      data-user-id={userId}
      className="group flex h-full min-h-80 flex-col rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-special-red-2 hover:bg-rose-50 hover:shadow-lg"
    >
      <h2 className="capitalize text-xl font-bold leading-snug text-slate-800">
        {title}
      </h2>

      <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">{body}</p>

      <button
        type="button"
        className={`mt-6 w-full rounded-md px-4 py-3 text-sm font-semibold text-white transition duration-200 ${
          isClicked
            ? "bg-special-red-2 group-hover:bg-[#cf472c] hover:bg-[#cf472c]"
            : "bg-gray-500 group-hover:bg-gray-400 hover:bg-gray-400"
        }`}
        onClick={() => setIsClicked(true)}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </article>
  );
}

export default PostCard;
