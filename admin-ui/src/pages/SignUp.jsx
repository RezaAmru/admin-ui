import { useState } from "react";
import FormSignUp from "../components/Fragments/FormSignUp.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";

function SignUp({ onSignUp, users }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const password = String(formData.get("password") ?? "");
    const hasAcceptedTerms = formData.get("terms") === "on";
    const isEmailUsed = users.some((user) => user.email === email);

    if (isEmailUsed) {
      setErrorMessage("Email already registered.");
      return;
    }

    if (!hasAcceptedTerms) {
      setErrorMessage("Please accept the terms and privacy policy.");
      return;
    }

    setErrorMessage("");
    onSignUp({ email, name, password });
  }

  return (
    <AuthLayout>
      <FormSignUp
        errorMessage={errorMessage}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}

export default SignUp;
