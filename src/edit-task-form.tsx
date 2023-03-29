import { useState } from "react";

interface EditTaskFormProps {
  description: string;
  onEditingSubmit: (id: string, description: string) => void;
  hiddenEditTaskForm: () => void;
  id: string;
}

const EditTaskForm = ({
  description,
  onEditingSubmit,
  hiddenEditTaskForm,
  id,
}: EditTaskFormProps) => {
  const [newDescription, setNewDescription] = useState(description);

  const onEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEditingSubmit(id, newDescription);
    hiddenEditTaskForm();
  };

  return (
    <form className="editing" onSubmit={onSubmit}>
      <input
        type="text"
        className="edit"
        defaultValue={description}
        onChange={onEditChange}
      />
    </form>
  );
};

export default EditTaskForm;
