import Task from "./task";
import { IFilter, ITask } from "./types";

interface TaskListProps {
  todoData: Array<ITask>;
  onCompleted: (id: string) => void;
  onDeleted: (id: string) => void;
  onEditingSubmit: (id: string, description: string) => void;
  filter: IFilter;
}

const TaskList = ({
  todoData,
  onCompleted,
  onDeleted,
  onEditingSubmit,
  filter,
}: TaskListProps) => {
  let todoDataAfterFilter: Array<ITask> = [];
  if (filter === "All") {
    todoDataAfterFilter = [...todoData];
  } else if (filter === "Active") {
    todoDataAfterFilter = [...todoData].filter((task) => !task.completed);
  } else if (filter === "Completed") {
    todoDataAfterFilter = [...todoData].filter((task) => task.completed);
  }
  const tasks = todoDataAfterFilter.map((task) => (
    <li key={task.id} className={task.completed ? "completed" : ""}>
      <Task
        id={task.id}
        description={task.description}
        minutes={task.minutes}
        seconds={task.seconds}
        timeStamp={task.timeStamp}
        onCompleted={() => onCompleted(task.id)}
        onDeleted={() => onDeleted(task.id)}
        onEditingSubmit={onEditingSubmit}
      />
    </li>
  ));
  return <ul className="todo-list">{tasks}</ul>;
};

export default TaskList;
