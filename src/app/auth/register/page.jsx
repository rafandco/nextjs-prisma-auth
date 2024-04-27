"use client"
import { useForm } from "react-hook-form"

function RegisterPage() {
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" onSubmit={onSubmit}>
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>

        <label htmlFor="Username" className="text-slate-500 mb-2 block text-sm">
          Username
        </label>
        <input
          type="text"
          {...register("username", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="Email" className="text-slate-500 mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="Password" className="text-slate-500 mb-2 block text-sm">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <label
          htmlFor="ConfirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password
        </label>
        <input
          type="confirmPassword"
          {...register("confirmPassword", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <button className="bg-blue-500 text-white p-3 rounded-lg w-full mt-2">
          Register
        </button>
      </form>
    </div>
  )
}
export default RegisterPage
