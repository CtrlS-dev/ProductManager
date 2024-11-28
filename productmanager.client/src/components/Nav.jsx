import DownArrow from "./Icons/DownArrow";
import { IoSearch } from "react-icons/io5";
import Logo from "./Icons/Logo";
import { useState } from "react";

// Componente de la barra de navegacion

// funcion para renderizar la barra de navegacion
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-200 z-30 shadow-xl fixed w-full top-0 h-16 text-black backdrop-blur-lg">
      <div className="flex justify-between items-center h-full w-full mx-auto px-6 sm:px-8">
        {/* Logo and title */}
        <div className="flex items-center">
          <Logo />
          <h1 className="font-extrabold text-xl sm:text-2xl ml-4">
            Product Manager
          </h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2 hover:cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="rounded-full h-10"
          />
          <h3 className="font-semibold">Christopher Nolan</h3>
          <button className="font-bold text-lg mr-4">
            <DownArrow />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden items-center text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-full bg-slate-200 shadow-lg md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="rounded-full h-10"
              />
              <h3 className="font-semibold">Christopher Nolan</h3>
              <button className="font-bold text-lg">
                <DownArrow />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
