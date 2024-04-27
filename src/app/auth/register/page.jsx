"use client" // Indica que este componente es para el cliente

import { useForm } from "react-hook-form"

function RegisterPage() {
  // Inicializa el hook useForm de react-hook-form para gestionar el formulario
  const {
    register, // Función para registrar los campos del formulario
    handleSubmit, // Función para manejar el envío del formulario
    formState: { errors }, // Objeto que contiene los errores de validación del formulario
  } = useForm()

  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit((data) => {
    console.log(data) // Imprime los datos del formulario en la consola
  })

  return (
    // Contenedor principal del formulario
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" onSubmit={onSubmit}>
        {" "}
        {/* Formulario que llama a la función onSubmit al ser enviado */}
        {/* Título del formulario */}
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
        {/* Campo de entrada para el nombre de usuario */}
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username
        </label>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "Username required" }, // Regla de validación: campo requerido
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user"
        />
        {/* Mensaje de error si hay un error en el campo de usuario */}
        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}
        {/* Campo de entrada para el correo electrónico */}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: { value: true, message: "Email required" }, // Regla de validación: campo requerido
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />
        {/* Mensaje de error si hay un error en el campo de correo electrónico */}
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
        {/* Campo de entrada para la contraseña */}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Password required" }, // Regla de validación: campo requerido
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="****"
        />
        {/* Mensaje de error si hay un error en el campo de contraseña */}
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
        {/* Campo de entrada para confirmar la contraseña */}
        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: { value: true, message: "Confirm password required" }, // Regla de validación: campo requerido
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="****"
        />
        {/* Mensaje de error si hay un error en el campo de confirmación de contraseña */}
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </span>
        )}
        {/* Botón de registro */}
        <button className="bg-blue-500 text-white p-3 rounded-lg w-full mt-2">
          Register
        </button>
      </form>
    </div>
  )
}
export default RegisterPage
