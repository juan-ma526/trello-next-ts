"use client";
import Image from "next/image";
import trelloLogo from "../assets/trelloLogo.png";
import Search from "./Search";
import { BiSolidBell, BiSolidUserCircle } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import logoSmall1 from "../assets/logo-small-1.png";
import logoSmall2 from "../assets/logo-small-2.png";

export default function Navbar() {
  const [toggleTrabajo, setToggleTrabajo] = useState(false);

  return (
    <nav className="flex justify-between h-16 bg-black">
      <ul className="flex p-4 w-1/2 h-16 items-center gap-7 cursor-pointer text-white">
        <Image src={trelloLogo} alt="Imagen de trello" width={50} />
        <li>Trello</li>
        <li className="relative hover:bg-slate-800 group">
          Espacio de trabajo
          <ul
            className={`absolute bg-white opacity-100 text-blue-400  left-0 w-[21rem] hidden rounded group-hover:block`}
          >
            <ul className="border-b-2 border-slate-200">
              <h4 className="text-slate-600 text-sm p-3">
                Espacio de trabajo actual
              </h4>
              <li className="flex flex-row items-center">
                <Image className="m-3" src={logoSmall1} alt="pequeño logo" />
                <h5 className="text-base hover:w-56 hover:bg-gray-200  text-blue-900">
                  Espacio-1
                </h5>
              </li>
            </ul>
            <ul>
              <h4 className="text-slate-600 text-sm p-3">
                Tus espacios de trabajo
              </h4>
              <li className="flex flex-row items-center">
                <Image className="m-3" src={logoSmall1} alt="pequeño logo" />
                <h5 className="hover:w-56 hover:bg-gray-200  text-blue-900">
                  Espacio 2
                </h5>
              </li>
              <li className="flex flex-row items-center">
                <Image className="m-3" src={logoSmall2} alt="pequeño logo" />
                <h5 className="hover:w-56 hover:bg-gray-200  text-blue-900">
                  Espacio 2
                </h5>
              </li>
              <li className="flex flex-row items-center">
                <Image className="m-3" src={logoSmall1} alt="pequeño logo" />
                <h5 className="hover:w-56 hover:bg-gray-200  text-blue-900">
                  Espacio 2
                </h5>
              </li>
            </ul>
            <ul>
              <h4 className="text-slate-600 text-sm p-3">
                Espacios de trabajo en los que eres invitado
              </h4>
              <li className="flex flex-row items-center">
                <Image className="m-3" src={logoSmall1} alt="pequeño logo" />
                <h5 className="hover:w-56 hover:bg-gray-200  text-blue-900">
                  Busqueda Laboral
                </h5>
              </li>
              <li className="flex flex-row items-center">
                <Image className="m-3" src={logoSmall2} alt="pequeño logo" />
                <h5 className="hover:w-56 hover:bg-gray-200  text-blue-900">
                  Trabajo Practico
                </h5>
              </li>
              <li className="flex flex-row items-center">
                <Image className="m-3" src={logoSmall2} alt="pequeño logo" />
                <h5 className="hover:w-56 hover:bg-gray-200  text-blue-900">
                  Capsula Proyectos
                </h5>
              </li>
            </ul>
          </ul>
        </li>
        <li>Reciente</li>
        <li>Marcado</li>
        <li>Plantilla</li>
      </ul>
      <div className="flex p-4 h-16 items-center w-2/5 gap-2 justify-end cursor-pointer text-white">
        <Search />
        <BiSolidBell />
        <BsQuestionCircle />
        <BiSolidUserCircle />
      </div>
    </nav>
  );
}
