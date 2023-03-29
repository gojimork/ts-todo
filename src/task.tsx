import EditTaskForm from "./edit-task-form";
import Timer from "../timer/timer";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

interface TaskProps {
  id: string;
  description: string;
  minutes: string;
  seconds: string;
  timeStamp: number;
  onCompleted: (id: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onDeleted: (id: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onEditingSubmit: (id: string, description: string) => void;
}

export default function Task({
  id,
  description,
  minutes,
  seconds,
  timeStamp,
  onCompleted,
  onDeleted,
  onEditingSubmit,
}: TaskProps) {
  const [edit, setEdit] = useState(false);

  const onEditedClick = () => {
    setEdit(true);
  };

  const hiddenEditTaskForm = () => {
    setEdit(false);
  };
  const timer =
    minutes || seconds ? <Timer seconds={seconds} minutes={minutes} /> : null;

  if (edit) {
    return (
      <EditTaskForm
        description={description}
        onEditingSubmit={onEditingSubmit}
        id={id}
        hiddenEditTaskForm={hiddenEditTaskForm}
      />
    );
  }
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onClick={onCompleted} />
      <label>
        <span className="description">{description}</span>
        {timer}
        <span className="created">
          {formatDistanceToNow(timeStamp, { addSuffix: true })}
        </span>
      </label>
      <button
        type="button"
        className="icon icon-edit"
        onClick={onEditedClick}
      />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
}
