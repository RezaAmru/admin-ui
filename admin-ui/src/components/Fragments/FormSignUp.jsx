import Button from "../Elements/Button.jsx";
import CheckBox from "../Elements/CheckBox.jsx";
import LabeledInput from "../Elements/LabeledInput.jsx";

function FormSignUp({ errorMessage, onNavigate, onSubmit }) {
  return (
    <>
      <form className="space-y-5" onSubmit={onSubmit}>
        <LabeledInput
          id="name"
          name="name"
          label="Full name"
          placeholder="Tanzir Rahman"
          autoComplete="name"
          required
        />

        <LabeledInput
          id="signup-email"
          name="email"
          type="email"
          label="Email address"
          placeholder="hello@example.com"
          autoComplete="email"
          required
        />

        <LabeledInput
          id="signup-password"
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          autoComplete="new-password"
          minLength={8}
          required
        />

        <CheckBox
          id="terms"
          name="terms"
          label="I agree to the terms and privacy policy"
          required
        />

        {errorMessage && (
          <p className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </p>
        )}

        <Button>Create account</Button>
      </form>

      <div className="mt-8 text-center">
        <button
          type="button"
          className="text-sm font-semibold text-teal-600"
          onClick={() => onNavigate("login")}
        >
          Back to login
        </button>
      </div>
    </>
  );
}

export default FormSignUp;
