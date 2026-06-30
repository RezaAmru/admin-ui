import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Balance from "./pages/balance.jsx";
import Dashboard from "./pages/dashboard.jsx";
import ErrorPage, { NotFoundPage } from "./pages/Error.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import { useAuth } from "./context/authContext.jsx";
import { users as seededUsers } from "./seeders/users.js";

const legacyPagePaths = {
  login: "/login",
  "sign-up": "/register",
  "forgot-password": "/forgot-password",
  overview: "/",
};

function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  return children;
}

function NotRequireAuth({ children }) {
  const { user } = useAuth();

  if (user) {
    return <Navigate replace to="/" />;
  }

  return children;
}

function RootRoute() {
  const [searchParams] = useSearchParams();
  const legacyPage = searchParams.get("page");

  if (legacyPage) {
    return <Navigate replace to={legacyPagePaths[legacyPage] ?? "/login"} />;
  }

  return (
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  );
}

function SignInRoute() {
  return (
    <NotRequireAuth>
      <SignIn />
    </NotRequireAuth>
  );
}

function SignUpRoute() {
  const [users, setUsers] = useState(seededUsers);
  const navigate = useNavigate();

  function handleSignUp(newUser) {
    setUsers((currentUsers) => [
      ...currentUsers,
      {
        ...newUser,
        id: crypto.randomUUID(),
        role: "member",
      },
    ]);
    navigate("/login");
  }

  return (
    <NotRequireAuth>
      <SignUp onSignUp={handleSignUp} users={users} />
    </NotRequireAuth>
  );
}

function ForgotPasswordRoute() {
  return (
    <NotRequireAuth>
      <ForgotPassword users={seededUsers} />
    </NotRequireAuth>
  );
}

function DashboardRedirectRoute() {
  return (
    <RequireAuth>
      <Navigate replace to="/" />
    </RequireAuth>
  );
}

function BalanceRoute() {
  return (
    <RequireAuth>
      <Balance />
    </RequireAuth>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SignInRoute />,
  },
  {
    path: "/register",
    element: <SignUpRoute />,
  },
  {
    path: "/sign-up",
    element: <Navigate replace to="/register" />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordRoute />,
  },
  {
    path: "/dashboard",
    element: <DashboardRedirectRoute />,
  },
  {
    path: "/balance",
    element: <BalanceRoute />,
  },
  {
    path: "/balances",
    element: (
      <RequireAuth>
        <Navigate replace to="/balance" />
      </RequireAuth>
    ),
  },
  {
    path: "/overview",
    element: <DashboardRedirectRoute />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
