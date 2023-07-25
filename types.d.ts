type InitialState = {
  id: string;
  content: string;
};

type InitialState2 = {
  tasks: ITasks;
  columns: IColumns;
  columnOrder: string[];
};

type IColumns = {
  [key: string]: IColumn;
};

type IColumn = {
  id: string;
  title: string;
  taskid: string[];
};

type ITasks = {
  [key: string]: ITask;
};

type ITask = {
  id: string;
  content: string;
};
