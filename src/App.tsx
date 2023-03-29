import "./App.css";
import NewTaskForm from "./new-task-form";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface ITask {
  id: string;
  completed: boolean;
  description: string;
  minutes: string;
  seconds: string;
  timeStamp: number;
}

type IFilter = "All" | "Completed" | "Active";

const App: React.FC = () => {
  const initialState: Array<ITask> = [
    {
      id: uuidv4(),
      completed: false,
      description: "drink",
      minutes: "0",
      seconds: "3",
      timeStamp: Date.parse("June 16 1993"),
    },
    {
      id: uuidv4(),
      completed: false,
      description: "sleep",
      minutes: "1",
      seconds: "2",
      timeStamp: Date.parse("June 16 1999"),
    },
    {
      id: uuidv4(),
      completed: false,
      description: "run",
      minutes: "110",
      seconds: "10",
      timeStamp: Date.parse("June 16 2010"),
    },
  ];

  const [todoData, setTodoData] = useState<Array<ITask>>(initialState);
  const [filter, setFilter] = useState<IFilter>("All");

  const clearCompleted = () => {
    setTodoData((todoDataState: Array<ITask>): Array<ITask> => {
      const newTodoData = [...todoDataState].filter((task) => !task.completed);
      return newTodoData;
    });
  };

  const showCompletedTasks = (): void => {
    setFilter("Completed");
  };
  const showAllTasks = (): void => {
    setFilter("All");
  };
  const showActiveTasks = (): void => {
    setFilter("Active");
  };
  const addTask = (
    description: string,
    minutes: string,
    seconds: string
  ): void => {
    const newTask: ITask = {
      id: uuidv4(),
      completed: false,
      description,
      minutes,
      seconds,
      timeStamp: Date.now(),
    };
    setTodoData((todoDataState) => [newTask, ...todoDataState]);
  };

  const deleteTask = (id: string) => {
    setTodoData((todoDataState) => {
      const newTodoData = [...todoDataState].filter((task) => task.id !== id);
      return newTodoData;
    });
  };

  const onEditingSubmit = (id: string, description: string) => {
    setTodoData((todoDataState) => {
      const editedTaskIndex = todoDataState.findIndex((task) => task.id === id);
      const newTodoData = [...todoDataState];
      newTodoData[editedTaskIndex].description = description;
      return newTodoData;
    });
  };

  const completeTask = (id: string) => {
    setTodoData((todoDataState) => {
      const newTodoData = [...todoDataState].map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      });
      return newTodoData;
    });
    if (filter === "Completed") showCompletedTasks();
    if (filter === "Active") showActiveTasks();
  };

  const activeTasksCount: number = todoData.filter(
    (task) => !task.completed
  ).length;
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
    </section>
  );
};

export default App;
