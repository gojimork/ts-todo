// import TasksFilter from "./tasks-filter";
import { IFilter } from "./types";

interface FooterProps {
  showActiveTasks: () => void;
  showAllTasks: () => void;
  showCompletedTasks: () => void;
  clearCompleted: () => void;
  activeTasksCount: number;
  filter: IFilter;
}

const Footer = ({
  showActiveTasks,
  showAllTasks,
  showCompletedTasks,
  clearCompleted,
  activeTasksCount,
  filter,
}: FooterProps) => (
  <footer className="footer">
    <span className="todo-count">{activeTasksCount} items left</span>
    {/* <TasksFilter
      showActiveTasks={showActiveTasks}
      showAllTasks={showAllTasks}
      showCompletedTasks={showCompletedTasks}
      filter={filter}
    /> */}
    <button type="button" className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);

export default Footer;
