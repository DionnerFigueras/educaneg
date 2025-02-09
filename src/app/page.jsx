"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <form
      action={() => router.push('/administrator')}
      className="bg-white w-1/3 rounded-lg shadow-md p-8 flex flex-col gap-4 mx-auto mt-20 justify-center"
    >
      <h1 className="font-bold text-3xl text-center">Login</h1>

      <div className="flex justify-center items-center p-4 gap-4">
        <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
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
        <FontAwesomeIcon icon={faLock} className="w-5 h-5" />
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
        id="submit-buton"
        className="bg-black text-white w-10/12 self-center py-2 font-bold text-2xl rounded-sm hover:bg-gray-800 duration-500"
      >
        Login
      </button>
      <a href="#" className="text-center font-semibold">Olvido su contraseña?</a>
      <a href="#" className="text-center font-semibold" onClick={() => router.push('/registro')} id="registro">Registrate</a>
    </form>
  );
}
