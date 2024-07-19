import { useEffect, useState } from "react";
import "./style.css";

export const ListForm = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tag, setTag] = useState("");
  const [task, setTask] = useState({});

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleStatus = () => {
    setStatus(!status);
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

  const postData = async () => {
    const response = await fetch(
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

  return (
    <div className="container--list-form">
      <form className="list-form" action="">
        <ul className="list-form--wrapper">
          <li className="list-form--item">
            <label htmlFor="">
              Task:
              <input onChange={handleTaskName} type="text" name="" id="" />
              {console.log(taskName)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Description:
              <input onChange={handleDescription} type="text" />
              {console.log(description)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Done:
              <input onChange={handleStatus} type="checkbox" name="" id="" />
              {console.log(status)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Priority:
              <select
                onChange={handlePriority}
                defaultValue={"medium"}
                name=""
                id=""
              >
                <option value="top">Top</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              {console.log(priority)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Due Date:
              <input onChange={handleDueDate} type="date" name="" id="" />
              {console.log(dueDate)}
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">Select a tag:</label>
            <select onChange={handleTag} name="" id="">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
              {console.log(tag)}
            </select>
          </li>

          <li className="list-form--item">
            <button onClick={postData} type="button">
              Add to the list
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};
