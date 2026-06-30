import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../Elements/Button.jsx";
import CheckBox from "../Elements/CheckBox.jsx";
import LabeledInput from "../Elements/LabeledInput.jsx";
import GoogleIcon from "../GoogleIcon.jsx";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

function FormSignIn({ errorMessage, notice, onSubmit }) {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", status: false }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await onSubmit(values.email, values.password);
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={SignInSchema}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5" noValidate>
            <div>
              <Field name="email">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    autoComplete="email"
                    id="email"
                    label="Email address"
                    placeholder="hello@example.com"
                    type="email"
                  />
                )}
              </Field>
              <ErrorMessage
                className="mt-2 text-sm text-red-600"
                component="p"
                name="email"
              />
            </div>

            <div>
              <Field name="password">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    autoComplete="current-password"
                    id="password"
                    label="Password"
                    placeholder="********"
                    type="password"
                  />
                )}
              </Field>
              <ErrorMessage
                className="mt-2 text-sm text-red-600"
                component="p"
                name="password"
              />
            </div>

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

            <Field name="status">
              {({ field }) => (
                <CheckBox
                  checked={field.value}
                  id="remember-me"
                  label="Keep me signed in"
                  name={field.name}
                  onChange={field.onChange}
                />
              )}
            </Field>

            <Button disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Login"}
            </Button>
          </Form>
        )}
      </Formik>

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
