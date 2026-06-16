import { useState } from "react";
import FormSignIn from "../components/Fragments/FormSignIn.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";

function SignIn({ notice, onLogin, users }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const password = String(formData.get("password") ?? "");
    const user = users.find(
      (item) => item.email === email && item.password === password,
    );

    if (!user) {
      setErrorMessage("Email atau password tidak sesuai.");
      return;
    }

    setErrorMessage("");
    onLogin(user);
  }

  return (
    <AuthLayout>
      <FormSignIn
        errorMessage={errorMessage}
        notice={notice}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}

export default SignIn;
