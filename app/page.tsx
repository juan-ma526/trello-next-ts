"use client";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

const reorder = (
  list: InitialState[],
  startIndex: number,
  endIndex: number
) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default function Home() {
  const [tareas, setTareas] = useState<InitialState[]>(initialState);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }
        setTareas((prevTareas) =>
          reorder(prevTareas, source.index, destination.index)
        );
      }}
    >
      <div key={1} className="flex mt-3 justify-center gap-2">
        {/*Columna 1*/}
        <Droppable droppableId="tareasId">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="bg-slate-300 p-4 mb-4  w-96"
            >
              {tareas.map((objeto, index) => (
                <Draggable
                  key={objeto.id}
                  draggableId={objeto.id}
                  index={index}
                >
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words"
                    >
                      {objeto.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
        {/*Columna 2*/}
        <div className="bg-slate-300 p-4 mb-4  w-96">
          {tareas.map((objeto) => (
            <p
              key={objeto.id}
              className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words"
            >
              {objeto.content}
            </p>
          ))}
        </div>
        {/*Columna 3*/}
        <div className="bg-slate-300 p-4 mb-4  w-96">
          {tareas.map((objeto) => (
            <p
              key={objeto.id}
              className="mt-2 text-slate-700 border-solid border border-black bg-white rounded pl-2 break-words"
            >
              {objeto.content}
            </p>
          ))}
        </div>
      </div>
    </DragDropContext>
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
