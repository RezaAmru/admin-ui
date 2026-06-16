import { useState } from "react";
import FormForgotPassword from "../components/Fragments/FormForgotPassword.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";

function ForgotPassword({ users }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const registeredUser = users.find((user) => user.email === email);

    if (!registeredUser) {
      setSuccessMessage("");
      setErrorMessage("Email is not registered.");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("Password reset link has been sent.");
  }

  return (
    <AuthLayout logoClassName="mb-8">
      <div className="mb-7 text-center">
        <h1 className="text-xl font-bold text-slate-900">Forgot Password?</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Enter your email address to get the password reset link.
        </p>
      </div>

      <FormForgotPassword
        errorMessage={errorMessage}
        onSubmit={handleSubmit}
        successMessage={successMessage}
      />
    </AuthLayout>
  );
}

export default ForgotPassword;
