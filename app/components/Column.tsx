import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

type Props = {
  id: string;
  column: IColumn;
  tareas: ITask[];
  index: number;
};

export default function Column({ id, column, tareas, index }: Props) {
  return (
    <div
      key={index}
      className="flex flex-col  justify-center items-center gap-2 m-8 border-solid border-2 rounded bg-white"
    >
      <h3 className="p-2">{column.title.toUpperCase()}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="w-96 p-4 mb-4 min-h-[78%]"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tareas.map((tarea, index) => (
              <Task key={tarea.id} tarea={tarea} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
