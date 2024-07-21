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
      <h2 className="list--title">What's on your plate:</h2>
      <div className="list--content__container">
        {tasks.map((task) => {
          return (
            <div className="list--content__task" key={task.id}>
              <div className="list-content__task-decr">
                <div className="list-content__task-decr--part1">
                  <h4 className="list--content__task--item list-content__task--header">
                    {task.taskName}
                  </h4>
                  <div className="list--content__task--item list-content__task--desc">
                    <p> 💬: {task.taskDescription}</p>
                    <p> ❓: {task.tag}</p>
                  </div>
                </div>

                <div className="list--content__task--item list-content__task--status">
                  <p>📈: {task.done === true ? "DONE ✅" : "TO DO 🖋️"}</p>
                  <p>🔥: {task.priority}</p>
                  <p>📅: {task.dueDate}</p>
                </div>
              </div>

              <div className="list--content--handleMenu">
                <button
                  onClick={() => onEdit(task.id)}
                  className="list--content__task--item list--content__task--item--button"
                  type="button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="list--content__task--item list--content__task--item--button"
                  type="button"
                >
                  Delete
                </button>

                {task.done ? (
                  <button
                    onClick={() => onReopen(task.id)}
                    className="list--content__task--item list--content__task--item--button"
                  >
                    🖋️ <br /> Reopen
                  </button>
                ) : (
                  <button
                    onClick={() => onDone(task.id)}
                    className="list--content__task--item list--content__task--item--button"
                  >
                    ✅ <br /> Done
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
