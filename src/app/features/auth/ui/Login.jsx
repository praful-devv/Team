import authHooks from "../hooks/authHooks";

function Login() {
  const {
    register,
    handleSubmit,
    onLogin,
    navigate,
    formState: { errors },
  } = authHooks();

 

  ;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-xl">
            A
          </div>

          <h1 className="text-3xl font-bold text-white">Welcome back</h1>

          <p className="mt-2 text-slate-400">
            Sign in to continue to your account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onLogin)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-200">
                  Password
                </label>

                {/* <a
                  href="/forgot-password"
                  className="text-sm text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a> */}
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-700 bg-slate-800"
              />

              <span className="text-sm text-slate-400">Remember me</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/register");
              }}
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
