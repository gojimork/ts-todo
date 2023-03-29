import { IFilter } from "./types";

interface TasksFilterProps {
  showActiveTasks: () => void;
  showAllTasks: () => void;
  showCompletedTasks: () => void;
  filter: IFilter;
}

const TasksFilter = ({
  showActiveTasks,
  showAllTasks,
  showCompletedTasks,
  filter,
}: TasksFilterProps) => {
  const btnProps = [
    { onClick: showAllTasks, child: "All" },
    { onClick: showActiveTasks, child: "Active" },
    { onClick: showCompletedTasks, child: "Completed" },
  ];

  const filterArr = btnProps.map(({ onClick, child }) => {
    const className = filter === child ? "selected" : "";
    return (
      <li key={child}>
        <button className={className} onClick={onClick} type="button">
          {child}
        </button>
      </li>
    );
  });

  return <ul className="filters">{filterArr}</ul>;
};

export default TasksFilter;
