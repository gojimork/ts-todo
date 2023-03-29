import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface ITask {
  id: string;
  completed: boolean;
  description: string;
  minutes: number;
  seconds: number;
  timeStamp: number;
}

function App() {
  const initialState: Array<ITask> = [
    {
      id: uuidv4(),
      completed: false,
      description: "drink",
      minutes: 0,
      seconds: 3,
      timeStamp: Date.parse("June 16 1993"),
    },
    {
      id: uuidv4(),
      completed: false,
      description: "sleep",
      minutes: 1,
      seconds: 2,
      timeStamp: Date.parse("June 16 1999"),
    },
    {
      id: uuidv4(),
      completed: false,
      description: "run",
      minutes: 110,
      seconds: 10,
      timeStamp: Date.parse("June 16 2010"),
    },
  ];
  const [todoData, setTodoData] = useState<Array<ITask>>(initialState);
  return <div className="App"></div>;
}

export default App;
