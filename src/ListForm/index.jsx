import { useEffect, useState } from "react";
import { List } from "../List";
import "./style.css";

export const ListForm = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [tag, setTag] = useState("Work");

  const [hint, setHint] = useState("");
  const [editedTask, setEditedTask] = useState(null);

  const apiEndpoint =
    "https://669a16149ba098ed61fe4298.mockapi.io/todo/api/v1/tasks";

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleDone = async (id) => {
    await fetch(`${apiEndpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: !status,
      }),
    });
    window.location.reload();
  };

  const handleReopen = async (id) => {
    setStatus(false);

    console.log(status);

    await fetch(`${apiEndpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: status,
      }),
    });
    window.location.reload();
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleTag = (event) => {
    setTag(event.target.value);
  };

  const handleNewData = async (event) => {
    if (taskName === "" || description === "") {
      event.preventDefault();
      setHint(
        "Fill in the task name and the task description. The fields cannot be empty."
      );
      return;
    }

    await fetch(
      "https://669a16149ba098ed61fe4298.mockapi.io/todo/api/v1/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taskName: taskName,
          taskDescription: description,
          done: status,
          priority: priority,
          dueDate: dueDate,
          tag: tag,
        }),
      }
    );
    window.location.reload();
  };

  const handleEdit = async (id) => {
    const response = await fetch(`${apiEndpoint}/${id}`);
    const data = await response.json();
    setEditedTask(data);
  };

  const handleUpdate = async (id) => {
    await fetch(`${apiEndpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskName: taskName,
        taskDescription: description,
        done: status,
        priority: priority,
        dueDate: dueDate,
        tag: tag,
      }),
    });
    window.location.reload();
  };

  return (
    <div className="container--list-form">
      <form className="list-form" action="">
        <ul className="list-form--wrapper">
          <li className="list-form--item">
            <label htmlFor="taskName">
              Task name:
              <input
                onChange={handleTaskName}
                type="text"
                name="taskName"
                id="taskName"
                defaultValue={
                  editedTask !== null ? `${editedTask.taskName}` : `${taskName}`
                }
              />
              {console.log(taskName)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Description:
              <input
                onChange={handleDescription}
                type="text"
                id="description"
                defaultValue={
                  editedTask !== null
                    ? `${editedTask.taskDescription} `
                    : `${description}`
                }
              />
              {console.log(description)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="priority-select">
              Priority:
              <select
                onChange={handlePriority}
                name="priority"
                id="priority-select"
                defaultValue={
                  editedTask !== null
                    ? `${editedTask.priority} `
                    : `${priority}`
                }
              >
                <option value="Top">Top</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              {console.log(priority)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Due Date:
              <input
                onChange={handleDueDate}
                type="date"
                name=""
                id="dueDate"
                // defaultValue={
                //   editedTask !== null
                //     ? `${parseDate(editedTask.dueDate)} `
                //     : `${dueDate}`
                // }
              />
              {console.log(dueDate)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">Select a tag:</label>
            <select
              onChange={handleTag}
              name=""
              id="tag"
              // defaultValue={
              //   editedTask !== null ? `${editedTask.tag} ` : `${tag}`
              // }
            >
              <option value="Work">Work</option>
              <option value="School">School</option>
              <option value="Home">Home</option>
              <option value="Self-care">Self-care</option>
              <option value="Sport">Sport</option>
              {console.log(tag)}
            </select>
          </li>

          {editedTask !== null ? (
            <li className="list-form--item">
              <button onClick={() => handleUpdate(editedTask.id)} type="button">
                Update item
              </button>
            </li>
          ) : (
            <li className="list-form--item">
              <button onClick={handleNewData} type="button">
                Add to the list
              </button>
            </li>
          )}
        </ul>
      </form>
      <div className="list-form--hint">{hint}</div>
      <List onEdit={handleEdit} onDone={handleDone} onReopen={handleReopen} />
    </div>
  );
};
