import { Link } from "react-router-dom";
import Button from "../Elements/Button.jsx";
import CheckBox from "../Elements/CheckBox.jsx";
import LabeledInput from "../Elements/LabeledInput.jsx";
import GoogleIcon from "../GoogleIcon.jsx";

function FormSignIn({ errorMessage, notice, onSubmit }) {
  return (
    <>
      <form className="space-y-5" onSubmit={onSubmit}>
        <LabeledInput
          id="email"
          name="email"
          type="email"
          label="Email address"
          placeholder="hello@example.com"
          autoComplete="email"
          required
        />

        <LabeledInput
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          autoComplete="current-password"
          required
        />

        {notice && (
          <p className="rounded border border-teal-200 bg-teal-50 px-3 py-2 text-sm text-teal-700">
            {notice}
          </p>
        )}

        {errorMessage && (
          <p className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </p>
        )}

        <CheckBox id="remember-me" name="rememberMe" label="Keep me signed in" />

        <Button>Login</Button>
      </form>

      <div className="my-7 flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-300" />
        <span className="text-xs text-slate-500">or sign in with</span>
        <span className="h-px flex-1 bg-slate-300" />
      </div>

      <Button
        type="button"
        variant="secondary"
        className="flex items-center justify-center gap-3"
      >
        <GoogleIcon />
        Continue with Google
      </Button>

      <div className="mt-8 flex items-center justify-center gap-4 text-sm">
        <Link
          to="/forgot-password"
          className="font-semibold text-slate-500"
        >
          Forgot password?
        </Link>
        <Link
          to="/register"
          className="font-semibold text-teal-600"
        >
          Create an account
        </Link>
      </div>
    </>
  );
}

export default FormSignIn;
