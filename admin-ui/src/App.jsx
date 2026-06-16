import { createContext, useContext, useMemo, useState } from "react";
import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import ErrorPage, { NotFoundPage } from "./pages/Error.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import { users as seededUsers } from "./seeders/users.js";

const legacyPagePaths = {
  login: "/login",
  "sign-up": "/register",
  "forgot-password": "/forgot-password",
  overview: "/dashboard",
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [users, setUsers] = useState(seededUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [authNotice, setAuthNotice] = useState("");

  const authValue = useMemo(
    () => ({
      authNotice,
      currentUser,
      users,
      login(user) {
        setCurrentUser(user);
        setAuthNotice("");
      },
      logout() {
        setCurrentUser(null);
        setAuthNotice("You have signed out.");
      },
      signUp(newUser) {
        setUsers((currentUsers) => [
          ...currentUsers,
          {
            ...newUser,
            id: crypto.randomUUID(),
            role: "member",
          },
        ]);
        setAuthNotice("Account created. Sign in with your new email.");
      },
    }),
    [authNotice, currentUser, users],
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within AuthProvider.");
  }

  return auth;
}

function HomePage() {
  const [searchParams] = useSearchParams();
  const legacyPage = searchParams.get("page");

  if (legacyPage) {
    return <Navigate to={legacyPagePaths[legacyPage] ?? "/login"} replace />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="rounded bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Login
        </Link>
        <span className="text-slate-400">|</span>
        <Link
          to="/register"
          className="rounded bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Register
        </Link>
      </div>
    </main>
  );
}

function SignInRoute() {
  const { authNotice, login, users } = useAuth();
  const navigate = useNavigate();

  function handleLogin(user) {
    login(user);
    navigate("/dashboard");
  }

  return <SignIn notice={authNotice} onLogin={handleLogin} users={users} />;
}

function SignUpRoute() {
  const { signUp, users } = useAuth();
  const navigate = useNavigate();

  function handleSignUp(newUser) {
    signUp(newUser);
    navigate("/login");
  }

  return <SignUp onSignUp={handleSignUp} users={users} />;
}

function ForgotPasswordRoute() {
  const { users } = useAuth();

  return <ForgotPassword users={users} />;
}

function DashboardRoute() {
  const { currentUser, logout, users } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <Dashboard
      onLogout={handleLogout}
      user={currentUser ?? users[0]}
    />
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    element: <Navigate to="/register" replace />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordRoute />,
  },
  {
    path: "/dashboard",
    element: <DashboardRoute />,
  },
  {
    path: "/overview",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
