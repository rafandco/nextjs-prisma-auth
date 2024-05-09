"use client"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (res.error) {
      alert(res.error)
    } else {
      console.log("Enviando respuesta")
    }
  })

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>
        {/* Campo de entrada para el nombre de usuario */}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: { value: true, message: "Email required" }, // Regla de validación: campo requerido
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="email@domain.com"
        />

        {/* Mensaje de error si hay un error en el campo de email */}
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Password required" }, // Regla de validación: campo requerido
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="******"
        />

        {/* Mensaje de error si hay un error en el campo de password */}
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}

        <button className="bg-blue-500 text-white p-3 rounded-lg w-full mt-2">
          Login
        </button>
      </form>
    </div>
  )
}
export default LoginPage
