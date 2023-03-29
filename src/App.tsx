import "./App.css";
import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { IFilter, ITask } from "./types";

const App = () => {
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

  const [todoData, setTodoData] = useState(initialState);
  const [filter, setFilter] = useState<IFilter>("All");

  const clearCompleted = () => {
    setTodoData((todoDataState: Array<ITask>): Array<ITask> => {
      const newTodoData = [...todoDataState].filter((task) => !task.completed);
      return newTodoData;
    });
  };

  const showCompletedTasks = () => {
    setFilter("Completed");
  };
  const showAllTasks = () => {
    setFilter("All");
  };
  const showActiveTasks = () => {
    setFilter("Active");
  };
  const addTask = (description: string, minutes: string, seconds: string) => {
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

      <section className="main">
        <TaskList
          todoData={todoData}
          onCompleted={completeTask}
          onDeleted={deleteTask}
          onEditingSubmit={onEditingSubmit}
          filter={filter}
        />
      </section>
    </section>
  );
};

export default App;
