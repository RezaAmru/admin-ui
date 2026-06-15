import Button from "../Elements/Button.jsx";
import LabeledInput from "../Elements/LabeledInput.jsx";

function FormForgotPassword({
  errorMessage,
  onNavigate,
  onSubmit,
  successMessage,
}) {
  return (
    <>
      <form className="space-y-5" onSubmit={onSubmit}>
        <LabeledInput
          id="forgot-email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="hello@example.com"
          autoComplete="email"
          required
        />

        {successMessage && (
          <p className="rounded border border-teal-200 bg-teal-50 px-3 py-2 text-sm text-teal-700">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </p>
        )}

        <Button>Password Reset</Button>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          className="text-sm font-semibold text-slate-500"
          onClick={() => onNavigate("login")}
        >
          Back to login
        </button>
      </div>
    </>
  );
}

export default FormForgotPassword;
