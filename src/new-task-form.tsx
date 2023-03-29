import { useState } from "react";

interface NewTaskFormProps {
  addTask: (description: string, minutes: string, seconds: string) => void;
}

const NewTaskForm = ({ addTask }: NewTaskFormProps) => {
  const [description, setDescription] = useState("");
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");

  const onDescriptionChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(e.currentTarget.value);
  };

  const onSecondsChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSeconds(e.currentTarget.value);
  };

  const onAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description) {
      addTask(description, minutes, seconds);
      setDescription("");
      setMinutes("");
      setSeconds("");
    }
  };

  return (
    <form onSubmit={onAddSubmit}>
      <ul className="task-form">
        <li>
          <input
            className="new-todo"
            placeholder="Task"
            onChange={onDescriptionChange}
            value={description}
          />
        </li>
        <li>
          <input
            className="new-todo"
            type="number"
            placeholder="Min"
            onChange={onMinutesChange}
            value={minutes}
          />
        </li>
        <li>
          <input
            className="new-todo"
            type="number"
            placeholder="Sec"
            onChange={onSecondsChange}
            value={seconds}
          />
        </li>
      </ul>
      <button type="submit" />
    </form>
  );
};

export default NewTaskForm;
