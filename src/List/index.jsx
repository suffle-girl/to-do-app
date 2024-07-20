import { useEffect, useState } from "react";
import "./style.css";

export const List = ({ onEdit, onDone, onReopen }) => {
  const [tasks, setTasks] = useState([]);

  const apiEndpoint =
    "https://669a16149ba098ed61fe4298.mockapi.io/todo/api/v1/tasks";

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(apiEndpoint);
      const data = await response.json();

      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${apiEndpoint}/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="container--list">
      <h2 className="list--title">Here is a list of your tasks:</h2>
      {tasks.map((task) => {
        return (
          <div className="list--content__task" key={task.id}>
            <div className="list-content__task--header">{task.taskName}</div>
            <div className="list-content__task--desc">
              <p> Description: {task.taskDescription}</p>
              <p> Category: {task.tag}</p>
            </div>
            <div className="list-content__task--status">
              <p>Status: {task.done === true ? "DONE" : "TO DO"}</p>
              <p>Pritoriy: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
            </div>
            <button onClick={() => onEdit(task.id)} type="button">
              Edit
            </button>
            <button onClick={() => handleDelete(task.id)} type="button">
              Delete
            </button>

            {task.done ? (
              <button onClick={() => onReopen(task.id)}>✅</button>
            ) : (
              <input onClick={() => onDone(task.id)} type="checkbox" />
            )}
          </div>
        );
      })}
    </div>
  );
};
