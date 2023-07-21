"use client";
import { useState } from "react";

const initialState = [
  {
    id: "1",
    content: "Aprender Next js 13",
  },
  {
    id: "2",
    content: "Aprender Typescript",
  },
  {
    id: "3",
    content: "Tomar agua",
  },
  {
    id: "4",
    content: "Sacar la basura",
  },
];

export default function Home() {
  const [tareas, setTareas] = useState<InitialState[]>(initialState);

  return (
    <div className="flex mt-3 justify-center gap-2">
      {/*Columna 1*/}

      <div className="bg-slate-300 p-4 mb-4  w-96">
        {tareas.map((objeto) => (
          <p className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words">
            {objeto.content}
          </p>
        ))}
      </div>
      {/*Columna 2*/}
      <div className="bg-slate-300 p-4 mb-4  w-96">
        {tareas.map((objeto) => (
          <p className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words">
            {objeto.content}
          </p>
        ))}
      </div>
      {/*Columna 3*/}
      <div className="bg-slate-300 p-4 mb-4  w-96">
        {tareas.map((objeto) => (
          <p className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words">
            {objeto.content}
          </p>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="flex mt-3 justify-center gap-2 ">
        <div className="bg-slate-300 p-4 mb-4  w-96">
          <p className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words">
            Nota 1: sacar la basura
          </p>
        </div>
        <div className="bg-slate-300 p-4 mb-4 w-96">
          <p className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words">
            Nota 2: sacar la basuraas
          </p>
          <p className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words">
            Nota 3: sacar la basura
          </p>
        </div>
        <div className="bg-slate-300 p-4 mb-4 w-96">
          <p className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words">
            Nota 3: sacar la basura
          </p>
        </div>
      </div> */
}
{
  /*  <h1>En Proceso</h1>
      {tareas.map((objeto) => (
        <div key={objeto.id}>
          <span>{objeto.content}</span>
        </div>
      ))} */
}
