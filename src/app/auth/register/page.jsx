"use client"
import { useForm } from "react-hook-form"

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" onSubmit={onSubmit}>
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>

        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username
        </label>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "Username required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user"
        />
        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: { value: true, message: "Email required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Password required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="****"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: { value: true, message: "Confirm password required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="****"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </span>
        )}
        <button className="bg-blue-500 text-white p-3 rounded-lg w-full mt-2">
          Register
        </button>
      </form>
    </div>
  )
}
export default RegisterPage
