import Image from "next/image";
import trelloLogo from "../assets/trelloLogo.png";
import Search from "./Search";
import { BiSolidBell, BiSolidUserCircle } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-16 bg-black">
      <div className="flex p-4 w-1/2 h-16 items-center gap-7 cursor-pointer text-white">
        <Image src={trelloLogo} alt="Imagen de trello" width={50} />
        <h1>Trello</h1>
        <h2>Espacio de trabajo</h2>
        <h2>Reciente</h2>
        <h2>Marcado</h2>
        <h2>Plantilla</h2>
      </div>
      <div className="flex p-4 h-16 items-center w-2/5 gap-2 justify-end cursor-pointer text-white">
        <Search />
        <BiSolidBell />
        <BsQuestionCircle />
        <BiSolidUserCircle />
      </div>
    </nav>
  );
}
