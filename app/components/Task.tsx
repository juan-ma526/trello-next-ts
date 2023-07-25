import { ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  tarea: ITask;
  index: number;
};

type TaskWrapperProps = {
  isDragging: boolean;
  children: ReactNode;
};

const TaskWrapper = ({ isDragging, children }: TaskWrapperProps) => (
  <div className={`${isDragging ? "bg-black" : "bg-slate-200"}`}>
    {children}
  </div>
);

export default function Task({ tarea, index }: Props) {
  return (
    <Draggable draggableId={tarea.id} index={index}>
      {(provided, snapshot) => (
        <TaskWrapper isDragging={snapshot.isDragging}>
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`border-solid border-2 border-gray-600 rounded mb-2 p-2 bg-white`}
          >
            {tarea.content}
          </div>
        </TaskWrapper>
      )}
    </Draggable>
  );
}
