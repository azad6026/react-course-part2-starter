import { useContext } from "react";
import TasksContext from "./tasksContext";
import useAuthStore from "../auth/store";

const TaskList = () => {
  const useTasks = () => useContext(TasksContext);
  const { tasks, dispatch } = useTasks();
  const { user } = useAuthStore();
  return (
    <>
      {user && <p>{user}</p>}
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: {
              id: Date.now(),
              title: "Task number" + Date.now(),
            },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
