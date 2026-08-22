import authHooks from "../hooks/authHooks";

function Login() {
  const {
    register,
    handleSubmit,
    onLogin,
    navigate,
    formState: { errors },
  } = authHooks();

  return (
    <div className="min-h-screen bg-[#1b2330] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#f8f6f0] font-serif">
            Team Management
          </h1>
        </div>

        <div className="rounded-2xl border border-[#c9a961]/40 bg-[#f8e6f0] p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onLogin)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#1b2340]">
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
                className="w-full rounded-lg border border-[#c9a961]/50 bg-white px-4 py-3 text-[#1b2340] outline-0 "
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-[#1b2340]">
                  Password
                </label>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full rounded-lg border border-[#c9a961]/50 bg-white px-4 py-3 text-[#1b2340] outline-0 "
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#1b2340] py-3 font-semibold text-[#f8f6f0] transition hover:bg-[#242c4d] active:scale-[0.95]"
            >
              Sign In
            </button>
          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-[#5a5240]">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/register");
              }}
              className="font-medium text-[#8a6d1f] hover:text-[#c9a961]"
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
