"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Registro() {
    const router = useRouter();

  return (
    <form
      action={() => router.push('/administrator')}
      className="bg-white w-1/3 rounded-lg shadow-md p-8 flex flex-col gap-4 mx-auto mt-20 justify-center"
      data-testid="formulario-registro"
    >
      <h1 className="font-bold text-3xl text-center">Registro</h1>

      <div className="flex justify-center items-center p-4 gap-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          required
          className="w-full border-black border-b-2 py-2 outline-none"
        />
      </div>

      <div className="flex justify-center items-center p-4 gap-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="w-full border-black border-b-2 py-2 outline-none"
        />
      </div>

      <div className="flex justify-center items-center p-4 gap-4">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
          className="w-full border-black border-b-2 py-2 outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white w-10/12 self-center py-2 font-bold text-2xl rounded-sm hover:bg-gray-800 duration-500"
        id="submit-buton"
      >
        Registrarse
      </button>
      <p className="text-center font-semibold">
        ¿Ya estas registrado?
        <a href="#" className="pl-2 font-bold hover:text-gray-800" onClick={() => router.push('/')}>iniciar sesion</a>
      </p>
    </form>
  );
}

export default Registro;
