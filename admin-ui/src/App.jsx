import { useEffect, useState } from "react";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Overview from "./pages/Overview.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import { users as seededUsers } from "./seeders/users.js";

const validPages = new Set(["login", "sign-up", "forgot-password", "overview"]);

function getPageFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  const page = searchParams.get("page") ?? "login";

  return validPages.has(page) ? page : "login";
}

function App() {
  const [page, setPage] = useState(getPageFromUrl);
  const [users, setUsers] = useState(seededUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [authNotice, setAuthNotice] = useState("");

  useEffect(() => {
    function handlePopState() {
      setPage(getPageFromUrl());
    }

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigateTo(nextPage) {
    const safePage = validPages.has(nextPage) ? nextPage : "login";

    window.history.pushState({}, "", `?page=${safePage}`);
    setPage(safePage);
  }

  function handleLogin(user) {
    setCurrentUser(user);
    setAuthNotice("");
    navigateTo("overview");
  }

  function handleLogout() {
    setCurrentUser(null);
    setAuthNotice("You have signed out.");
    navigateTo("login");
  }

  function handleSignUp(newUser) {
    setUsers((currentUsers) => [
      ...currentUsers,
      {
        ...newUser,
        id: crypto.randomUUID(),
        role: "member",
      },
    ]);
    setAuthNotice("Account created. Sign in with your new email.");
    navigateTo("login");
  }

  if (page === "forgot-password") {
    return (
      <ForgotPassword
        onNavigate={navigateTo}
        users={users}
      />
    );
  }

  if (page === "sign-up") {
    return (
      <SignUp
        onNavigate={navigateTo}
        onSignUp={handleSignUp}
        users={users}
      />
    );
  }

  if (page === "overview") {
    return (
      <Overview
        onLogout={handleLogout}
        user={currentUser ?? users[0]}
      />
    );
  }

  return (
    <SignIn
      notice={authNotice}
      onLogin={handleLogin}
      onNavigate={navigateTo}
      users={users}
    />
  );
}

export default App;
