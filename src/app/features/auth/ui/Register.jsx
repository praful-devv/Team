import authHooks from "../hooks/authHooks";

function Register() {

    const {
      register,
      handleSubmit,
      onRegister,
      navigate,
      formState: { errors },
    } = authHooks();
 

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-xl">
            A
          </div>

          <h1 className="text-3xl font-bold text-white">Create your account</h1>

          <p className="mt-2 text-slate-400">
            Get started with your account today
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onRegister)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              {errors.fullName && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.fullName.message}
                </p>
              )}
            </div>

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
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
