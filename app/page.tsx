"use client";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./components/Column";

const initialState2 = {
  tasks: {
    "task-1": { id: "task-1", content: "Sacar la basura" },
    "task-2": { id: "task-2", content: "Sacar la tv" },
    "task-3": { id: "task-3", content: "Sacar la casa" },
    "task-4": { id: "task-4", content: "Sacar la llanta" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "to do",
      taskid: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskid: [],
    },
    "column-3": {
      id: "column-3",
      title: "Finished",
      taskid: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

/* const reorder = (
  list: InitialState[],
  startIndex: number,
  endIndex: number
) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}; */

export default function Home() {
  //const [tareas, setTareas] = useState<InitialState[]>(initialState);
  const [prueba, setPrueba] = useState<InitialState2>(initialState2);

  // esto es una prueba
  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    // si no cambia el destino solo retorno el valor
    if (!destination) {
      return;
    }
    // si el destino es el mismo que ya tenia y es el mismo item solo retorno
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    // selecciono la columna
    const start = prueba.columns[source.droppableId];
    const finish = prueba.columns[destination.droppableId];

    if (start === finish) {
      //creo un array con todas las tareas de la columna elegida
      const newTaskIds = Array.from(start.taskid);

      //Saco la tarea del arreglo
      newTaskIds.splice(source.index, 1);

      //aca vuelvo a meter la tarea en la posicion que habia hecho el drag
      newTaskIds.splice(destination.index, 0, draggableId);

      //creo una nueva columna, pero el taskid que tiene ahora es el ordenado despues del drag
      const newColumn = {
        ...start,
        taskid: newTaskIds,
      };

      // Y ahora agarro el estado que tenia, y agarro todas las columnas que tenga, y solo modifico la nueva columna y ese nuevo estado lo seteo en mi estado.
      const newState = {
        ...prueba,
        columns: {
          ...prueba.columns,
          [newColumn.id]: newColumn,
        },
      };
      setPrueba(newState);
    } // termina el if

    const startTaskIds = Array.from(start.taskid);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskid: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskid);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskid: finishTaskIds,
    };

    const newState = {
      ...prueba,
      columns: {
        ...prueba.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setPrueba(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div key={1} className="flex mt-3 justify-center gap-2">
        {prueba.columnOrder.map((columnId, index) => {
          const column = prueba.columns[columnId];
          const tareas = column.taskid.map((taskId) => prueba.tasks[taskId]);

          return (
            <Column
              id={column.id}
              column={column}
              tareas={tareas}
              index={index}
            />
          );
        })}
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

/*  <DragDropContext
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
    </DragDropContext> */
