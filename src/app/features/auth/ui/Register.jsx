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
    <div className="min-h-screen bg-[#1b2330] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#f8f6f0]">
            Create your account
          </h1>
        </div>

        <div className="rounded-2xl border border-[#c9a961]/40 bg-[#f8e6f0] p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onRegister)} className="space-y-5">
           
            <div>
              <label className="mb-2 block text-sm font-medium text-[#1b2340]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className="w-full rounded-lg border border-[#c9a961]/50 bg-white px-4 py-3 text-[#1b2340] outline-0"
              />

              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>

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
                className="w-full rounded-lg border border-[#c9a961]/50 bg-white px-4 py-3 text-[#1b2340] outline-0"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1b2340]">
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
                className="w-full rounded-lg border border-[#c9a961]/50 bg-white px-4 py-3 text-[#1b2340] outline-0"
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
              Create Account
            </button>
          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-[#5a5240]">
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
              className="font-medium text-[#8a6d1f] hover:text-[#c9a961]"
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
