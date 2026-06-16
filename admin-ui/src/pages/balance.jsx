import MainLayout from "../components/Layouts/MainLayout.jsx";

function Balance({ onLogout, user }) {
  return (
    <MainLayout onLogout={onLogout} user={user}>
      <div className="rounded bg-white p-6 text-slate-700 shadow-sm">
        Test Balance Page
      </div>
    </MainLayout>
  );
}

export default Balance;
