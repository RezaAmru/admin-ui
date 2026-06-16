import { Link, useRouteError } from "react-router-dom";
import Logo from "../components/Elements/Logo.jsx";

function ErrorContent({ message, status }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 text-slate-900">
      <section className="text-center">
        <Logo className="mb-6" />
        <h1 className="text-2xl font-bold">Sorry,</h1>
        <p className="mt-2 text-sm text-slate-500">
          {status} | {message}
        </p>
        <Link
          to="/login"
          className="mt-6 inline-flex rounded bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Back to login
        </Link>
      </section>
    </main>
  );
}

function ErrorPage() {
  const error = useRouteError();
  const status = error?.status ?? 404;
  const message = error?.statusText || error?.message || "Page not found";

  return <ErrorContent message={message} status={status} />;
}

function NotFoundPage() {
  return <ErrorContent message="Page not found" status={404} />;
}

export { NotFoundPage };
export default ErrorPage;
