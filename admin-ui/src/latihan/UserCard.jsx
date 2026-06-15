function UserCard({ name = "Nama User", email = "user@example.com" }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800">{name}</h2>
      <p className="mt-2 text-sm text-slate-600">{email}</p>
    </article>
  );
}

export default UserCard;
